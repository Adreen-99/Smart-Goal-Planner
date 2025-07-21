import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import GoalList from '../Components/GoalList';
import GoalForm from '../Components/GoalForm';
import Summary from '../Components/Summary';

import './index.css';


function Dashboard({ goals, onDelete, onAddToSavings }) {
  return (
    <>
      <Summary goals={goals} />
      <GoalList goals={goals} onDelete={onDelete} onAddToSavings={onAddToSavings} />
    </>
  );
}

const url = "http://localhost:3001/goals";

function App() {
  const [goals, setGoals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch');
        return response.json();
      })
      .then(data => {
        setGoals(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const handleAddGoal = (newGoal) => {
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGoal)
    })
      .then(response => {
        if (!response.ok) throw new Error('Failed to add goal');
        return response.json();
      })
      .then(data => {
        setGoals([...goals, data]);
      })
      .catch(error => setError(error.message));
  };

  const handleDeleteGoal = (id) => {
    fetch(`${url}/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setGoals(goals.filter(goal => goal.id !== id));
      })
      .catch(error => setError(error.message));
  };

  const handleAddToSavings = (id, amount) => {
    fetch(`${url}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ savedAmount: amount })
    })
      .then(() => {
        setGoals(goals.map(goal =>
          goal.id === id ? { ...goal, savedAmount: amount } : goal
        ));
      })
      .catch(error => setError(error.message));
  };

  if (isLoading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <Router>
      <div className="app">
        <h1>FinTech Saving Goals</h1>

        <nav>
          <Link to="/">Dashboard</Link> | <Link to="/new">Add Goal</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                goals={goals}
                onDelete={handleDeleteGoal}
                onAddToSavings={handleAddToSavings}
              />
            }
          />
          <Route
            path="/new"
            element={
              <GoalForm
                onAddGoal={handleAddGoal}
                onCancel={() => {}}
              />
            }
          />
          <Route path="*" element={<p>404 Page Not Found</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

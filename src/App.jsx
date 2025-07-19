import {useEffect, useState } from 'react'
import goalList from '../Components/GoalList';
import goalForm from '../Components/GoalForm';
import summary from '../Components/Summary';
import "./index.css";
import GoalList from '../Components/GoalList';
import Summary from '../Components/Summary';
import GoalForm from '../Components/GoalForm';

const url = "http://localhost:3001/goals";

function App() {

  const [goals, setGoals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Fetch goals from db.json
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

  // Add a new goal
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
        setShowForm(false);
      })
      .catch(error => setError(error.message));
  };

  // Delete a goal
  const handleDeleteGoal = (id) => {
    fetch(`${url}/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setGoals(goals.filter(goal => goal.id !== id));
      })
      .catch(error => setError(error.message));
  };

  // Add to savings
  const handleAddToSavings = (id, amount) => {
    fetch(`${url}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ savedAmount: amount })
    })
      .then(() => {
        setGoals(goals.map(goal => 
          goal.id === id ? {...goal, savedAmount: amount} : goal
        ));
      })
      .catch(error => setError(error.message));
  };

  if (isLoading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;


  return (
    <div className="app">
      <h1>My Savings Goals</h1>
      
      {!showForm ? (
        <button onClick={() => setShowForm(true)}>Add New Goal</button>
      ) : (
        <GoalForm 
          onAddGoal={handleAddGoal} 
          onCancel={() => setShowForm(false)} 
        />
      )}
      
      <Summary goals={goals} />
      <GoalList
        goals={goals} 
        onDelete={handleDeleteGoal} 
        onAddToSavings={handleAddToSavings} 
      />
    </div>
  )
}

export default App;
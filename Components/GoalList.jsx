import React from 'react';

function GoalList({ goals, onDelete, onAddToSavings }) {

  const handleAddMoney = (id, currentAmount) => {
    const amount = parseFloat(prompt("How much to add?", "0"));
    if (!isNaN(amount) && amount > 0) {
      onAddToSavings(id, currentAmount + amount);
    }
  };

  const calculateProgress = (saved, target) => {
    return Math.min(100, Math.round((saved / target) * 100));
  };

  if (goals.length === 0) {
    return (
      <div className="dashboard-card">
        <p className="no-goals-message">No goals found. Create your first savings goal!</p>
      </div>
    );
  }

  return (
    <div className="dashboard-card">
      <h2 className="dashboard-section-title">Your Savings Goals</h2>
      <div className="table-wrapper">
        <table className="goal-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Target</th>
              <th>Saved</th>
              <th>Progress</th>
              <th>Deadline</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {goals.map((goal) => (
              <tr key={goal.id}>
                <td>{goal.name}</td>
                <td>{goal.category}</td>
                <td>${goal.targetAmount.toLocaleString()}</td>
                <td>${goal.savedAmount.toLocaleString()}</td>
                <td>
                  {goal.savedAmount >= goal.targetAmount
                    ? <span className="goal-complete">Completed!</span>
                    : `${calculateProgress(goal.savedAmount, goal.targetAmount)}%`}
                </td>
                <td>{goal.deadline}</td>
                <td>
                  <button className="btn-add" onClick={() => handleAddMoney(goal.id, goal.savedAmount)}>Add</button>
                  <button className="btn-delete" onClick={() => onDelete(goal.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GoalList;

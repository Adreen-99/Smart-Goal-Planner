import React from 'react'

function Summary({ goals }) {

  const totalGoals = goals.length;
  const totalSaved = goals.reduce((sum, goal) => sum + goal.savedAmount, 0);
  const totalTarget = goals.reduce((sum, goal) => sum + goal.targetAmount, 0);
  const completedGoals = goals.filter(goal => goal.savedAmount >= goal.targetAmount).length;

  return (
     <div className="summary">
      <h3>Summary</h3>
      <div className="summary-grid">
        <div className="summary-item">
          <h4>Total Goals</h4>
          <p>{totalGoals}</p>
        </div>
        <div className="summary-item">
          <h4>Total Saved</h4>
          <p>${totalSaved}</p>
        </div>
        <div className="summary-item">
          <h4>Total Target</h4>
          <p>${totalTarget}</p>
        </div>
        <div className="summary-item">
          <h4>Completed</h4>
          <p>{completedGoals}</p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
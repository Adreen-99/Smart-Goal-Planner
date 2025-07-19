import {useState} from 'react';

function GoalForm({onAddGoal,onCancel }) {

    const[formData, setFormData] = useState({
        name: "",
        targetAmount: "",
        category: "Other",
        deadline: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev =>({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    const newGoal = {
      ...formData,
      targetAmount: Number(formData.targetAmount),
      savedAmount: 0,
      createdAt: new Date().toISOString().split('T')[0]
    };
    onAddGoal(newGoal);
  };

  return (
     <form onSubmit={handleSubmit} className="goal-form">
      <h2>Add New Goal</h2>
      
      <label>
        Goal Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      
      <label>
        Target Amount ($):
        <input
          type="number"
          name="targetAmount"
          min="1"
          value={formData.targetAmount}
          onChange={handleChange}
          required
        />
      </label>
      
      <label>
        Category:
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Travel">Travel</option>
          <option value="Emergency">Emergency</option>
          <option value="Other">Other</option>
        </select>
      </label>
      
      <label>
        Target Date:
        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          required
        />
      </label>
      
      <div className="form-actions">
        <button type="submit">Save Goal</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>

    </form>
  )
}

export default GoalForm;
import GoalForm from "../Components/GoalForm";

function NewGoal({ onAddGoal }) {
  return (
    <GoalForm onAddGoal={onAddGoal} />
  );
}

export default NewGoal;

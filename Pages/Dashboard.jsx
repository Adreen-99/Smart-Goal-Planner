import Summary from "../Summary";
import GoalList from "../GoalList";

function Dashboard({ goals, onDelete, onAddToSavings }) {
  return (
    <>
      <Summary goals={goals} />
      <GoalList
        goals={goals}
        onDelete={onDelete}
        onAddToSavings={onAddToSavings}
      />
    </>
  );
}

export default Dashboard;

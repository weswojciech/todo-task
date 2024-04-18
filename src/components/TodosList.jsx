export const TodosList = ({ todos, handleCompletion, handleDelete}) => {
  return (
    <ul>
      {todos.map(task => (
        <li key={task.id}>
          {task.title}, {task.completed ? "completed" : "incomplete"}
          <button onClick={() => handleCompletion(task.id)}>Task done</button>
          <button onClick={() => handleDelete(task.id)}>Remove from list</button>
        </li>
      ))}
    </ul>
  );
};

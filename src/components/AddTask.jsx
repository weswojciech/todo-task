import { useState } from "react";

export const AddTask = ({ todos, addTodo }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(query)
    setQuery('');
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleInputChange}/>
      <button type='submit'>Add task!</button>
    </form>
  );
};
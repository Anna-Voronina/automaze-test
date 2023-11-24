import PropTypes from "prop-types";
import { ToDoItem } from "../ToDoItem/ToDoItem";

export const ToDoList = ({ toDos }) => {
  return (
    <ul>
      {toDos.map((toDo) => (
        <ToDoItem key={toDo._id} toDo={toDo} />
      ))}
    </ul>
  );
};

ToDoList.propTypes = {
  toDos: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      priority: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};

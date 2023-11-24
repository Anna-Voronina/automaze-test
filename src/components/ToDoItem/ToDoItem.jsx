"use client";

import PropTypes from "prop-types";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";

import { Modal } from "../Modal/Modal";
import { EditForm } from "../EditForm/EditForm";

import { updateToDoStatus, deleteToDoAction } from "@/serverActions/actions";

export const ToDoItem = ({ toDo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { description, priority, completed } = toDo;

  const handleChangeStatus = async () => {
    await updateToDoStatus({ toDoId: toDo._id, completed: !completed });
  };

  const handleDeleteToDo = async () => {
    await deleteToDoAction(toDo._id);
  };

  const handleModalOpen = () => {
    setIsModalOpen((prev) => !prev);
    document.body.style.overflow = "hidden";
  };

  const handleModalClose = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <li>
        <p>{description}</p>
        <span>{priority}</span>
        <input
          type="checkbox"
          name="completed"
          defaultChecked={completed}
          onChange={handleChangeStatus}
        />
        <button type="button" onClick={handleDeleteToDo}>
          Delete
        </button>
        <button type="button" onClick={handleModalOpen}>
          <CiEdit />
        </button>
      </li>
      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <EditForm toDo={toDo} handleModalClose={handleModalClose} />
        </Modal>
      )}
    </>
  );
};

ToDoItem.propTypes = {
  toDo: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    priority: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

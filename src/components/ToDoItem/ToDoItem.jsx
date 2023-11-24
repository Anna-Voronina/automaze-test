"use client";

import PropTypes from "prop-types";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

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
      <li className="flex items-center justify-between gap-3 rounded-lg bg-mainBlue py-2 px-4 md:py-3 md:px-7">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="completed"
            defaultChecked={completed}
            onChange={handleChangeStatus}
            className="w-5 h-5 md:w-6 md:h-6"
          />
          <p className="w-32 text-overflow md:w-80 xl:w-96 text-lg md:text-xl">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button type="button" onClick={handleDeleteToDo}>
            <MdDeleteForever className="w-7 h-7 md:w-8 md:h-8 fill-white" />
          </button>
          <button type="button" onClick={handleModalOpen}>
            <CiEdit className="w-7 h-7 md:w-8 md:h-8 fill-white" />
          </button>
          <span className="w-3">{priority}</span>
        </div>
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

"use client";

import PropTypes from "prop-types";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";

import { Modal } from "../Modal/Modal";
import { EditForm } from "../EditForm/EditForm";

import { updateToDoStatus, deleteToDoAction } from "@/serverActions/actions";

export const ToDoItem = ({ toDo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const { description, priority, completed } = toDo;

  const handleChangeStatus = async () => {
    try {
      await updateToDoStatus({ toDoId: toDo._id, completed: !completed });
    } catch (error) {
      toast.error("Server error. Try again later.");
    }
  };

  const handleDeleteToDo = async () => {
    try {
      setDisabled(true);
      await deleteToDoAction(toDo._id);
      setDisabled(false);
    } catch (error) {
      toast.error("Server error. Try again later.");
    }
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
      <li className="flex items-center justify-between gap-3 rounded-lg bg-mainBlue py-2 px-4 md:py-3 md:px-7 text-lg text-white">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="completed"
            defaultChecked={completed}
            onChange={handleChangeStatus}
            className="peer w-5 h-5 md:w-6 md:h-6 cursor-pointer"
          />
          <p className="w-28 text-overflow md:w-80 xl:w-96 md:text-xl peer-checked:line-through peer-checked:text-gray-300">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex justify-center items-center p-1 w-7 md:w-9 xl:w-10 border-[1px] border-solid border-white rounded-[50%] text-sm md:text-lg font-bold">
            {priority}
          </span>
          <button type="button" onClick={handleModalOpen} className="group">
            <CiEdit className="w-7 h-7 md:w-8 md:h-8 fill-white group-hover:fill-teal-300 group-focus:fill-teal-300 transition-colors" />
          </button>
          <button
            type="button"
            onClick={handleDeleteToDo}
            className="group"
            disabled={disabled}
          >
            <MdDeleteForever className="w-7 h-7 md:w-8 md:h-8 fill-white group-hover:fill-teal-300 group-focus:fill-teal-300 group-disabled:opacity-30 transition-colors" />
          </button>
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

"use client";

import { useState } from "react";
import PropTypes from "prop-types";

import { PriorityRange } from "../PriorityRange/PriorityRange";

import { updateToDoAction } from "@/serverActions/actions";

export const EditForm = ({ toDo, handleModalClose }) => {
  const { description, priority, completed } = toDo;

  const [descr, setDescr] = useState(description);

  const handleDescriptionChange = (event) => {
    setDescr(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    await updateToDoAction({ toDoId: toDo._id, formData });

    handleModalClose();
  };

  return (
    <div className="flex flex-col gap-y-3 items-center">
      <h2 className="text-3xl font-medium">Edit</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
        <input
          type="text"
          name="description"
          placeholder="Enter text..."
          className="w-2/4 h-10 p-3 rounded-lg bg-white"
          value={descr}
          onChange={handleDescriptionChange}
        />
        <PriorityRange priority={priority} />
        <button type="submit">Complete</button>
      </form>
    </div>
  );
};

EditForm.propTypes = {
  toDo: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    priority: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleModalClose: PropTypes.func.isRequired,
};

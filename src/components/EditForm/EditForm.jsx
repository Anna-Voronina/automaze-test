"use client";

import { useState } from "react";
import PropTypes from "prop-types";

import { PriorityRange } from "../PriorityRange/PriorityRange";

import { updateToDoAction } from "@/serverActions/actions";

export const EditForm = ({ toDo, handleModalClose }) => {
  const { description, priority, completed } = toDo;

  const [descr, setDescr] = useState(description);
  const [priorityRange, setPriorityRange] = useState(priority ? priority : 1);

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
    <div className="flex flex-col gap-y-7 justify-center items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-mainBlue">Editing</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-5 justify-center items-center w-full"
      >
        <input
          type="text"
          name="description"
          placeholder="Enter text..."
          className="w-full md:w-4/5 h-10 p-3 md:py-5 md:px-6 rounded-lg border-2 xl:border-[3px] border-solid border-mainBlue text-lg hover:border-hoverBlue focus:border-hoverBlue focus:outline-none transition-colors"
          value={descr}
          onChange={handleDescriptionChange}
        />
        <PriorityRange
          priority={priorityRange}
          setPriority={setPriorityRange}
          variant="edit"
        />
        <button
          type="submit"
          className="py-2 md:py-3 px-5 md:px-6 xl:px-7 rounded-sm bg-mainBlue text-base xl:text-xl font-medium text-white hover:bg-hoverBlue focus:bg-hoverBlue transition-colors"
        >
          Complete
        </button>
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

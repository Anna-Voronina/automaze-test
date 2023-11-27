"use client";

import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { toast } from "react-toastify";

import { PriorityRange } from "../PriorityRange/PriorityRange";

import { addToDoAction } from "@/serverActions/actions";
import { getUserIdFromLocalStorage } from "@/utils/getUserIdFromLocalStorage";

export const AddToDoForm = () => {
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(1);

  const resetAddForm = () => {
    setDescription("");
    setPriority(1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isDescrFieldEmpty = !event.target.elements.description.value;

    if (isDescrFieldEmpty) {
      toast.info("Please enter the text for your todo.");
      return;
    }

    const userId = getUserIdFromLocalStorage();
    const formData = new FormData(event.currentTarget);

    try {
      await addToDoAction({ formData, params: { userId } });
      resetAddForm();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center gap-7 bg-sky-500 w-full pt-32 pb-10 background-image"
    >
      <input
        type="text"
        name="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Enter your todo..."
        className="w-4/5 md:w-2/4 h-14 py-3 px-4 rounded-lg bg-white placeholder:text-lg border-2 border-solid border-transparent hover:border-hoverBlue focus:border-hoverBlue focus:outline-none transition-colors"
      />
      <div className="flex flex-col gap-y-6 items-center">
        <PriorityRange
          variant="add"
          priority={priority}
          setPriority={setPriority}
        />
        <button
          type="submit"
          className="group flex justify-center items-center py-3 px-8 rounded-lg bg-white hover:bg-mainBlue focus:bg-mainBlue transition-colors"
        >
          <IoAddOutline
            size={30}
            className="stroke-mainBlue group-hover:stroke-white group-focus:stroke-white transition-colors"
          />
        </button>
      </div>
    </form>
  );
};

"use server";

import { revalidatePath } from "next/cache";
import {
  addToDo,
  deleteToDo,
  getAllToDos,
  updateCompletedStatus,
  updateToDo,
} from "@/services/api";

export const getAllToDosAction = async (params) => {
  try {
    return await getAllToDos(params);
  } catch (error) {
    throw new Error(error.response.data.message);
  }

  revalidatePath("/");
};

export const addToDoAction = async ({ formData, params }) => {
  try {
    const description = formData.get("description");
    const priority = formData.get("priority");

    const toDo = { description, priority };

    await addToDo({ toDo, params });
  } catch (error) {
    throw new Error(error.response.data.message);
  }

  revalidatePath("/");
};

export const deleteToDoAction = async ({ toDoId, params }) => {
  try {
    await deleteToDo({ toDoId, params });
  } catch (error) {
    throw new Error(error.response.data.message);
  }

  revalidatePath("/");
};

export const updateToDoStatus = async ({ toDoId, completed, params }) => {
  try {
    await updateCompletedStatus({ toDoId, completed, params });
  } catch (error) {
    throw new Error(error.response.data.message);
  }

  revalidatePath("/");
};

export const updateToDoAction = async ({ toDoId, formData, params }) => {
  try {
    const description = formData.get("description");
    const priority = formData.get("priority");

    const updatedToDo = { description, priority };

    await updateToDo({ toDoId, updatedToDo, params });
  } catch (error) {
    throw new Error(error.response.data.message);
  }

  revalidatePath("/");
};

"use server";

import { revalidatePath } from "next/cache";
import {
  addToDo,
  deleteToDo,
  updateCompletedStatus,
  updateToDo,
} from "@/services/api";

export const addToDoAction = async (formData) => {
  try {
    const description = formData.get("description");
    const priority = formData.get("priority");

    const toDo = { description, priority };

    await addToDo(toDo);
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/");
};

export const deleteToDoAction = async (toDoId) => {
  try {
    await deleteToDo(toDoId);
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/");
};

export const updateToDoStatus = async ({ toDoId, completed }) => {
  try {
    await updateCompletedStatus({ toDoId, completed });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/");
};

export const updateToDoAction = async ({ toDoId, formData }) => {
  try {
    const description = formData.get("description");
    const priority = formData.get("priority");

    const updatedToDo = { description, priority };

    await updateToDo({ toDoId, updatedToDo });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/");
};
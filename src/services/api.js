import axios from "axios";

const instance = axios.create({
  baseURL: "https://automaze-test-backend.onrender.com/api",
});

export const getAllToDos = async (params) => {
  const { data } = await instance.get("/todos", {
    params,
  });
  return data;
};

export const getToDoById = async (toDoId) => {
  const data = await instance.get(`/todos/${toDoId}`);
  return data;
};

export const addToDo = async (toDo) => {
  const data = await instance.post("/todos", toDo);
  return data;
};

export const updateToDo = async ({ toDoId, updatedToDo }) => {
  const data = await instance.put(`/todos/${toDoId}`, updatedToDo);
  return data;
};

export const updateCompletedStatus = async ({ toDoId, completed }) => {
  const data = await instance.patch(`/todos/${toDoId}/completed`, {
    completed,
  });
  return data;
};

export const deleteToDo = async (toDoId) => {
  const data = await instance.delete(`/todos/${toDoId}`);
  return data;
};

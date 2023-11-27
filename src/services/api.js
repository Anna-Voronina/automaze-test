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

export const addToDo = async ({ toDo, params }) => {
  const data = await instance.post("/todos", toDo, {
    params,
  });
  return data;
};

export const updateToDo = async ({ toDoId, updatedToDo, params }) => {
  const data = await instance.put(`/todos/${toDoId}`, updatedToDo, {
    params,
  });
  return data;
};

export const updateCompletedStatus = async ({ toDoId, completed, params }) => {
  const data = await instance.patch(
    `/todos/${toDoId}/completed`,
    {
      completed,
    },
    {
      params,
    }
  );
  return data;
};

export const deleteToDo = async ({ toDoId, params }) => {
  const data = await instance.delete(`/todos/${toDoId}`, {
    params,
  });
  return data;
};

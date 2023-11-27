"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { Filters } from "@/components/Filters/Filters";
import { NoToDos } from "@/components/NoToDos/NoToDos";
import { ToDoList } from "@/components/ToDoList/ToDoList";
import { getAllToDosAction } from "@/serverActions/actions";
import { getUserIdFromLocalStorage } from "@/utils/getUserIdFromLocalStorage";

export const PageWrapper = ({ params }) => {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    const userId = getUserIdFromLocalStorage();
    params.userId = userId;

    const fetchToDos = async () => {
      try {
        const fetchedToDos = await getAllToDosAction(params);
        setToDos(fetchedToDos);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchToDos();
  }, [params]);

  return (
    <div className="flex flex-col gap-y-3 md:gap-y-8 p-3 md:5 mx-auto">
      <Filters />
      {toDos.length > 0 ? <ToDoList toDos={toDos} /> : <NoToDos />}
    </div>
  );
};

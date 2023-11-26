import { AddToDoForm } from "@/components/AddToDoForm/AddToDoForm";
import { Filters } from "@/components/Filters/Filters";
import { NoToDos } from "@/components/NoToDos/NoToDos";
import { ToDoList } from "@/components/ToDoList/ToDoList";
import { getAllToDos } from "@/services/api";

export default async function Home({ searchParams }) {
  const searchQuery = searchParams?.search || "";
  const sortOrder = searchParams?.sort || "asc";
  const status = searchParams?.status || "all";

  const params = {
    searchQuery,
    sortOrder,
  };

  if (status && status !== "all") {
    const completed = status === "done" ? true : false;
    params.completed = completed;
  }

  const toDos = await getAllToDos(params);

  return (
    <main className="flex min-h-screen flex-col items-center gap-8">
      <AddToDoForm />
      {toDos.length > 0 ? (
        <div className="flex flex-col gap-y-3 md:gap-y-8 p-3 md:5 mx-auto">
          <Filters />
          <ToDoList toDos={toDos} />
        </div>
      ) : (
        <NoToDos />
      )}
    </main>
  );
}

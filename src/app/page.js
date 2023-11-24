import { AddToDoForm } from "@/components/AddToDoForm/AddToDoForm";
import { ToDoList } from "@/components/ToDoList/ToDoList";
import { getAllToDos } from "@/services/api";

export default async function Home() {
  const toDos = await getAllToDos();

  return (
    <main className="flex min-h-screen flex-col items-center gap-8">
      <AddToDoForm />
      <ToDoList toDos={toDos} />
    </main>
  );
}

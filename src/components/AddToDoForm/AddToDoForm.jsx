import { IoAddOutline } from "react-icons/io5";

export const AddToDoForm = () => {
  return (
    <form className="flex justify-center items-center gap-7 bg-sky-500 w-full pt-20 pb-10">
      <input
        type="text"
        name="addTodo"
        placeholder="Enter text..."
        className="w-2/4 h-10 p-3 rounded-lg bg-white"
      />
      <button
        type="submit"
        className="flex justify-center items-center h-10 py-3 px-5 rounded-lg bg-white"
      >
        <IoAddOutline size={24} className="stroke-sky-600" />
      </button>
    </form>
  );
};

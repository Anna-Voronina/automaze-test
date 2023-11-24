import { IoAddOutline } from "react-icons/io5";
import { addToDoAction } from "@/serverActions/actions";
import { PriorityRange } from "../PriorityRange/PriorityRange";

export const AddToDoForm = () => {
  return (
    <form
      action={addToDoAction}
      className="flex flex-col md:flex-row justify-center items-center gap-7 bg-sky-500 w-full pt-20 pb-10"
    >
      <input
        type="text"
        name="description"
        placeholder="Enter your todo..."
        className="w-4/5 md:w-2/4 h-10 p-3 rounded-lg bg-white"
      />
      <PriorityRange />
      <button
        type="submit"
        className="flex justify-center items-center h-10 py-3 px-5 rounded-lg bg-white"
      >
        <IoAddOutline size={24} className="stroke-sky-600" />
      </button>
    </form>
  );
};

import { IoAddOutline } from "react-icons/io5";
import { addToDoAction } from "@/serverActions/actions";
import { PriorityRange } from "../PriorityRange/PriorityRange";

export const AddToDoForm = () => {
  return (
    <form
      action={addToDoAction}
      className="flex flex-col justify-center items-center gap-7 bg-sky-500 w-full pt-32 pb-10 background-image"
    >
      <input
        type="text"
        name="description"
        placeholder="Enter your todo..."
        className="w-4/5 md:w-2/4 h-14 py-3 px-4 rounded-lg bg-white placeholder:text-lg"
      />
      <div className="flex flex-col gap-y-6 items-center">
        <PriorityRange />
        <button
          type="submit"
          className="flex justify-center items-center py-3 px-8 rounded-lg bg-white"
        >
          <IoAddOutline size={30} className="stroke-mainBlue" />
        </button>
      </div>
    </form>
  );
};

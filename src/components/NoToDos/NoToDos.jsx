import { FcTodoList } from "react-icons/fc";

export const NoToDos = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-3 p-3">
      <h3 className="text-center text-xl md:text-2xl xl:text-3xl font-semibold text-hoverBlue">
        There are no todos in your list yet.
      </h3>
      <FcTodoList size={120} className="md:w-40 md:h-40 xl:w-44 xl:h-44" />
    </div>
  );
};

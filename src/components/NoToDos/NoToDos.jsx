import { FcTodoList } from "react-icons/fc";

export const NoToDos = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-3 p-3">
      <h3 className="text-center text-xl font-semibold text-hoverBlue">
        There are no todos in your list yet.
      </h3>
      <FcTodoList size={120} />
    </div>
  );
};

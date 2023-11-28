import { FcTodoList } from "react-icons/fc";

export const NoToDos = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-3 p-3">
      <h3 className="max-w-[300px] md:max-w-[500px] xl:max-w-[600px] text-center text-lg md:text-xl xl:text-2xl font-semibold text-hoverBlue">
        It seems that there are no todos in your list yet or no todos matching
        your current filters or search request.
      </h3>
      <FcTodoList size={120} className="md:w-36 md:h-36 xl:w-44 xl:h-44" />
    </div>
  );
};

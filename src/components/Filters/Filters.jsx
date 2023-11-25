import { PriorityFilter } from "../PriorityFilter/PriorityFilter";
import { SearchBar } from "../SearchBar/SearchBar";
import { StatusFilter } from "../StatusFilter/StatusFilter";

export const Filters = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-y-5 md:gap-y-7">
      <SearchBar />
      <div className="flex flex-col md:w-full md:flex-row justify-between items-center gap-y-5">
        <StatusFilter />
        <PriorityFilter />
      </div>
    </div>
  );
};

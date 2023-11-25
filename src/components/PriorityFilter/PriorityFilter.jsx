"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { LiaSortAmountUpAltSolid } from "react-icons/lia";
import { LiaSortAmountDownSolid } from "react-icons/lia";

export const PriorityFilter = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const sortOrder = searchParams.get("sort");

  const handleSorting = (sortOption) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", sortOption);

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex justify-center items-center gap-x-2 text-hoverBlue">
      <p className="text-base md:text-xl">Priority</p>
      {sortOrder === "desc" ? (
        <button type="button" onClick={() => handleSorting("asc")}>
          <LiaSortAmountUpAltSolid size={20} className="md:w-8 md:h-8" />
        </button>
      ) : (
        <button type="button" onClick={() => handleSorting("desc")}>
          <LiaSortAmountDownSolid size={20} className="md:w-8 md:h-8" />
        </button>
      )}
    </div>
  );
};

"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

export const StatusFilter = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const selectedStatus = searchParams.get("status") || "all";

  const handleStatusChange = (status) => {
    const params = new URLSearchParams(searchParams);
    params.set("status", status);

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <ul className="flex justify-center items-center gap-x-3">
      <li>
        <label className="radio-label">
          <input
            type="radio"
            name="status"
            value="all"
            checked={selectedStatus === "all"}
            onChange={() => handleStatusChange("all")}
            className="peer cursor-pointer md:w-4 md:h-4"
          />
          <span className="peer-checked:text-blue-700">All</span>
        </label>
      </li>
      <li>
        <label className="radio-label">
          <input
            type="radio"
            name="status"
            value="done"
            checked={selectedStatus === "done"}
            onChange={() => handleStatusChange("done")}
            className="peer cursor-pointer md:w-4 md:h-4"
          />
          <span className="peer-checked:text-blue-700">Done</span>
        </label>
      </li>
      <li>
        <label className="radio-label">
          <input
            type="radio"
            name="status"
            value="undone"
            checked={selectedStatus === "undone"}
            onChange={() => handleStatusChange("undone")}
            className="peer cursor-pointer md:w-4 md:h-4"
          />
          <span className="peer-checked:text-blue-700">Undone</span>
        </label>
      </li>
    </ul>
  );
};

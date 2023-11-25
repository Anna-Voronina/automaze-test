"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { IoIosSearch } from "react-icons/io";

export const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((query) => {
    const params = new URLSearchParams(searchParams);

    if (query) {
      params.set("search", query);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative w-full">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        defaultValue={searchParams.get("search")?.toString()}
        onChange={(event) => handleSearch(event.target.value)}
        className="w-full h-14 py-3 px-4 pr-14 rounded-[40px] bg-teal-300 placeholder:text-lg placeholder:text-hoverBlue border-2 border-solid border-transparent hover:border-hoverBlue focus:border-hoverBlue focus:outline-none transition-colors"
      />
      <IoIosSearch
        size={30}
        className="group absolute top-1/2 right-4 translate-y-[-50%] fill-hoverBlue "
      />
    </div>
  );
};

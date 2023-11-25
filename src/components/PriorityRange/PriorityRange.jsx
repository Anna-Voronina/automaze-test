"use client";

import PropTypes from "prop-types";

export const PriorityRange = ({ priority, setPriority, variant }) => {
  const handleRangeChange = (event) => {
    if (setPriority) {
      setPriority(Number(event.target.value));
    } else {
      setRangeValue(Number(event.target.value));
    }
  };

  return (
    <div
      className={`flex flex-col gap-y-3 items-center gap-x-12 rounded-xl p-3 ${
        variant === "add" &&
        "border-2 border-solid border-white shadow-snowWhite text-white"
      } text-xl font-bold`}
    >
      <p className="text-center text-base md:text-lg xl:text-xl tracking-wide">
        Set priority for your todo
      </p>
      <div className="flex items-center gap-x-3">
        <input
          type="range"
          name="priority"
          min={1}
          max={10}
          step={1}
          value={priority}
          onChange={handleRangeChange}
          className="cursor-pointer"
        />
        <span className="w-4 text-hoverBlue">{priority}</span>
      </div>
    </div>
  );
};

PriorityRange.propTypes = {
  priority: PropTypes.number.isRequired,
  setPriority: PropTypes.func.isRequired,
  variant: PropTypes.string.isRequired,
};

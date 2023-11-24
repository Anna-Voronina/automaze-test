"use client";

import { useState } from "react";
import PropTypes from "prop-types";

export const PriorityRange = ({ priority }) => {
  const [rangeValue, setRangeValue] = useState(priority ? priority : 1);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  return (
    <div className="flex items-center gap-x-12 rounded-xl p-3 border-2 border-solid border-white shadow-snowWhite text-xl font-bold text-white">
      <p className="tracking-wide">Set priority for your todo</p>
      <div className="flex items-center gap-x-3">
        <input
          type="range"
          name="priority"
          min={1}
          max={10}
          step={1}
          value={rangeValue}
          onChange={handleRangeChange}
        />
        <span className="w-4">{rangeValue}</span>
      </div>
    </div>
  );
};

PriorityRange.propTypes = {
  priority: PropTypes.number,
};

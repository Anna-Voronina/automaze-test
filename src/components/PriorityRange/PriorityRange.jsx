"use client";

import { useState } from "react";
import PropTypes from "prop-types";

export const PriorityRange = ({ priority }) => {
  const [rangeValue, setRangeValue] = useState(priority ? priority : 1);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  return (
    <div className="flex flex-col items-center gap-y-3">
      <p>Set priority of your todo</p>
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
        <span className="text-lg">{rangeValue}</span>
      </div>
    </div>
  );
};

PriorityRange.propTypes = {
  priority: PropTypes.number,
};

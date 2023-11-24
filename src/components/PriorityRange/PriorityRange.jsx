"use client";

import { useState } from "react";
import PropTypes from "prop-types";

export const PriorityRange = ({ priority }) => {
  const [rangeValue, setRangeValue] = useState(priority ? priority : 1);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  return (
    <>
      <input
        type="range"
        name="priority"
        min={1}
        max={10}
        step={1}
        value={rangeValue}
        onChange={handleRangeChange}
      />
      <span>{rangeValue}</span>
    </>
  );
};

PriorityRange.propTypes = {
  priority: PropTypes.number,
};

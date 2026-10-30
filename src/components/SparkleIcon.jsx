import React from 'react';

export const SparkleIcon = ({ className = "w-4 h-4", color = "#A3E635" }) => (
  <svg
    viewBox="0 0 24 24"
    fill={color}
    className={className}
    aria-hidden="true"
  >
    <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
  </svg>
);

export default SparkleIcon;

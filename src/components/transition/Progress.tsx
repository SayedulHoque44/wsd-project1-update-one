"use client";
import { useEffect, useState } from "react";
const Progress = ({ popularity }) => {
  const popularityPercentage = (parseFloat(popularity) * 10).toFixed(2);
  const percentage = popularityPercentage.slice(0, 2);
  const [circumference] = useState(50 * 2 * Math.PI);
  const [percent, setPercent] = useState(percentage);
  useEffect(() => {
    setPercent(percentage);
  }, [percentage]);
  return (
    <div
      className={`relative flex items-center justify-center`}
      style={{ "--circumference": circumference, "--percent": percent }}
    >
      <svg
        className={`flex w-19 h-19 items-center justify-center rounded-full bg-[#081C22] `}
        aria-hidden="true"
      >
        <circle
          className="text-gray-800"
          strokeWidth="3"
          stroke="currentColor"
          fill="transparent"
          r={30}
          cx={35}
          cy={35}
        />
        <circle
          strokeWidth="3"
          style={{
            strokeDasharray: "var(--circumference)",
            strokeDashoffset: `calc(var(--circumference) - var(--percent) / 100 * var(--circumference))`,
          }}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={30}
          cx={35}
          cy={35}
        />
      </svg>
      <span className={`absolute text-sm text-white`}>{percent}%</span>
    </div>
  );
};
export default Progress;

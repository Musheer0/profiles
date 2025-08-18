"use client";

import { Clock1, Clock2, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes, useEffect, useState } from "react";

const hourIcons:Record<number,ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>> = {
  1: Clock1,
  2: Clock2,
  3: Clock3,
  4: Clock4,
  5: Clock5,
  6: Clock6,
  7: Clock7,
  8: Clock8,
  9: Clock9,
  10: Clock10,
  11: Clock11,
  12: Clock12,
};

export default function TimeLabel({ size = 15 }: { size?: number }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours() % 12 || 12; // 12-hour format
  const ClockIcon = hourIcons[hours];

  const formattedTime = time.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

  return (
    <div className="time blur-in flex items-center gap-1">
      <ClockIcon size={size} />
      <p>{formattedTime}</p>
    </div>
  );
}

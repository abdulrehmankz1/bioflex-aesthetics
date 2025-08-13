import React from "react";

interface StatCardProps {
  value: string;
  label: string;
}

function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="p-5 rounded-[20px] border border-[#E8E8E8] shadow-[2px_2px_2px_0_rgba(0,0,0,0.15)] glass-box text_dark">
      <div className="fs-35">{value}</div>
      <div>{label}</div>
    </div>
  );
}

export default StatCard;

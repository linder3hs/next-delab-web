"use client";
import { useState, ReactNode } from "react";

interface Props {
  titles: string[];
  content?: ReactNode[];
}
export default function Tabs({ titles, content }: Props) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="">
      <div className="flex gap-5 md:gap-20 w-full overflow-auto">
        {titles.map((title, index) => (
          <button
            key={title}
            onClick={() => setActiveTab(index)}
            className={`font-bold text-base md:text-xl ${
              activeTab === index && "border-b-2 border-b-primary"
            }`}
          >
            {title}
          </button>
        ))}
      </div>
      <div className="mt-10">
        {content && content[activeTab] && content[activeTab]}
      </div>
    </div>
  );
}

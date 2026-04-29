"use client";
import React from "react";
import { useRef } from "react";
import FundraisingCard from "../FundraisingCard.tsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CategorySectionProps {
  category: string;
  fundraisers: any[];
}

export function CategorySection({
  category,
  fundraisers,
}: CategorySectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = direction === "left" ? -600 : 600;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{category}</h2>
      <div className="relative">
        <button
          className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div
          className="flex gap-6 overflow-x-auto scroll-smooth py-4 px-1 no-scrollbar"
          ref={scrollContainerRef}
        >
          {fundraisers.map((fundraiser, index) => (
            <div key={index} className="w-[300px] flex-none">
              <FundraisingCard
                key={index}
                title={fundraiser.title}
                description={fundraiser.description}
                raisedAmount={fundraiser.raised}
                goalAmount={fundraiser.goal}
                imageUrl={fundraiser.imageUrl}
              />
            </div>
          ))}
        </div>
        <button
          className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

"use client"
import React from "react";

interface CategoryNavProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  "Medical & Healing",
  "Volunteer & Travel",
  "Charity & Nonprofits",
  "Personal"
]

export function CategoryNav({ activeCategory, onCategoryChange }: CategoryNavProps) {
  return (
    <nav className="border-b border-gray-200">
      <div className="flex space-x-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`relative px-1 py-4 text-sm font-medium transition-colors ${
              activeCategory === category 
                ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </nav>
  )
}


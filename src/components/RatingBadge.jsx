import React from 'react';
import { Star } from 'lucide-react';

export default function RatingBadge({ platform, rating, count }) {
  const plat = platform.toLowerCase();
  
  let starColor = 'text-[#f2b90f]';
  let platformLabel = 'Google';
  
  if (plat === 'zomato') {
    starColor = 'text-[#cb202d]';
    platformLabel = 'Zomato';
  } else if (plat === 'swiggy') {
    starColor = 'text-[#fc8019]';
    platformLabel = 'Swiggy';
  }

  return (
    <div className="inline-flex items-center gap-2 bg-app-card border border-app-border px-4 py-2 rounded-full text-xs transition-all hover:bg-app-card-hover select-none">
      <Star
        className={`w-3.5 h-3.5 fill-current ${starColor}`}
      />
      <span className="font-bold text-app-white">{rating}★</span>
      <span className="text-app-muted">
        {platformLabel} ({count})
      </span>
    </div>
  );
}

import React from 'react';
import { Star } from 'lucide-react';

export default function RatingBadge({ platform, rating, count }) {
  const isGoogle = platform.toLowerCase() === 'google';

  return (
    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/5 px-4 py-2 rounded-full text-xs transition-all hover:bg-white/10 select-none">
      <Star
        className={`w-3.5 h-3.5 fill-current ${
          isGoogle ? 'text-[#f2b90f]' : 'text-red-500'
        }`}
      />
      <span className="font-bold text-white">{rating}★</span>
      <span className="text-gray-400">
        {isGoogle ? 'Google' : 'Zomato'} ({count})
      </span>
    </div>
  );
}

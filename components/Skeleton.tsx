
import React from 'react';

export const DetailSkeleton: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-pulse">
      <div className="h-4 w-32 bg-slate-200 rounded-full mb-8"></div>
      <div className="flex items-center gap-6 mb-12">
        <div className="w-20 h-20 rounded-3xl bg-slate-100"></div>
        <div className="flex-1 space-y-3">
          <div className="h-10 w-2/3 bg-slate-200 rounded-2xl"></div>
          <div className="h-4 w-1/3 bg-slate-100 rounded-full"></div>
        </div>
      </div>
      <div className="space-y-6">
        <div className="h-48 w-full bg-slate-100 rounded-[2.5rem]"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-64 bg-slate-100 rounded-[2.5rem]"></div>
          <div className="h-64 bg-slate-100 rounded-[2.5rem]"></div>
        </div>
      </div>
    </div>
  );
};

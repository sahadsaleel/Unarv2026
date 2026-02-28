import React from 'react';
import committeeImg from '../assets/committee .jpeg'; // Note the space in filename based on directory listing

export default function CommitteePage() {
  return (
    <div className="min-h-screen bg-[#0d1f17] flex items-center justify-center pt-[72px]">
      <div className="w-full max-w-7xl px-4 py-8">
        <img
          src={committeeImg}
          alt="Riyadh KMC Committee"
          className="w-full h-auto object-contain rounded-lg shadow-2xl border border-[#c8a84b]/30"
          style={{ maxHeight: 'calc(100vh - 120px)' }}
        />
      </div>
    </div>
  );
}

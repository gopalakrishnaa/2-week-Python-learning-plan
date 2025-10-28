
import React from 'react';
import type { InfoSectionData } from '../types';
import { CheckIcon } from './icons';

interface InfoSectionProps {
  data: InfoSectionData;
}

const InfoSection: React.FC<InfoSectionProps> = ({ data }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-bold text-white mb-4">{data.title}</h3>
      <ul className="space-y-3">
        {data.items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckIcon className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
            <span className="text-slate-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoSection;

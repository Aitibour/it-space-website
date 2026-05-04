'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

interface Props {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
}

export function Faq({ items, title = 'Frequently Asked Questions', subtitle }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-[#00B4FF] text-sm font-bold uppercase tracking-widest mb-3">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0D1B3E] mb-3">{title}</h2>
          {subtitle && <p className="text-slate-500 text-lg">{subtitle}</p>}
        </div>

        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-[#0D1B3E] text-sm md:text-base pr-4">{item.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-[#00B4FF] flex-shrink-0 transition-transform duration-300 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <p className="px-6 text-slate-500 text-sm leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

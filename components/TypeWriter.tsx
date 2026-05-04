'use client';

import { useState, useEffect } from 'react';

interface Props {
  phrases: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
}

export function TypeWriter({
  phrases,
  className = '',
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseMs = 2400,
}: Props) {
  const [text, setText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIdx];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (charIdx < phrase.length) {
        timer = setTimeout(() => {
          setText(phrase.slice(0, charIdx + 1));
          setCharIdx((i) => i + 1);
        }, typingSpeed);
      } else {
        timer = setTimeout(() => setDeleting(true), pauseMs);
      }
    } else {
      if (charIdx > 0) {
        timer = setTimeout(() => {
          setText(phrase.slice(0, charIdx - 1));
          setCharIdx((i) => i - 1);
        }, deletingSpeed);
      } else {
        setDeleting(false);
        setPhraseIdx((i) => (i + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [charIdx, deleting, phraseIdx, phrases, typingSpeed, deletingSpeed, pauseMs]);

  return (
    <span className={className}>
      {text}
      <span className="animate-pulse ml-0.5">|</span>
    </span>
  );
}

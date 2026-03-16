'use client';

import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Square } from 'lucide-react';

type Props = { text: string };

export default function BlogAudioPlayer({ text }: Props) {
  const [playing, setPlaying] = useState(false);
  const [supported, setSupported] = useState(false);
  const uttRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    setSupported(typeof window !== 'undefined' && 'speechSynthesis' in window);
    return () => window.speechSynthesis?.cancel();
  }, []);

  function play() {
    if (!supported) return;
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setPlaying(true);
      return;
    }
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.rate = 0.95;
    utt.onend = () => setPlaying(false);
    utt.onerror = () => setPlaying(false);
    uttRef.current = utt;
    window.speechSynthesis.speak(utt);
    setPlaying(true);
  }

  function pause() {
    window.speechSynthesis.pause();
    setPlaying(false);
  }

  function stop() {
    window.speechSynthesis.cancel();
    setPlaying(false);
  }

  if (!supported) return null;

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900 px-5 py-3 w-fit">
      <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Listen</span>
      <div className="h-4 w-px bg-white/10" />
      {playing ? (
        <button
          onClick={pause}
          aria-label="Pause audio"
          className="flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
        >
          <Pause size={16} /> Pause
        </button>
      ) : (
        <button
          onClick={play}
          aria-label="Play audio"
          className="flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
        >
          <Play size={16} /> Play
        </button>
      )}
      <button
        onClick={stop}
        aria-label="Stop audio"
        className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-300 transition-colors"
      >
        <Square size={14} /> Stop
      </button>
    </div>
  );
}

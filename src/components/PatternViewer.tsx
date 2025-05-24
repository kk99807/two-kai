'use client';

import { useState } from 'react';
import type { TwoKaiPattern } from '@/lib/greekUtils';
import { findTwoKaiPattern, highlightKaiPattern } from '@/lib/greekUtils';

interface PatternViewerProps {
  pattern: {
    id: string;
    section: string;
    verse: string;
    greekText: string;
    englishText: string;
    structure: string;
    wordCount: number;
    interval: number;
    explanation: string;
  };
}

export default function PatternViewer({ pattern }: PatternViewerProps) {
  const [showDiagram, setShowDiagram] = useState(true);

  // Find the pattern in the Greek text
  const kaiPattern = findTwoKaiPattern(pattern.greekText);
  const highlightedGreek = kaiPattern ? highlightKaiPattern(pattern.greekText, kaiPattern) : pattern.greekText;

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title font-serif">{pattern.verse}</h2>
        {/* <p className="text-sm text-base-content/70 mb-4">{pattern.section}</p> */}

        <div className="grid md:grid-cols-2 gap-8">
          {/* Greek Text */}
          <div>
            <h3 className="text-xl font-serif mb-4">Greek Text</h3>
            <div className="bg-base-200 p-4 rounded-lg">
              <div 
                className="font-['Noto_Serif'] text-lg leading-relaxed [&>span.text-primary]:!text-primary [&>span.text-secondary]:!text-secondary [&>span.text-accent]:!text-accent"
                dangerouslySetInnerHTML={{ __html: highlightedGreek }}
              />
            </div>
          </div>

          {/* English Translation */}
          <div>
            <h3 className="text-xl font-serif mb-4">English Translation</h3>
            <div className="bg-base-200 p-4 rounded-lg">
              <p className="text-lg leading-relaxed">{pattern.englishText}</p>
            </div>
          </div>
        </div>

        {/* Pattern Explanation */}
        <div className="mt-8 prose">
          <h3 className="text-xl font-serif">Pattern Explanation</h3>
          <p>{pattern.explanation}</p>
          <div className="mt-4">
            <p className="text-sm text-base-content/70">
              Word Count: {pattern.wordCount} | Interval: {pattern.interval} words
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 
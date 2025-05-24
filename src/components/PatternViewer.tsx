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

        {/* Pattern Diagram */}
        {kaiPattern && showDiagram && (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-serif">Pattern Structure</h3>
              <button 
                className="btn btn-ghost btn-sm"
                onClick={() => setShowDiagram(!showDiagram)}
              >
                Hide Diagram
              </button>
            </div>
            
            <div className="bg-base-200 p-4 rounded-lg">
              <div className="flex flex-col items-center space-y-4">
                <div className="grid grid-cols-3 gap-4 w-full text-center">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg border border-primary/20">
                    <span className="font-['Noto_Serif'] text-sm">{kaiPattern.firstPart}</span>
                  </div>
                  <div className="p-3 bg-secondary/10 text-secondary rounded-lg border border-secondary/20">
                    <span className="font-['Noto_Serif'] text-sm">{kaiPattern.secondPart}</span>
                  </div>
                  <div className="p-3 bg-primary/10 text-primary rounded-lg border border-primary/20">
                    <span className="font-['Noto_Serif'] text-sm">{kaiPattern.thirdPart}</span>
                  </div>
                </div>
                <div className="flex justify-center items-center space-x-4">
                  <span className="text-accent font-['Noto_Serif'] font-bold">καὶ</span>
                  <span className="text-base-content/50">{kaiPattern.interval} words</span>
                  <span className="text-accent font-['Noto_Serif'] font-bold">καὶ</span>
                </div>
              </div>
            </div>
          </div>
        )}

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
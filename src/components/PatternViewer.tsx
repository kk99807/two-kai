'use client';

import { useState } from 'react';
import type { TwoKaiPattern } from '@/lib/greekUtils';
import { highlightKaiPattern } from '@/lib/greekUtils';

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

  // Parse the pattern structure
  const kaiPattern: TwoKaiPattern = {
    firstPart: pattern.greekText.split('καί')[0],
    secondPart: pattern.greekText.split('καί')[1],
    thirdPart: pattern.greekText.split('καί')[2],
    interval: pattern.interval
  };

  const highlightedGreek = highlightKaiPattern(pattern.greekText, kaiPattern);

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title font-serif">{pattern.verse}</h2>
        <p className="text-sm text-base-content/70 mb-4">{pattern.section}</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Greek Text */}
          <div>
            <h3 className="text-xl font-serif mb-4">Greek Text</h3>
            <div className="bg-base-200 p-4 rounded-lg">
              <p 
                className="font-serif text-lg"
                dangerouslySetInnerHTML={{ __html: highlightedGreek }}
              />
            </div>
          </div>

          {/* English Translation */}
          <div>
            <h3 className="text-xl font-serif mb-4">English Translation</h3>
            <div className="bg-base-200 p-4 rounded-lg">
              <p className="text-lg">{pattern.englishText}</p>
            </div>
          </div>
        </div>

        {/* Pattern Diagram */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-serif">Pattern Structure</h3>
            <button 
              className="btn btn-ghost btn-sm"
              onClick={() => setShowDiagram(!showDiagram)}
            >
              {showDiagram ? 'Hide Diagram' : 'Show Diagram'}
            </button>
          </div>
          
          {showDiagram && (
            <div className="bg-base-200 p-4 rounded-lg">
              <div className="flex flex-col items-center space-y-4">
                <div className="grid grid-cols-3 gap-4 w-full text-center">
                  <div className="p-2 bg-primary text-primary-content rounded">
                    First Part
                  </div>
                  <div className="p-2 bg-secondary text-secondary-content rounded">
                    Second Part
                  </div>
                  <div className="p-2 bg-primary text-primary-content rounded">
                    Third Part
                  </div>
                </div>
                <div className="flex justify-center space-x-4">
                  <span className="text-accent font-bold">καί</span>
                  <span className="text-base-content/50">{pattern.interval} words</span>
                  <span className="text-accent font-bold">καί</span>
                </div>
              </div>
            </div>
          )}
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
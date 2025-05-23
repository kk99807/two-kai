'use client';

import { useState } from 'react';
import PatternViewer from '@/components/PatternViewer';

// Sample data - this would come from the database in production
const samplePattern = {
  id: '1',
  section: 'First Heptad',
  verse: 'Revelation 1:3',
  greekText: 'μακάριος ὁ ἀναγινώσκων καί οἱ ἀκούοντες τοὺς λόγους τῆς προφητείας καί τηροῦντες τὰ ἐν αὐτῇ γεγραμμένα',
  englishText: 'Blessed is the one who reads aloud and those who hear the words of the prophecy and keep what is written in it.',
  structure: 'sentence-kai-sentence-kai-sentence',
  wordCount: 17,
  interval: 7,
  explanation: 'This verse demonstrates a beautiful Two-Kai pattern where the central phrase is bounded by "kai" (and) on both sides. The pattern emphasizes three groups: the reader, the hearers, and the keepers of the prophecy.',
};

const sections = [
  'First Heptad (Rev 1-3)',
  'Second Heptad (Rev 4-8)',
  'Third Heptad (Rev 8-11)',
  'Fourth Heptad (Rev 12-14)',
  'Fifth Heptad (Rev 15-16)',
  'Sixth Heptad (Rev 17-19)',
  'Seventh Heptad (Rev 20-22)',
];

export default function PatternsPage() {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="min-h-screen py-8">
      <h1 className="text-4xl font-serif text-center mb-12">Two-Kai Pattern Explorer</h1>
      
      {/* Section Navigation */}
      <div className="tabs tabs-boxed justify-center mb-8">
        {sections.map((section, index) => (
          <button
            key={section}
            className={`tab ${index === activeSection ? 'tab-active' : ''}`}
            onClick={() => setActiveSection(index)}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Pattern Display */}
      <PatternViewer pattern={samplePattern} />

      {/* Introduction to Patterns */}
      <div className="prose mx-auto mt-16">
        <h2 className="font-serif">Understanding Two-Kai Patterns</h2>
        <p>
          The Two-Kai pattern is a remarkable literary structure discovered in the Book of Revelation
          by Pastor Edward A. Robson. These patterns consist of three parts connected by the Greek
          word "καί" (kai), forming beautiful symmetrical structures that enhance our understanding
          of the text.
        </p>
        <p>
          Each pattern follows this structure:
        </p>
        <ul>
          <li>A first statement or phrase</li>
          <li>The Greek word "καί" (and)</li>
          <li>A central statement or phrase</li>
          <li>Another "καί"</li>
          <li>A concluding statement or phrase</li>
        </ul>
        <p>
          The intervals between these "καί" connections often reveal deeper meanings and connections
          within the text, showing the divine inspiration behind the Book of Revelation.
        </p>
      </div>
    </div>
  );
} 
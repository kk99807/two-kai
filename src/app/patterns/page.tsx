'use client';

import { useState } from 'react';
import PatternViewer from '@/components/PatternViewer';

// Sample data - this would come from the database in production
const samplePattern = {
  id: '1',
  section: 'First Heptad',
  verse: 'Revelation 1:3',
  greekText: 'Μακάριος ὁ ἀναγινώσκων καὶ οἱ ἀκούοντες τοὺς λόγους τῆς προφητείας καὶ τηροῦντες τὰ ἐν αὐτῇ γεγραμμένα, ὁ γὰρ καιρὸς ἐγγύς.',
  englishText: 'Blessed the one reading AND the ones hearing the word of the Prophecy AND paying attention to the things having been written in her, for The Time is near.',
  structure: 'sentence-kai-sentence-kai-sentence',
  wordCount: 20,
  interval: 41,
  explanation: 'This verse demonstrates a beautiful 2-Kai pattern where the central phrase is bounded by "kai" (and) on both sides. The pattern emphasizes three groups: the reader, the hearers, and the keepers of the prophecy.',
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
      <h1 className="text-4xl font-serif text-center mb-12">2-Kai Pattern Explorer</h1>
      
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
      <div className="prose mx-auto mt-16 mb-12">
        <h2 className="font-serif">Understanding 2-Kai Patterns</h2>
        <p className="mt-4">
          The 2-Kai pattern is a remarkable literary structure discovered in the Book of Revelation
          by Pastor Edward A. Robson. These patterns consist of three phrases connected by two instances of the Greek
          word &ldquo;καί&rdquo; (kai), forming beautiful symmetrical structures that enhance our understanding
          of the text.
        </p>
      </div>
    </div>
  );
} 
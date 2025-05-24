'use client';

import { useState } from 'react';
import PatternViewer from '@/components/PatternViewer';
import { patterns } from '@/data/patterns';

export default function PatternsPage() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  // Get unique sections
  const sections = Array.from(new Set(patterns.map(p => p.section)));

  // Filter patterns based on selected section
  const filteredPatterns = selectedSection
    ? patterns.filter(p => p.section === selectedSection)
    : patterns;

  return (
    <div className="py-8">
      <h1 className="text-4xl font-serif mb-8">Two-Kai Patterns</h1>
      
      {/* Section Filter */}
      <div className="mb-8">
        <h2 className="text-2xl font-serif mb-4">Filter by Heptad</h2>
        <div className="flex flex-wrap gap-2">
          <button
            className={`btn btn-sm ${!selectedSection ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setSelectedSection(null)}
          >
            All Patterns
          </button>
          {sections.map((section) => (
            <button
              key={section}
              className={`btn btn-sm ${selectedSection === section ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setSelectedSection(section)}
            >
              {section}
            </button>
          ))}
        </div>
      </div>

      {/* Pattern Count */}
      <div className="mb-8">
        <p className="text-base-content/70">
          Showing {filteredPatterns.length} pattern{filteredPatterns.length !== 1 ? 's' : ''} 
          {selectedSection ? ` in ${selectedSection}` : ''}
        </p>
      </div>

      {/* Patterns Grid */}
      <div className="grid gap-8">
        {filteredPatterns.map((pattern) => (
          <PatternViewer key={pattern.id} pattern={pattern} />
        ))}
      </div>
    </div>
  );
} 
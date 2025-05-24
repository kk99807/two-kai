export interface TwoKaiPattern {
  firstPart: string;
  secondPart: string;
  thirdPart: string;
  interval: number;
}

export function findTwoKaiPattern(text: string): TwoKaiPattern | null {
  // Split the text by the Greek "καὶ", preserving the delimiter
  const parts = text.split(/(καὶ)/);
  
  // We need at least 5 parts (3 text segments and 2 "καὶ")
  if (parts.length < 5) return null;
  
  // Find the indices of "καὶ"
  const kaiIndices = parts.reduce<number[]>((acc, part, index) => {
    if (part === 'καὶ') acc.push(index);
    return acc;
  }, []);
  
  // We need exactly 2 "καὶ"
  if (kaiIndices.length !== 2) return null;
  
  const [firstKai, secondKai] = kaiIndices;
  
  return {
    firstPart: parts.slice(0, firstKai).join('').trim(),
    secondPart: parts.slice(firstKai + 1, secondKai).join('').trim(),
    thirdPart: parts.slice(secondKai + 1).join('').trim(),
    interval: parts.slice(firstKai + 1, secondKai).join('').trim().split(/\s+/).length,
  };
}

export function highlightKaiPattern(text: string, pattern: TwoKaiPattern): string {
  // Directly construct the highlighted HTML using the pattern parts
  const highlightedText = 
    `<span class="text-primary !important">${pattern.firstPart}</span>` +
    ` <span class="text-accent font-bold !important">καὶ</span> ` +
    `<span class="text-secondary !important">${pattern.secondPart}</span>` +
    ` <span class="text-accent font-bold !important">καὶ</span> ` +
    `<span class="text-primary !important">${pattern.thirdPart}</span>`;

  console.log('Original text:', text);
  console.log('Pattern parts:', pattern);
  console.log('Highlighted text:', highlightedText);
  
  return highlightedText;
} 
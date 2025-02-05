// import fs from 'fs';
// import path from 'path';

// const filePath: string = path.resolve('./planExamples.json');

import planExamples from './planExamples.json'; // JSON 파일 직접 Import

export function loadPlanExamples(): Record<string, string[]> {
  return planExamples; // JSON 데이터를 직접 반환
}

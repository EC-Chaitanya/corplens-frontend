import { AnalysisResponse } from './types';
import { mockApiResponse } from './mockData';

export const fetchAnalysisData = async (companyName: string): Promise<AnalysisResponse> => {
  console.log(`Fetching analysis for: ${companyName}`);
  
  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  // TODO: In the future, replace this with a real `fetch` call to the FastAPI backend.
  // Example:
  // const response = await fetch('https://your-fastapi-backend.com/analyze', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ companyName }),
  // });
  // if (!response.ok) {
  //   throw new Error('Failed to fetch analysis');
  // }
  // return await response.json();

  return { ...mockApiResponse, companyName };
};

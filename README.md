# Corplens

## Intelligent Corporate Vision

A Next.js-based frontend prototype for analyzing corporate integrity using AI-powered analysis across multiple data sources.

## Features

- **Integrity Score Dashboard**: Visual representation of overall corporate integrity
- **Multi-dimensional Analysis**: 
  - Financial Integrity (Benford's Law analysis)
  - Public Perception (News sentiment analysis)
  - Internal Health (Employee reviews)
  - Regulatory Risk (Compliance tracking)
- **Evidence Tracking**: Sourced evidence with sentiment indicators
- **Modern UI**: Built with Tailwind CSS and Recharts

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React

## Project Structure

```
shadow-auditor/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Dashboard.tsx     # Main dashboard component
│   ├── ScoreGauge.tsx    # Circular score gauge
│   ├── SubScoreCard.tsx  # Individual score cards
│   └── EvidenceSection.tsx # Evidence list
├── lib/
│   ├── types.ts          # TypeScript interfaces
│   ├── mockData.ts       # Mock API response
│   └── api.ts            # API integration (mocked)
└── package.json
```

## Backend Integration

Currently, the app uses mock data. To integrate with a real backend:

1. Update `lib/api.ts` with your FastAPI endpoint
2. Replace the mock return with actual `fetch` calls
3. Ensure CORS is configured on your backend

## Future Enhancements

- [ ] Connect to FastAPI backend
- [ ] Add authentication
- [ ] Implement real-time data updates
- [ ] Add export functionality (PDF reports)
- [ ] Multi-company comparison
- [ ] Historical trend analysis

## License

Proprietary - All rights reserved

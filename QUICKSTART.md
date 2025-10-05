# Corplens - Quick Start Guide

## Installation Complete! ✅

All dependencies have been installed successfully.

## Next Steps:

### 1. Run the Development Server:
```powershell
npm run dev
```

### 2. Open Your Browser:
Navigate to: http://localhost:3000

### 3. Test the Application:
- Enter any company name (e.g., "Infosys", "TCS", "Wipro")
- Click the search button
- Watch the analysis load (2-second simulated delay)
- Explore the interactive dashboard

## Available Scripts:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Features:

✅ Circular Integrity Score Gauge (0-100)
✅ 4 Sub-Score Cards:
   - Financial Integrity
   - Public Perception  
   - Internal Health
   - Regulatory Risk
✅ Evidence Section with Sentiment Indicators
✅ Responsive Design (Mobile & Desktop)
✅ Dark Theme UI
✅ Loading States & Animations

## Tech Stack:

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Recharts (for score visualization)
- Lucide React (for icons)

## Backend Integration:

Currently using mock data. To connect to your FastAPI backend:

1. Open `lib/api.ts`
2. Uncomment the fetch code
3. Replace the URL with your backend endpoint
4. Update the mock return statement

## Troubleshooting:

If you encounter issues:
1. Clear node_modules: `Remove-Item -Recurse -Force node_modules`
2. Reinstall: `npm install`
3. Clear Next.js cache: `Remove-Item -Recurse -Force .next`
4. Restart dev server: `npm run dev`

## File Structure:

```
shadow-auditor/
├── app/
│   ├── page.tsx          # Main page with search
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Styles
├── components/
│   ├── Dashboard.tsx     # Main dashboard
│   ├── ScoreGauge.tsx    # Score visualization
│   ├── SubScoreCard.tsx  # Individual cards
│   └── EvidenceSection.tsx # Evidence list
└── lib/
    ├── types.ts          # TypeScript types
    ├── mockData.ts       # Mock data
    └── api.ts            # API layer
```

Happy coding! 🚀

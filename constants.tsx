
import React from 'react';
import { CaseStudy, Framework, PracticeScenario, NavItemType, ScoreTrendPoint, SkillDataItem, SessionHistoryItem, VideoItem } from './types';

// SVG Icons (Heroicons style)
export const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
  </svg>
);

export const BookOpenIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

export const LightBulbIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311V21m-3.75-2.311V21m0 0a3 3 0 01-3-3V6.75A3 3 0 019 3.75h6a3 3 0 013 3v8.25a3 3 0 01-3 3z" />
  </svg>
);

export const CommandLineIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m3 0h3m-3 0l3 2.25m0-2.25l3-2.25m-3 2.25v3.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const ChatIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-3.862 8.25-8.625 8.25S3.75 16.556 3.75 12C3.75 7.444 7.612 3.75 12.375 3.75S21 7.444 21 12z" />
  </svg>
);

export const SendIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);

export const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const ChartBarIcon = (props: React.SVGProps<SVGSVGElement>) => ( // For My Progress & ConsultIQ logo
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

export const PlayCircleIcon = (props: React.SVGProps<SVGSVGElement>) => ( // For Strategy Videos
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
  </svg>
);

export const SparklesIcon = (props: React.SVGProps<SVGSVGElement>) => ( // For Daily Feedback
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 12L17 14.188l-1.25-2.188L13.563 11l2.188-1.25L17 7.5l1.25 2.25L20.438 11l-2.188 1.25z" />
  </svg>
);
export const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.39-3.429 3.252c-.64.608-.283 1.717.576 1.864l4.65.324 1.977 4.303c.303.66.99.998 1.704.998s1.401-.338 1.704-.998l1.977-4.303 4.65-.324c.86-.06.99-.997.576-1.864l-3.429-3.252-4.753-.39-1.83-4.401z" clipRule="evenodd" />
  </svg>
);


export const NAV_ITEMS: NavItemType[] = [
  { name: 'Dashboard', path: '/', icon: HomeIcon },
  { name: 'Case Studies', path: '/case-studies', icon: BookOpenIcon },
  { name: 'Frameworks', path: '/frameworks', icon: LightBulbIcon },
  { name: 'Practice Arena', path: '/practice-arena', icon: CommandLineIcon },
  { name: 'My Progress', path: '/my-progress', icon: ChartBarIcon },
  { name: 'Strategy Videos', path: '/strategy-videos', icon: PlayCircleIcon },
  { name: 'Daily Feedback', path: '/daily-feedback', icon: SparklesIcon },
];

export const SAMPLE_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs001',
    title: 'Market Entry Strategy for a Tech Startup',
    industry: 'Technology',
    difficulty: 'Intermediate',
    summary: 'A promising tech startup wants to enter a new international market. Analyze the market and propose a strategy.',
    category: 'Strategy',
    tags: ['Market Entry', 'Tech', 'International Business', 'SaaS'],
    estimatedTime: 'Est. 60 Mins',
    rating: 4,
    content: `
# Market Entry Strategy for Innovatech

## Client Background
Innovatech, a successful North American SaaS company specializing in project management tools for SMBs, aims to expand into Southeast Asia (SEA).

## The Challenge
Develop a comprehensive market entry strategy for Innovatech in the SEA region. This includes market analysis, opportunity/challenge identification, entry mode recommendation, and a high-level go-to-market plan.

### Key Questions
*   Competitive landscape in SEA for PM SaaS?
*   Cultural/business nuances in SEA?
*   Pricing sensitivities?
*   Regulatory/legal considerations?
*   Product localization needs?

### Expected Deliverables
A presentation covering analysis, recommendations, and an entry roadmap.
    `,
  },
  {
    id: 'cs002',
    title: 'Profitability Improvement for a Retail Chain',
    industry: 'Retail',
    difficulty: 'Advanced',
    summary: 'A national retail chain is facing declining profitability. Identify the root causes and suggest measures to improve financial performance.',
    category: 'Operations',
    tags: ['Profitability', 'Retail', 'Turnaround', 'Cost Cutting'],
    estimatedTime: 'Est. 90 Mins',
    rating: 5,
    content: `
# Profitability Improvement for ShopWell

## Client Background
ShopWell, a national general merchandise retail chain (200+ stores), faces declining profitability despite stable revenue.

## The Challenge
Diagnose the drivers of eroding margins and recommend strategies for short-term and long-term profitability improvement.

### Key Questions
*   ShopWell's KPIs vs. industry benchmarks?
*   Underperforming product categories/stores?
*   Cost optimization opportunities (supply chain, operations, SG&A)?
*   Pricing and promotional strategy improvements?
*   Impact of e-commerce and online competition?

### Expected Deliverables
A detailed report with findings, analysis, prioritized recommendations, and potential impact assessments.
    `,
  },
  {
    id: 'cs003',
    title: 'Digital Transformation for a Financial Institution',
    industry: 'Financial Services',
    difficulty: 'Advanced',
    summary: 'A traditional bank wants to undergo a digital transformation to improve customer experience and operational efficiency.',
    category: 'Digital Strategy',
    tags: ['Digital Transformation', 'Banking', 'Fintech', 'Customer Experience'],
    estimatedTime: 'Est. 75 Mins',
    rating: 5,
    content: `
# Digital Transformation for Legacy Bank Corp

## Client Background
Legacy Bank Corp (LBC) is a well-established financial institution with a large branch network. They are facing increasing competition from neobanks and fintech startups.

## The Challenge
Develop a digital transformation roadmap for LBC to enhance customer experience, improve operational efficiency, and build new digital capabilities.

### Key Questions
*   Current state of LBC's digital capabilities vs. competitors?
*   Key customer pain points that digital solutions can address?
*   Opportunities to leverage AI, big data, and cloud technologies?
*   Core banking system modernization requirements?
*   Change management strategy for employees and customers?

### Expected Deliverables
A multi-year digital transformation roadmap, including key initiatives, technology recommendations, investment estimates, and a governance model.
    `,
  },
];

export const SAMPLE_FRAMEWORKS: Framework[] = [
  {
    id: 'fw001',
    title: 'Porter\'s Five Forces',
    type: 'Strategic',
    summary: 'A framework for analyzing the competitive intensity and therefore attractiveness of an industry.',
    category: 'Competitive Analysis',
    tags: ['Strategy', 'Industry Analysis'],
    estimatedTime: 'Est. 15 Mins Read',
    rating: 5,
    content: `
# Porter's Five Forces
This model identifies five competitive forces shaping an industry:
1.  **Threat of New Entrants:** Ease of new competitors entering.
2.  **Bargaining Power of Buyers:** Customer power to lower prices.
3.  **Bargaining Power of Suppliers:** Supplier power to raise prices.
4.  **Threat of Substitute Products/Services:** Likelihood of customers finding alternatives.
5.  **Intensity of Rivalry:** Strength of existing competition.

## How to Use It
Understand industry structure, position strategically, make investment decisions.
    `,
  },
  {
    id: 'fw002',
    title: 'SWOT Analysis',
    type: 'Strategic',
    summary: 'A strategic planning technique used to help a person or organization identify strengths, weaknesses, opportunities, and threats.',
    category: 'Situational Analysis',
    tags: ['Strategy', 'Planning', 'Business Analysis'],
    estimatedTime: 'Est. 10 Mins Read',
    rating: 4,
    content: `
# SWOT Analysis
Evaluates Strengths, Weaknesses, Opportunities, Threats.
*   **Strengths (Internal, Positive):** Advantages (e.g., brand, tech).
*   **Weaknesses (Internal, Negative):** Disadvantages (e.g., debt, old tech).
*   **Opportunities (External, Positive):** Favorable external factors (e.g., new market).
*   **Threats (External, Negative):** Unfavorable external factors (e.g., new competitor).

## How to Use It
Define objective, brainstorm, analyze, develop strategies (SO, WO, ST, WT).
    `,
  },
  {
    id: 'fw003',
    title: 'BCG Matrix',
    type: 'Strategic',
    summary: 'A portfolio management framework that helps companies decide how to prioritize their different businesses.',
    category: 'Portfolio Management',
    tags: ['Strategy', 'Product Management', 'Investment'],
    estimatedTime: 'Est. 20 Mins Read',
    rating: 4,
    content: `
# BCG Matrix (Growth-Share Matrix)

The BCG Matrix is a tool used to evaluate a company's portfolio of products or business units based on two dimensions: market growth rate and relative market share.

## Quadrants
1.  **Stars (High Growth, High Share):** Leaders in high-growth markets. Require significant investment to maintain growth. Often generate large cash flows.
    *   Strategy: Invest for growth.
2.  **Cash Cows (Low Growth, High Share):** Mature, successful products with little need for investment. Generate more cash than they consume.
    *   Strategy: Milk for cash to invest in Stars or Question Marks.
3.  **Question Marks / Problem Children (High Growth, Low Share):** Products in high-growth markets but do not have a high share. Require significant investment to grow market share, or they may become Dogs.
    *   Strategy: Invest selectively or divest.
4.  **Dogs (Low Growth, Low Share):** Products with low market share in mature, slow-growth markets. Typically generate low or negative cash returns.
    *   Strategy: Divest or harvest.

## How to Use It
*   Allocate resources among business units.
*   Analyze business unit balance.
*   Make strategic decisions about divestment, investment, or harvesting.
    `,
  },
];

export const SAMPLE_PRACTICE_SCENARIOS: PracticeScenario[] = [
  {
    id: 'ps001',
    title: 'Consulting Interview: Brain Teaser',
    category: 'Interview Skills',
    summary: 'Practice a classic consulting brain teaser with AI guidance.',
    objective: 'Estimate the number of golf balls that can fit into a Boeing 747.',
    estimatedTime: 'Est. 30 Mins Practice',
    rating: 4,
    content: `
# Practice Scenario: The Golf Ball Brain Teaser

This classic estimation question tests problem-solving, assumption-making, and structuring.

## The Question
Estimate the number of golf balls that can fit into a Boeing 747 airplane.

## Your Task
Work through this problem with the AI Coach. Consider:
*   Volume of a Boeing 747 (passenger cabin, cargo, etc.).
*   Volume of a single golf ball.
*   Packing efficiency (how tightly can spheres be packed?).

### Key Steps
1.  **Clarify:** Understand the scope (e.g., just cabin or whole plane?).
2.  **Structure:** Break down the problem (e.g., Volume of 747 / (Volume of golf ball / Packing Factor)).
3.  **Assumptions:** State reasonable assumptions for dimensions and packing.
4.  **Calculate:** Perform calculations.
5.  **Sanity Check:** Does the answer seem plausible?
    `,
  },
  {
    id: 'ps002',
    title: 'Mini Case: Coffee Shop Profitability',
    category: 'Profitability',
    summary: 'Analyze a local coffee shop\'s declining profits and suggest improvements.',
    objective: 'Identify key drivers for declining profit and propose 2-3 actionable recommendations.',
    estimatedTime: 'Est. 45 Mins Practice',
    rating: 5,
    content: `
# Practice Scenario: Local Coffee Shop Profitability

"The Daily Grind," a popular local coffee shop, has seen its profits decline by 15% over the past year, despite a slight increase in customer footfall.

## The Question
Identify the potential reasons for The Daily Grind's declining profitability and propose 2-3 actionable recommendations.

## Your Task
Use the AI Coach to explore this mini-case. Consider:
*   **Revenue Drivers:** Price per item, items per transaction, customer volume.
*   **Cost Drivers:**
    *   Cost of Goods Sold (COGS): Coffee beans, milk, pastries, cups.
    *   Operating Expenses (OpEx): Rent, utilities, labor, marketing.
*   **External Factors:** New competitors, changing customer preferences, local economic conditions.

### Potential Areas to Investigate
*   Is the product mix shifting towards lower-margin items?
*   Have supplier costs increased?
*   Is there an increase in wastage?
*   Are staffing levels optimal?
*   Are marketing efforts effective?

Use a profitability framework (e.g., Profit = Revenue - Costs) to structure your analysis.
    `,
  },
];

// Sample Data for My Progress Page
export const SAMPLE_SCORE_TREND_DATA: ScoreTrendPoint[] = [
  { date: '2024-03-01', score: 65 },
  { date: '2024-03-15', score: 70 },
  { date: '2024-04-01', score: 72 },
  { date: '2024-04-15', score: 78 },
  { date: '2024-05-01', score: 80 },
  { date: '2024-05-15', score: 82 },
];

export const SAMPLE_SKILL_DATA: SkillDataItem[] = [
  { skill: 'Structure & Logic', score: 85 },
  { skill: 'Quantitative Analysis', score: 70 },
  { skill: 'Creativity & Insight', score: 75 },
  { skill: 'Communication', score: 90 },
  { skill: 'Framework Application', score: 80 },
];

export const SAMPLE_SESSION_HISTORY: SessionHistoryItem[] = [
  { id: 'sh001', date: '2024-05-28', caseTitle: 'Tech Firm Market Entry', score: 82, type: 'case', resourceId: 'cs001' },
  { id: 'sh002', date: '2024-05-25', caseTitle: 'Golf Ball Brain Teaser', score: 75, type: 'practice', resourceId: 'ps001' },
  { id: 'sh003', date: '2024-05-20', caseTitle: 'Retail Profitability', score: 88, type: 'case', resourceId: 'cs002' },
  { id: 'sh004', date: '2024-05-15', caseTitle: 'Coffee Shop Profitability', score: 70, type: 'practice', resourceId: 'ps002' },
];

// Sample Data for Strategy Videos Page
export const SAMPLE_VIDEOS: VideoItem[] = [
  {
    id: 'vid001',
    title: 'Mastering Case Interviews: The Ultimate Guide',
    uploader: 'ConsultingPrep Pro',
    youtubeVideoId: 'dQw4w9WgXcQ', // Rick Astley as placeholder
    description: 'A comprehensive overview of how to approach and excel in case interviews. Covers common frameworks and tips.',
    thumbnailUrl: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
  },
  {
    id: 'vid002',
    title: 'Advanced Frameworks: Beyond Porter and SWOT',
    uploader: 'Strategy Gurus',
    youtubeVideoId: 'oHg5SJYRHA0', // Another placeholder
    description: 'Dive deep into lesser-known but powerful strategic frameworks that can give you an edge.',
    thumbnailUrl: 'https://i.ytimg.com/vi/oHg5SJYRHA0/hqdefault.jpg',
  },
  {
    id: 'vid003',
    title: 'Communicating Your Solution: Storytelling in Consulting',
    uploader: 'Impactful Presentations',
    youtubeVideoId: ' युग्मपदवीडियोआईडी ', // Invalid ID to show placeholder handling
    description: 'Learn how to structure your case solution presentation for maximum impact and clarity.',
  },
  {
    id: 'vid004',
    title: 'Market Sizing Estimation Techniques',
    uploader: 'Quant Masters',
    youtubeVideoId: 'DLzxrzFCyOs', // Placeholder
    description: 'Step-by-step guide on how to tackle market sizing questions effectively and accurately.',
    thumbnailUrl: 'https://i.ytimg.com/vi/DLzxrzFCyOs/hqdefault.jpg',
  },
];


export const GEMINI_API_KEY_MESSAGE = "API_KEY environment variable is not set. Please configure it to use AI features.";
export const GEMINI_SYSTEM_PROMPT = `You are ConsultIQ AI, an expert consulting case coach and business analyst mentor for the ConsultIQ platform. Your goal is to help users learn and practice business case studies, understand consulting frameworks, track their progress, and prepare for consulting interviews.
Be encouraging, provide clear explanations, and guide users through problem-solving.
When a user is practicing a case or a problem:
- Help them structure their thoughts.
- Encourage them to make and state assumptions.
- Ask clarifying questions to guide them, rather than giving direct answers immediately.
- Provide constructive feedback on their approach, logic, and communication.
If asked about frameworks:
- Explain them concisely.
- Provide examples of their application.
- Help users understand when and how to use different frameworks.
If the user asks about a specific case study they are working on (e.g., if they mention a title like 'Tech Startup Market Entry' from ConsultIQ), try to provide context-specific help and hints relevant to that case.
Always aim to be helpful, pedagogical, and professional. Maintain a positive and supportive tone.
If you use information from Google Search (indicated by grounding metadata), please make sure to cite the source URLs if available.
If the user asks general questions, answer them to the best of your ability.
If you are unsure or a query is outside your scope as a consulting coach, politely say so.
Focus on breaking down complex problems into simpler steps and fostering critical thinking.
Encourage users to reflect on their performance and identify areas for improvement.
Remember to be a partner in their learning journey on ConsultIQ.`;
    
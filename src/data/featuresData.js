import {
  Wallet,
  ArrowUpDown,
  Receipt,
  Tag,
  TrendingUp,
  ShieldCheck,
  Smartphone
} from 'lucide-react';

export const featuresData = [
  {
    id: 'balance-overview',
    icon: Wallet,
    title: 'Total Balance Overview',
    badge: 'Live Calculation',
    color: 'lime',
    description:
      'Instantly view your total net balance updated dynamically. Your balance aggregates all recorded income and expenditure with zero delay.',
    verifiedValue: '₹21,900.00 Net Balance',
    details: [
      'Real-time net balance computation with pull-to-refresh sync',
      'High-contrast typography for effortless glanceability',
      'Automatic re-calculation when entries are added or removed'
    ]
  },
  {
    id: 'income-expense',
    icon: ArrowUpDown,
    title: 'Income & Expense Summaries',
    badge: 'Side-by-Side Breakdown',
    color: 'emerald',
    description:
      'Dedicated color-coded metrics for incoming revenue and outgoing spending give you immediate perspective on your net cash flow.',
    verifiedValue: '+₹25,000.00 / -₹3,100.00',
    details: [
      'Vibrant green indicators for incoming income and salaries',
      'Crisp red markers for day-to-day debits and expenses',
      'Transparent cash flow visibility at a single glance'
    ]
  },
  {
    id: 'recent-transactions',
    icon: Receipt,
    title: 'Recent Transactions',
    badge: 'Activity History',
    color: 'orange',
    description:
      'A chronological transaction ledger displaying names, exact dates, category tags, amounts, and one-tap record management.',
    verifiedValue: 'Real-time Activity Log',
    details: [
      'Detailed ledger itemization with verified calendar dates',
      'Safe item deletion icon with instantaneous balance readjustment',
      'Seamless scroll feed designed for one-handed Android operation'
    ]
  },
  {
    id: 'categories',
    icon: Tag,
    title: 'Smart Transaction Categories',
    badge: 'Organized Logging',
    color: 'sky',
    description:
      'Organize your financial life across intuitive categories like Salary, Rent & Bills, Food & Drinks, and Shopping.',
    verifiedValue: 'Structured Classification',
    details: [
      'Category badges with recognizable icons for instant identification',
      'Quick single-tap category selection on the add transaction screen',
      'Accurate separation of essential bills from discretionary spending'
    ]
  }
];

export default featuresData;

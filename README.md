# Siphere

**Live Website:** [https://siphere.vercel.app/](https://siphere.vercel.app/)

Siphere is a decentralized platform built on the Solana blockchain that enables users to automate long-term crypto investing through Systematic Investment Plans (SIPs), integrating staking, lending, and optional insurance for enhanced risk protection.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [How It Works](#how-it-works)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Pages](#available-pages)
- [Installation](#installation)
- [Development](#development)
- [Build for Production](#build-for-production)
- [Smart Contract Integration](#smart-contract-integration)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Siphere brings the discipline of traditional Systematic Investment Plan (SIP) investing into the cryptocurrency ecosystem. The platform allows users to invest stablecoins or SOL at regular intervals into on-chain strategies like staking and lending protocols, helping them build wealth over time without the stress of market timing.

The platform is fully non-custodial, transparent, and integrates insurance logic to provide a safety net against protocol risks and execution failures. Users maintain complete control over their funds while benefiting from automated investment strategies.

---

## Key Features

### Core Functionality

- **Automated SIP Creation**: Set up recurring investments with stablecoins or SOL on weekly or monthly schedules
- **Yield Generation**: Earn returns through integrated staking protocols (Marinade, Jito) and DeFi lending
- **Multiple Investment Strategies**: Choose from various strategies including staking, lending, and custom approaches
- **Non-Custodial Architecture**: Full wallet-based control with no platform custody of user funds

### Insurance & Protection

- **Optional Insurance Coverage**: Protect investments against protocol failures and missed executions
- **Multiple Coverage Tiers**: Basic, Premium, and Enterprise insurance options
- **Claims Management**: Streamlined process for filing and tracking insurance claims
- **Risk Mitigation**: Safety net for smart contract vulnerabilities and execution errors

### Analytics & Management

- **Real-Time Dashboard**: Comprehensive view of all active SIPs and portfolio performance
- **Investment Tracking**: Monitor returns, yields, and investment history
- **Performance Metrics**: Track total invested amounts, returns, and insurance statistics
- **Activity Logs**: Complete transaction history and execution records

### User Experience

- **Modern UI/UX**: Built with Next.js and Tailwind CSS for responsive design
- **Wallet Integration**: Seamless connection with Solana wallets (Phantom, Solflare, etc.)
- **Interactive Components**: Smooth animations and transitions using Framer Motion
- **Theme Support**: Dark mode and light mode compatibility

---

## How It Works

1. **Connect Wallet**: Link your Solana wallet (Phantom, Solflare, or other supported wallets)
2. **Create SIP**: Configure your investment parameters:
   - Select token (SOL, USDC, or other supported tokens)
   - Set investment amount
   - Choose frequency (weekly or monthly)
   - Select investment strategy (staking or lending)
   - Optionally add insurance coverage
3. **Automated Execution**: Platform automatically executes investments based on your schedule
4. **Yield Generation**: Funds are deployed to whitelisted protocols for staking or lending
5. **Track Performance**: Monitor your investments and returns through the dashboard
6. **Manage & Adjust**: Pause, modify, or cancel SIPs as needed

---

## Technology Stack

### Frontend

- **Next.js 13.5.11**: React framework with App Router for server-side rendering
- **React 18.2.0**: UI component library
- **TypeScript 5.2.2**: Type-safe development
- **Tailwind CSS 3.3.3**: Utility-first CSS framework
- **Framer Motion 11.0.0**: Animation library for smooth interactions

### UI Components

- **Radix UI**: Comprehensive set of accessible UI primitives
- **Shadcn/ui**: Re-usable components built with Radix UI and Tailwind CSS
- **Lucide React**: Icon library
- **Recharts**: Data visualization and charting
- **React Hook Form**: Form state management with validation

### Blockchain Integration

- **Solana Web3.js 1.95.3**: Solana blockchain interaction
- **Solana Wallet Adapter**: Multi-wallet support for Solana
  - @solana/wallet-adapter-react
  - @solana/wallet-adapter-react-ui
  - @solana/wallet-adapter-wallets
  - @solana/wallet-adapter-phantom

### Additional Libraries

- **Zod**: Schema validation
- **date-fns**: Date manipulation and formatting
- **next-themes**: Dark mode support
- **cmdk**: Command palette interface

---

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager
- A Solana wallet (Phantom, Solflare, etc.)
- Basic understanding of cryptocurrency and DeFi concepts

---

## Project Structure

```
Siphere/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── claims/              # Insurance claims management
│   ├── create-sip/          # SIP creation interface
│   ├── dashboard/           # User dashboard
│   ├── faq/                 # Frequently asked questions
│   ├── features/            # Feature showcase
│   ├── how-it-works/        # Platform explanation
│   ├── insurance/           # Insurance management
│   ├── sip/                 # SIP management
│   │   └── create/          # Alternative SIP creation
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Homepage
├── components/              # React components
│   ├── ui/                  # Reusable UI components (Shadcn)
│   ├── navigation.tsx       # Navigation component
│   ├── theme-provider.tsx   # Theme context provider
│   └── wallet-provider.tsx  # Wallet context provider
├── hooks/                   # Custom React hooks
│   └── use-toast.ts         # Toast notification hook
├── lib/                     # Utility functions
│   └── utils.ts             # Helper utilities
├── public/                  # Static assets
├── components.json          # Shadcn UI configuration
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

---

## Available Pages

- **/**: Landing page with platform overview and features
- **/dashboard**: User portfolio and SIP management dashboard
- **/sip**: View and manage all active SIPs
- **/create-sip**: Create new SIP investments
- **/insurance**: Browse and purchase insurance coverage
- **/claims**: File and track insurance claims
- **/features**: Detailed feature descriptions
- **/how-it-works**: Step-by-step platform guide
- **/about**: About the Siphere platform
- **/faq**: Frequently asked questions

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/aniketsahu115/Siphere.git
cd Siphere
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables (if needed):
   Create a `.env.local` file in the root directory:

```
NEXT_PUBLIC_SOLANA_NETWORK=devnet
NEXT_PUBLIC_RPC_ENDPOINT=your_rpc_endpoint
```

---

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The application will automatically reload when you make changes to the source code.

---

## Build for Production

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## Smart Contract Integration

Siphere integrates with various Solana protocols for investment strategies:

### Staking Protocols

- **Marinade Finance**: Liquid staking for SOL
- **Jito**: MEV-enabled staking

### Lending Protocols

- DeFi lending integrations for yield generation
- Automated fund deployment to whitelisted protocols

### Insurance Logic

- Smart contract-based insurance coverage
- Automated claim processing and verification

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Create a Pull Request

Please ensure your code follows the existing style conventions and includes appropriate tests.

---

## License

This project is open source and available under the MIT License.

---

## Contact & Support

For questions, suggestions, or support:

- GitHub: [aniketsahu115](https://github.com/aniketsahu115)
- Website: [https://siphere.vercel.app/](https://siphere.vercel.app/)

---

## Disclaimer

Cryptocurrency investments carry inherent risks. This platform is provided as-is without warranties. Users should conduct their own research and understand the risks before investing. Insurance coverage is subject to terms and conditions and does not guarantee against all possible losses.

---

## Installation (for local development) Support if you want to add changes

```bash
git clone https://github.com/your-repo/your-project.git
cd your-project
npm install
npm run dev




```

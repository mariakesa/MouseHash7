# MouseHash7

A Svelte website with OAuth authentication and D3.js data visualizations.

## Features

- 🔐 **OAuth Authentication**: Secure authentication using GitHub OAuth via Auth.js (NextAuth)
- 📊 **D3 Visualizations**: Interactive data visualizations using D3.js
- 🎨 **Modern UI**: Built with SvelteKit 2 and TypeScript
- 🔒 **Protected Routes**: Authentication-required pages for visualizations

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or pnpm
- A GitHub OAuth application (for authentication)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mariakesa/MouseHash7.git
cd MouseHash7
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Create a GitHub OAuth App at https://github.com/settings/developers
   - Set the callback URL to: `http://localhost:5173/auth/callback/github`
   - Add your credentials to `.env`:
```bash
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret
AUTH_SECRET=your-auth-secret-here  # Generate with: openssl rand -base64 32
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building

Build the application for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── lib/
│   └── components/
│       ├── BarChart.svelte    # D3 bar chart component
│       └── LineChart.svelte   # D3 line chart component
├── routes/
│   ├── +page.svelte           # Home page with login
│   ├── +page.server.ts        # Server-side session handling
│   └── visualizations/
│       ├── +page.svelte       # Visualizations page (protected)
│       └── +page.server.ts    # Auth guard
├── hooks.server.ts            # OAuth configuration
└── app.d.ts                   # TypeScript declarations
```

## Technologies Used

- **SvelteKit**: Full-stack framework for Svelte
- **TypeScript**: Type-safe development
- **Auth.js**: Authentication library with OAuth support
- **D3.js**: Data visualization library
- **Vite**: Fast build tool and dev server

## Authentication Flow

1. User visits the home page
2. Clicks "Sign in with GitHub"
3. Redirected to GitHub OAuth
4. After authorization, redirected back to the app
5. Session is stored and user can access protected routes
6. `/visualizations` route requires authentication

## Visualizations

The application includes two sample D3 visualizations:

1. **Bar Chart**: Animated bar chart showing sample data distribution
2. **Line Chart**: Time series line chart with smooth animations

These serve as examples and can be extended with real data sources.

## License

MIT

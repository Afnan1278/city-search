# Cities Explorer App

A  web application for exploring city information, built with React and TypeScript for the frontend and Node.js for the backend.

## Project Structure
The App is structured in a modular way with separate directories for the frontend and backend. The backend, built with Node.js and Express, includes directories for controllers, middlewares, models, routes, services, and utilities. The frontend, built with React and TypeScript, includes directories for components, hooks, pages, services, and tests. Each part of the application is organized to maintain clear separation of concerns and modularity.

```
backend/
├── .vscode/            # VSCode configuration
├── jest.config.js      # Jest configuration for backend tests
├── package.json        # Backend dependencies and scripts
├── src/
│   ├── __test__/       # Backend test files
│   ├── app.ts          # Main application file
│   ├── controllers/    # Controllers for handling requests
│   ├── middlewares/    # Custom middleware functions
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── server.ts       # Server setup and configuration
│   ├── services/       # Business logic and services
│   ├── types/          # TypeScript types
│   └── utils/          # Utility functions
├── tsconfig.json       # TypeScript configuration
frontend/
├── .gitignore          # Git ignore file
├── components.json     # Component configuration
├── eslint.config.js    # ESLint configuration
├── index.html          # Main HTML file
├── package.json        # Frontend dependencies and scripts
├── public/             # Public assets
├── README.md           # Frontend README file
├── src/
│   ├── __tests__/      # Frontend test files
│   ├── App.css         # Main CSS file
│   ├── App.tsx         # Main React component
│   ├── components/     # Reusable UI components
│   ├── data/           # Data files
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   └── services/       # API client and types
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.app.json   # TypeScript configuration for app
├── tsconfig.json       # TypeScript configuration
├── tsconfig.node.json  # TypeScript configuration for Node.js
├── vite.config.ts      # Vite configuration
└── vitest.config.ts    # Vitest configuration
```

## Technology Stack

### Backend
- **Framework**: Node.js with Express
- **Testing**: Jest
- **Code Quality**: ESLint, TypeScript
- **Api Docs**: Swagger (/api-docs)

### Frontend
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Query for server state
- **HTTP Client**: Axios 
- **Testing**: Jest with React Testing Library
- **Code Quality**: ESLint, TypeScript
- **Build Tool**: Vite

## Features

- Searchable city directory
- Pagination support
- Responsive design
- Debounced search
- Error handling with toast notifications
- Loading states
- Type-safe development

## Development

### Backend

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test
```

### Frontend

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test
```

## Testing

The project includes unit tests for:
- API client functionality
- Component rendering
- Search and pagination logic

Run tests with:
```bash
npm test
```

## Code Quality

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Test coverage for critical functionality
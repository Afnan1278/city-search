
# Cities Explorer App

A modern web application for exploring city information, built with React and TypeScript.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── SearchBox.tsx   # Search input with debounce
│   └── ui/             # shadcn/ui components
├── data/
│   └── mock-cities.ts  # Mock data for development
├── pages/
│   └── Index.tsx       # Main cities listing page
├── services/
│   ├── client.ts       # API client and types
│   └── __tests__/      # Test files
└── hooks/              # Custom React hooks
```

## Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Query for server state
- **HTTP Client**: Axios (configured for mock data currently)
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

```bash
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

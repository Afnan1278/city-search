
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { describe, it, expect } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Index from '../../pages/Index';

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('Index Page Integration', () => {
  it('renders the page with search and table', () => {
    const Wrapper = createWrapper();
    render(<Index />, { wrapper: Wrapper });
    
    expect(screen.getByPlaceholderText('Search cities...')).toBeInTheDocument();
    expect(screen.getByText('City')).toBeInTheDocument();
    expect(screen.getByText('Country')).toBeInTheDocument();
    expect(screen.getByText('Continent')).toBeInTheDocument();
  });

  it('shows loading state when fetching data', () => {
    const Wrapper = createWrapper();
    render(<Index />, { wrapper: Wrapper });
    
    expect(screen.getByText('Loading cities...')).toBeInTheDocument();
  });

  it('handles search interaction', async () => {
    const Wrapper = createWrapper();
    render(<Index />, { wrapper: Wrapper });
    
    const searchInput = screen.getByPlaceholderText('Search cities...');
    fireEvent.change(searchInput, { target: { value: 'tokyo' } });
    
    await waitFor(() => {
      expect(screen.getByText('Loading cities...')).toBeInTheDocument();
    });
  });
});

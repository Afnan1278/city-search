
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { SearchBox } from '../../components/SearchBox';
import { describe, it, expect } from 'vitest';

describe('SearchBox Component', () => {
  it('renders search input', () => {
    const mockOnSearch = vi.fn();
    render(<SearchBox onSearch={mockOnSearch} />);
    
    const searchInput = screen.getByPlaceholderText('Search cities...');
    expect(searchInput).toBeInTheDocument();
  });

  it('debounces search input', async () => {
    const mockOnSearch = vi.fn();
    render(<SearchBox onSearch={mockOnSearch} />);
    
    const searchInput = screen.getByPlaceholderText('Search cities...') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'tokyo' } });
    
    // Shouldn't call immediately
    expect(mockOnSearch).not.toHaveBeenCalled();
    
    // Should call after debounce delay
    await waitFor(() => {
      expect(mockOnSearch).toHaveBeenCalledWith('tokyo');
    }, { timeout: 400 });
  });
});

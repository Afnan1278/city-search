import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SearchBox } from '../../components/SearchBox';

describe('SearchBox Component', () => {
  it('renders the search input', () => {
    const mockOnSearch = vi.fn();
    render(<SearchBox onSearch={mockOnSearch} query="" />);

    expect(screen.getByPlaceholderText('Search cities...')).toBeInTheDocument();
  });

  it('calls onSearch when the input value changes', () => {
    const mockOnSearch = vi.fn();
    render(<SearchBox onSearch={mockOnSearch} query="" />);

    const input = screen.getByPlaceholderText('Search cities...');
    fireEvent.change(input, { target: { value: 'tokyo' } });

    expect(mockOnSearch).toHaveBeenCalledWith('tokyo');
  });

  it('reflects the current query value in the input field', () => {
    const mockOnSearch = vi.fn();
    render(<SearchBox onSearch={mockOnSearch} query="new york" />);

    const input = screen.getByPlaceholderText('Search cities...');
    expect(input).toHaveValue('new york');
  });
});

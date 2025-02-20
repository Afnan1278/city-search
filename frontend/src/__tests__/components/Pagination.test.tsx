import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import PaginationComponent from '../../components/PaginationComponent';

describe('PaginationComponent', () => {
  

  it('calls onPageChange when a page is clicked', () => {
    const mockOnPageChange = vi.fn();
    render(
      <PaginationComponent
        totalPages={3}
        currentPage={1}
        onPageChange={mockOnPageChange}
      />
    );

    fireEvent.click(screen.getByText('2'));
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it('calls onPageChange when "next" button is clicked', () => {
    const mockOnPageChange = vi.fn();
    render(
      <PaginationComponent
        totalPages={3}
        currentPage={1}
        onPageChange={mockOnPageChange}
      />
    );

    fireEvent.click(screen.getByText('Next'));
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it('disables "previous" button on the first page', () => {
    render(
      <PaginationComponent
        totalPages={3}
        currentPage={1}
        onPageChange={vi.fn()}
      />
    );

    expect(screen.queryByText('Previous')).toBeNull();
  });

  it('disables "next" button on the last page', () => {
    render(
      <PaginationComponent
        totalPages={3}
        currentPage={3}
        onPageChange={vi.fn()}
      />
    );

    expect(screen.queryByText('Next')).toBeNull();
  });
});

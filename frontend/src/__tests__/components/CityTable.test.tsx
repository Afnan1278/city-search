import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CityTable from '../../components/CityTable';

const mockData = {
  cities: [
    {
      name: 'Tokyo',
      name_native: '東京',
      country: 'Japan',
      continent: 'Asia',
      population: '14000000',
      founded: '1603',
    
      landmarks: [ 'Asakusa', 'Tokyo Skytree','Tokyo Tower'],
      latitude: '35.652832',
      longitude: '139.839478',

      
    },
    {
      name: 'Paris',
      name_native: 'Paris',
      country: 'France',
      continent: 'Europe',
      population: '11000000',
      founded: '508',
      landmarks: ['Eiffel Tower', 'Louvre Museum'],
      latitude: '48.856613',
      longitude: '2.352222',


    },
  ],
  total: 2,
};

describe('CityTable Component', () => {
  it('shows loading state when isLoading is true', () => {
    render(<CityTable data={undefined} isLoading={true} />);
    expect(screen.getByText('Loading cities...')).toBeInTheDocument();
  });

  it('renders city data when provided', () => {
    render(<CityTable data={mockData} isLoading={false} />);

    expect(screen.getByText('Tokyo')).toBeInTheDocument();
    expect(screen.getByText('Paris')).toBeInTheDocument();
    expect(screen.getByText('Japan')).toBeInTheDocument();
    expect(screen.getByText('France')).toBeInTheDocument();
  });

  it('expands and collapses rows to show/hide landmarks', () => {
    render(<CityTable data={mockData} isLoading={false} />);

    const toggleButton = screen.getByText('Tokyo').closest('tr')?.querySelector('svg');
    expect(toggleButton).toBeInTheDocument();

    // Expand Tokyo row
    fireEvent.click(toggleButton!);
    expect(screen.getByText('Tokyo Tower')).toBeInTheDocument();
  });
});

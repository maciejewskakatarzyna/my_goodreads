import { render, screen, fireEvent } from '../../test-utils';
import SearchBar from '../SearchBar/SearchBar';

describe('Search Bar', () => {
  it('Renders the component', () => {
    render(<SearchBar />);
    screen.getByPlaceholderText('Search');
  });

  it('Displays books when search phrase is matching', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'sam' } });
    await screen.findByText(/Ipsam/);
  });
});

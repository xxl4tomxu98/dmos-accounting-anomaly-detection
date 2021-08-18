import { screen } from '@testing-library/react';
import { render } from 'src/test-utils';
import { Home } from './Home';

function setup(): void {
  render(<Home />);
}

describe('Home Page Component', () => {
  it('Renders the page title', async () => {
    setup();
    const title = await screen.findByRole('heading');
    expect(title).toHaveTextContent('Elite Forensic Accounting Agency');
  });
});

export {};

import { screen } from '@testing-library/dom';
import { render } from 'src/test-utils';
import { Dashboard } from './Dashboard';

describe('Dashboard Page Tests', () => {
  it('Renders page properly', () => {
    render(<Dashboard />);

    const pageTitle = screen.getByTestId('page-heading');

    expect(pageTitle).toHaveTextContent('Dashboard');
  });
});

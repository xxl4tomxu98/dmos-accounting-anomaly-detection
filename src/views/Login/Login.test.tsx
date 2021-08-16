import { screen } from '@testing-library/dom';
import { render } from 'src/test-utils';
import { Login } from './Login';

function setup(): { cta: HTMLButtonElement } {
  render(<Login />);
  const cta = screen.getByRole('button', {
    name: /access your insights/i,
  }) as HTMLButtonElement;

  return { cta };
}

describe('Login Page', () => {
  it('Elements Exist', () => {
    const { cta } = setup();
    const heading = screen.getByRole('heading', {
      name: /login to view your dashboard/i,
    });
    expect(heading).toBeInTheDocument();

    expect(cta).toBeInTheDocument();
  });
});

export {};

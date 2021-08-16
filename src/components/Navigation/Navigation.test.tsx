import { screen } from '@testing-library/react';
import { render } from 'src/test-utils';
import { Navigation } from './Navigation';

function setup(): void {
  render(<Navigation />);
}
describe('Navigation Renders correct links and buttons', () => {
  it('Unauthorized Navigation component state', () => {
    setup();
    const baseUrl = 'http://localhost';
    const validNoAuthLinks = [`${baseUrl}/login`, `${baseUrl}/home`];
    const links = screen.getAllByRole('link') as HTMLAnchorElement[];

    links.forEach((link) => {
      expect(
        validNoAuthLinks.some((l) => {
          return l === link.href;
        }),
      ).toBe(true);
    });
  });
});

export {};

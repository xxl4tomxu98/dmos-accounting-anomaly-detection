import { assignToken, getTokenValue, handleTokenUpdate } from './token-helpers';

describe('token function', () => {
  it('Renders correct initial values', () => {
    expect(getTokenValue()).toBe(undefined);
  });
  it('Assigns new token values properly', () => {
    assignToken('test');
    expect(getTokenValue()).toBe('test');
  });

  it('Token updates properly', () => {
    handleTokenUpdate({ token: 'testing-123' });
    expect(getTokenValue()).toBe('testing-123');
  });
});

export {};

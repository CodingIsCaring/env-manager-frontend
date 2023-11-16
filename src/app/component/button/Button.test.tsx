import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('should be rendered', () => {
    render(<Button title="environment"></Button>);
    expect(screen.getByText('environment')).toBeDefined();
  });
});
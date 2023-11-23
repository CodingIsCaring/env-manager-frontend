import { fireEvent, render, screen } from '@testing-library/react';
import { EnvironmentForm } from '@/app/component/EnvironmentForm';
import { API } from '@/api/API';

describe('Environment form', () => {
  test('should be rendered', () => {
    render(<EnvironmentForm/>);

    expect(screen.getByPlaceholderText('Name')).toBeDefined();
    expect(screen.getByPlaceholderText('Description')).toBeDefined();
    expect(screen.getByText('Create environment')).toBeDefined();
  });
  test('should successfully create an environment with a name without description', () => {
    render(<EnvironmentForm/>);
    API.environment.create = () => Promise.resolve();

    const inputName = screen.getByPlaceholderText('Name');

    fireEvent.change(inputName, { target: { value: 'test' } });
    fireEvent.click(screen.getByText('Create environment'));

    expect(screen.getByText('Environment with name test created successfully')).toBeDefined();
  });
});
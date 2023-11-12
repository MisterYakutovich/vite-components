import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
//import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('TEST APP', () => {
  test('Router test', () => {
    render(<App />);

    expect(screen.getByTestId('page_404')).toBeInTheDocument();
  });
});

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Page_404 from './Page_404';

test('renders 404 page when navigating to incorrect route', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/nonexistent-route']}>
      <Routes>
        <Route path="/nonexistent-route" element={<Page_404 />} />
      </Routes>
    </MemoryRouter>
  );
  const notFoundText = getByText('Error page');
  expect(notFoundText).toBeInTheDocument();
  screen.debug();
});

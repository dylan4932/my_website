import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the sticky nav wordmark', () => {
  render(<App />);
  const wordmark = screen.getAllByText(/yuan ji/i)[0];
  expect(wordmark).toBeInTheDocument();
});

test('renders the download CV pill CTA', () => {
  render(<App />);
  const ctas = screen.getAllByText(/download cv/i);
  expect(ctas.length).toBeGreaterThan(0);
});

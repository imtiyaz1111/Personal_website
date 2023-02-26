import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
$(document).ready(function(){
  $(".counnum").counterUp({
    delay:10,
    time:1200
  })
})

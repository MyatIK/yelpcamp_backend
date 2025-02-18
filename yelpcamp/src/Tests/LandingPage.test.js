import { render, screen } from '@testing-library/react';
import LandingPage from '../Components/LandingPage';
import { BrowserRouter } from 'react-router-dom';

test('View Campgrounds button is working', () => {
  render( <LandingPage />, {wrapper: BrowserRouter}
  
  );
  
  expect(screen.getByRole("button",{name: /View Campgrounds/i})).toBeEnabled();
});



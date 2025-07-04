import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Hero from '../landing_page/home/Hero';

describe('Hero Component', () => {
  test('renders hero image', () => {
    render(<Hero />);
    const heroImages = screen.getAllByAltText("Hero Image");
    
    // Ensure at least one image is present
    expect(heroImages.length).toBeGreaterThan(0);

    // Check if the first image has correct src
    expect(heroImages[0]).toBeInTheDocument();
    expect(heroImages[0]).toHaveAttribute("src", "media/images/homeHero.png");
  });
});

import React from 'react';
import { redner, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extended-expect';
import About from '..';
const { asFragment } = render(<About />);

afterEach(cleanup);

describe('About component', () => {
    //First Test
    it('renders', () => {
        render(<About />);
    });
    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render About
    })
})
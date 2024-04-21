import React from 'react';
import { render } from '@testing-library/react';
import Timer from '@/components/Timer';

// Mocking useBreakpointValue hook
jest.mock('@chakra-ui/react', () => ({
  ...jest.requireActual('@chakra-ui/react'),
  useBreakpointValue: jest.fn().mockReturnValue('md'), // Mocking to return 'md' for all breakpoints
}));

describe('Timer component', () => {
  it('renders correctly with provided props', () => {
    const { getByText } = render(
      <Timer
        percentageRemaining={50}
        displayTime="25:00"
        sessionType="Work"
      />
    );

    expect(getByText('25:00')).toBeInTheDocument();
    expect(getByText('Work')).toBeInTheDocument();
  });
});

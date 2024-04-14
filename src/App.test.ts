import React from 'react';
import { render, screen } from '@testing-library/react';
import '@types/jest'
import App from './App';

test('renders learn react link', () => {
    render(React.createElement(App));
    const divElement = screen.getByTestId("hello")
    expect(divElement).toContain(/Hello World/);
});

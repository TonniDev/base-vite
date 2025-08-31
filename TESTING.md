# Testing Setup Documentation

This document explains the testing setup for this React application. We use Jest as the test runner and React Testing Library for testing React components.

## Installed Packages

### Core Testing Libraries
- **jest**: The testing framework
- **@testing-library/react**: For testing React components
- **@testing-library/jest-dom**: Provides custom DOM element matchers for Jest
- **@testing-library/user-event**: For simulating user events
- **@testing-library/dom**: Required by React Testing Library
- **jest-environment-jsdom**: Provides a browser-like environment for tests

### TypeScript Support
- **@types/jest**: TypeScript type definitions for Jest
- **babel-jest**: For transforming JavaScript and TypeScript files
- **@babel/core**: Babel core functionality
- **@babel/preset-env**: For compiling modern JavaScript features
- **@babel/preset-react**: For compiling JSX
- **@babel/preset-typescript**: For compiling TypeScript

### Asset Mocking
- **identity-obj-proxy**: For mocking CSS modules

## Configuration Files

### Jest Configuration
The `jest.config.js` file contains the Jest configuration:
- Sets the test environment to jsdom (browser-like)
- Configures file transformations with babel-jest
- Sets up module name mappers for non-JS assets
- Configures test file patterns
- Sets up coverage reporting

### Babel Configuration
The `.babelrc` file configures Babel for transpiling TypeScript and JSX:
- Uses @babel/preset-env for modern JavaScript
- Uses @babel/preset-typescript for TypeScript
- Uses @babel/preset-react for JSX with automatic runtime

### TypeScript Configuration
The `tsconfig.test.json` file extends the main TypeScript configuration with test-specific settings:
- Changes module system to Node.js compatible settings
- Adds types for Jest and Testing Library
- Configures proper file inclusion patterns for tests

## NPM Scripts

The following npm scripts are available for testing:
- `yarn test`: Runs Jest once
- `yarn test:watch`: Runs Jest in watch mode, which re-runs tests when files change
- `yarn test:coverage`: Runs Jest and generates a code coverage report

## Writing Tests

### Basic Test Structure
```tsx
import { render, fireEvent } from '@testing-library/react';
import YourComponent from './YourComponent';

describe('YourComponent', () => {
  test('should render correctly', () => {
    const { container } = render(<YourComponent />);
    // Add assertions
  });
});
```

### Common Testing Patterns

#### Querying Elements
```tsx
// By text content
const element = screen.getByText('Hello World');
```
```tsx
// By role
const button = screen.getByRole('button', { name: 'Submit' });
```
```tsx
// By test ID
const element = screen.getByTestId('custom-element');
```
```tsx
// Using container queries (direct DOM access)
const { container } = render(<YourComponent />);
const element = container.querySelector('.classname');
```

#### Testing User Interactions
```tsx
// Click events
const button = screen.getByRole('button');
fireEvent.click(button);

// Form input
const input = screen.getByLabelText('Username');
fireEvent.change(input, { target: { value: 'testuser' } });
```

#### Mocking Browser APIs
```tsx
// localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// fetch
global.fetch = jest.fn().mockResolvedValue({
  json: jest.fn().mockResolvedValue({ data: 'mocked data' })
});
```

## Best Practices

1. **Test Component Behavior**: Focus on testing what the component does, not its implementation details.
2. **Use Accessible Queries**: Prefer queries that reflect how users interact with your application (getByRole, getByLabelText, etc.)
3. **Mock External Dependencies**: Use jest.mock() for API calls and other external services.
4. **Test User Interactions**: Test what happens when users interact with your components.
5. **Keep Tests Simple**: Each test should verify one specific behavior.
6. **Use Test Data Generators**: Create helpers for generating test data instead of duplicating test data.
7. **Test Error States**: Don't just test the happy path; test how your component behaves when errors occur.

## Troubleshooting

### Common Issues

1. **Tests Can't Find Elements**: Make sure you're using the right query and that the element actually exists in the rendered output.
2. **Jest Doesn't Transform Files**: Check your transform configuration in jest.config.js.
3. **TypeScript Errors**: Ensure tsconfig.test.json is properly configured and that your tests have the correct imports.
4. **Module Import Errors**: Check moduleNameMapper in jest.config.js for correct path mapping.

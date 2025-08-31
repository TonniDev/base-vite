import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeSwitcher from './ThemeSwitcher';

const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    clear: () => {
      store = {};
    }
  };
})();

console.log = jest.fn();

describe('ThemeSwitcher', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    document.documentElement.classList.remove('dark');
    localStorageMock.clear();
    jest.clearAllMocks();
  });

  test('renders with the light theme by default', () => {
    const { container } = render(<ThemeSwitcher />);

    const darkModeButton = container.querySelector('.dark-mode-switch');
    const lightModeButton = container.querySelector('.light-mode-switch');

    expect(darkModeButton).toBeInTheDocument();
    expect(darkModeButton).not.toHaveClass('hidden');
    expect(lightModeButton).toHaveClass('hidden');
  });

  test('switches to the dark theme when the dark mode button is clicked', async () => {
    const user = userEvent.setup();
    const { container } = render(<ThemeSwitcher />);
    const darkModeButton = container.querySelector('.dark-mode-switch');
    const lightModeButton = container.querySelector('.light-mode-switch');
    
    expect(darkModeButton).not.toHaveClass('hidden');
    expect(lightModeButton).toHaveClass('hidden');

    if (darkModeButton) {
      await user.click(darkModeButton);
    }

    expect(darkModeButton).toHaveClass('hidden');
    expect(lightModeButton).not.toHaveClass('hidden');
    expect(localStorageMock.getItem('preferred-theme')).toBe('darkTheme');
  });

  test('loads theme from localStorage', () => {
    localStorageMock.setItem('preferred-theme', 'darkTheme');
    
    const { container } = render(<ThemeSwitcher />);

    const darkModeButton = container.querySelector('.dark-mode-switch');
    const lightModeButton = container.querySelector('.light-mode-switch');

    expect(lightModeButton).not.toHaveClass('hidden');
    expect(darkModeButton).toHaveClass('hidden');
  });
});

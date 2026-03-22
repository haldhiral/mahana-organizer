"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "mahana-theme";
const SYSTEM_THEME_QUERY = "(prefers-color-scheme: dark)";

const themeColors: Record<Theme, string> = {
  light: "#f8f1ea",
  dark: "#1b1513",
};

type ThemeContextValue = {
  mounted: boolean;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function isTheme(value: string | null | undefined): value is Theme {
  return value === "light" || value === "dark";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;

  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  if (themeColorMeta) {
    themeColorMeta.setAttribute("content", themeColors[theme]);
  }
}

function getDocumentTheme(): Theme {
  if (typeof document !== "undefined") {
    const currentTheme = document.documentElement.dataset.theme;
    if (isTheme(currentTheme)) {
      return currentTheme;
    }
  }

  return "light";
}

export const themeInitializerScript = `
(() => {
  const storageKey = "${THEME_STORAGE_KEY}";
  const darkQuery = "${SYSTEM_THEME_QUERY}";
  const colors = ${JSON.stringify(themeColors)};
  const root = document.documentElement;

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;

    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute("content", colors[theme]);
    }
  };

  try {
    const storedTheme = window.localStorage.getItem(storageKey);
    if (storedTheme === "light" || storedTheme === "dark") {
      applyTheme(storedTheme);
      return;
    }
  } catch {}

  const prefersDark =
    typeof window.matchMedia === "function" &&
    window.matchMedia(darkQuery).matches;

  applyTheme(prefersDark ? "dark" : "light");
})();
`;

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getDocumentTheme);
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(SYSTEM_THEME_QUERY);

    const handleChange = (event: MediaQueryListEvent) => {
      try {
        const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
        if (isTheme(storedTheme)) {
          return;
        }
      } catch {
        // Ignore storage access failures and continue with system preference.
      }

      const nextTheme: Theme = event.matches ? "dark" : "light";
      setThemeState(nextTheme);
      applyTheme(nextTheme);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  function setTheme(nextTheme: Theme) {
    setThemeState(nextTheme);
    applyTheme(nextTheme);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // Ignore storage access failures and keep the current session theme.
    }
  }

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ mounted, theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider.");
  }

  return context;
}

// Button.tsx
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}

// Layout.tsx
export interface LayoutProps {
  children: React.ReactNode;
}

// index.tsx
export interface PageRouteProps {
  pageRoute: string;
}



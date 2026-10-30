import AuthShell from '@/components/layout/AuthShell/AuthShell';

// Login, signup and the client's account page: the shared backdrop, no navbar or footer
export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <AuthShell>{children}</AuthShell>;
}

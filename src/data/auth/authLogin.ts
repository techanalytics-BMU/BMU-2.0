import type { AuthLoginContent } from '@/types/auth';

// Login page (/login)
export const authLogin: AuthLoginContent = {
  headingStart: 'Welcome',
  headingHighlight: 'back.',
  description: 'Log in to your BMU account.',
  fields: [
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'you@business.com',
      autoComplete: 'email',
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Your password',
      autoComplete: 'current-password',
    },
  ],
  forgotPassword: 'Forgot password?',
  forgotPasswordHint: 'Ask your BMU admin to reset it for you.',
  submit: 'Log in',
  sending: 'Logging in…',
  switchText: 'New here?',
  switchLink: { label: 'Create an account', href: '/signup' },
  notices: {
    // the confirmation link expired, or was opened in a different browser
    confirm: 'If you’ve confirmed your email, please log in to continue.',
  },
};

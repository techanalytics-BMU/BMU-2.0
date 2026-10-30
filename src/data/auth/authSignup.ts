import type { AuthSignupContent } from '@/types/auth';

// Signup page (/signup) – every new account is a client; staff roles are given by an admin
export const authSignup: AuthSignupContent = {
  headingStart: 'Create your',
  headingHighlight: 'account.',
  description: 'Join BMU to follow your projects in one place.',
  fields: [
    {
      name: 'fullName',
      label: 'Full name',
      type: 'text',
      placeholder: 'Full name',
      autoComplete: 'name',
      half: true,
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'tel',
      placeholder: '98765 43210',
      autoComplete: 'tel',
      half: true,
    },
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
      placeholder: '8+ characters',
      autoComplete: 'new-password',
      half: true,
    },
    {
      name: 'confirmPassword',
      label: 'Confirm password',
      type: 'password',
      placeholder: 'Type it again',
      autoComplete: 'new-password',
      half: true,
    },
  ],
  submit: 'Create account',
  sending: 'Creating account…',
  checkEmailTitle: 'Check your inbox',
  checkEmailText:
    'We’ve sent a confirmation link to {email}. Open it to finish creating your account.',
  switchText: 'Already have an account?',
  switchLink: { label: 'Log in', href: '/login' },
};

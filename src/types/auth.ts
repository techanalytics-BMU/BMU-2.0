// ---------- Accounts (Supabase table public.profiles – supabase/migrations/0001_profiles.sql) ----------

export type AppRole = 'admin' | 'manager' | 'seo' | 'client'; // seo = SEO writer (blog only)

export type Profile = {
  id: string;
  email: string;
  full_name: string | null;
  phone: string | null;
  role: AppRole;
};

// ---------- Text for the login / signup / account pages (src/data/auth) ----------

export type AuthField = {
  name: string; // sent with the form
  label: string;
  type: 'text' | 'email' | 'tel' | 'password';
  placeholder?: string;
  autoComplete?: string;
  half?: boolean; // half width on wider screens (sits next to the following half-width field)
};

export type AuthLoginContent = {
  headingStart: string;
  headingHighlight: string; // the last word, in lime
  description: string;
  fields: AuthField[];
  forgotPassword: string; // link text
  forgotPasswordHint: string; // shown when it's clicked (no reset by email yet)
  submit: string;
  sending: string;
  switchText: string; // "New here?"
  switchLink: { label: string; href: string };
  notices: Record<string, string>; // shown above the form for /login?notice=<key>
};

export type AuthSignupContent = {
  headingStart: string;
  headingHighlight: string;
  description: string;
  fields: AuthField[];
  submit: string;
  sending: string;
  checkEmailTitle: string; // when Supabase asks them to confirm their email first
  checkEmailText: string; // {email} is replaced
  switchText: string;
  switchLink: { label: string; href: string };
};

export type AuthAccountContent = {
  headingStart: string; // {name} is replaced
  headingStartNoName: string; // when there's no name to show
  headingHighlight: string;
  description: string;
  notSetUp: string; // logged in, but the account has no profile row
  backToSite: { label: string; href: string };
  logout: string;
};

// What a server action sends back to its form
export type AuthFormState = {
  error?: string; // shown above the button
  fieldErrors?: Record<string, string>;
  values?: Record<string, string>; // what they typed (never the password), to refill the form
  checkEmail?: string; // signup: the address the confirmation went to
  done?: boolean; // change password: it worked
};

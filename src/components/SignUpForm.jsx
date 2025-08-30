import { useState } from 'react';

function validate(values) {
  const errors = {};
  if (!values.fullName.trim()) errors.fullName = 'Your name is required.';
  if (!values.email) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!values.password) {
    errors.password = 'Password is required.';
  } else if (values.password.length < 8) {
    errors.password = 'Use at least 8 characters.';
  } else if (!/\d/.test(values.password)) {
    errors.password = 'Include at least one number.';
  }
  if (values.confirm !== values.password) {
    errors.confirm = 'Passwords do not match.';
  }
  if (!values.terms) {
    errors.terms = 'You must accept the terms.';
  }
  return errors;
}

function Input({ label, id, type = 'text', value, onChange, error, autoComplete, placeholder }) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-medium text-slate-700">{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={`block w-full rounded-lg border bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition ${error ? 'border-rose-400' : 'border-slate-200'}`}
      />
      {error && <p className="text-xs text-rose-600">{error}</p>}
    </div>
  );
}

function SignUpForm() {
  const [values, setValues] = useState({ fullName: '', email: '', password: '', confirm: '', terms: false });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((v) => ({ ...v, [name]: type === 'checkbox' ? checked : value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setLoading(true);
    try {
      // Simulate API call
      await new Promise((r) => setTimeout(r, 900));
      setSuccess(true);
      setValues({ fullName: '', email: '', password: '', confirm: '', terms: false });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-[0] rounded-3xl bg-gradient-to-br from-rose-100 via-white to-rose-50 opacity-80" />
      <div className="relative rounded-3xl border border-slate-200 bg-white/90 backdrop-blur p-6 sm:p-8 shadow-xl">
        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              id="fullName"
              label="Full name"
              value={values.fullName}
              onChange={onChange}
              error={errors.fullName}
              autoComplete="name"
              placeholder="Ada Lovelace"
            />
            <Input
              id="email"
              label="Email"
              type="email"
              value={values.email}
              onChange={onChange}
              error={errors.email}
              autoComplete="email"
              placeholder="ada@example.com"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              id="password"
              label="Password"
              type="password"
              value={values.password}
              onChange={onChange}
              error={errors.password}
              autoComplete="new-password"
              placeholder="••••••••"
            />
            <Input
              id="confirm"
              label="Confirm password"
              type="password"
              value={values.confirm}
              onChange={onChange}
              error={errors.confirm}
              autoComplete="new-password"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              checked={values.terms}
              onChange={onChange}
              className={`mt-1 h-4 w-4 rounded border ${errors.terms ? 'border-rose-400' : 'border-slate-300'} text-rose-600 focus:ring-rose-500`}
            />
            <label htmlFor="terms" className="text-sm text-slate-700">
              I agree to the Terms of Service and Privacy Policy.
            </label>
          </div>
          {errors.terms && <p className="-mt-2 text-xs text-rose-600">{errors.terms}</p>}

          <div className="mt-2 flex items-center gap-3">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-lg bg-rose-600 px-5 py-2.5 text-white text-sm font-medium shadow-sm hover:bg-rose-700 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 transition"
            >
              {loading ? 'Creating account…' : 'Create account'}
            </button>
            <p className="text-xs text-slate-500">No spam. Cancel anytime.</p>
          </div>

          {success && (
            <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
              Your account has been created. Check your inbox to verify your email.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;

import React from 'react';

/**
 * Honest stats strip (replaces a fake "trusted by these brands" logo cloud). Every number is
 * a true fact about the generator itself.
 */
const stats = [
  { value: '7', label: 'Questions' },
  { value: '~60s', label: 'To a plan' },
  { value: '0', label: 'Sign-up, cost, tracking' },
  { value: '100%', label: 'In your browser' },
];

const LogoCloud = () => (
  <section className="border-y border-border bg-card/40 py-10">
    <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <div className="font-display text-4xl text-primary sm:text-5xl">{s.value}</div>
          <div className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default LogoCloud;

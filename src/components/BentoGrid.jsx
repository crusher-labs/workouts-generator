import React from 'react';
import { ClipboardList, Cpu, ShieldCheck, RefreshCw } from 'lucide-react';

/**
 * "How it works" bento - replaces the stock-photo marketing bento. No external images, no
 * dead "blog/about/contact" links. Explains the actual product honestly.
 */
const cells = [
  {
    icon: ClipboardList,
    eyebrow: 'STEP 01',
    title: 'Answer 7 questions',
    body: 'Body metrics, goal, level, days per week, focus areas, and equipment. Takes under a minute.',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    icon: Cpu,
    eyebrow: 'STEP 02',
    title: 'Plan built client-side',
    body: 'No server, no account. The generator runs in your browser instantly.',
    span: '',
  },
  {
    icon: ShieldCheck,
    eyebrow: 'PRIVATE',
    title: 'Stays on your device',
    body: 'Nothing you enter leaves the page.',
    span: '',
  },
  {
    icon: RefreshCw,
    eyebrow: 'STEP 03',
    title: 'Re-run anytime',
    body: 'Change a goal, get a new split.',
    span: '',
  },
];

const BentoGrid = () => (
  <section className="bg-background py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-14 max-w-2xl">
        <span className="font-display text-xs tracking-[0.25em] text-primary">HOW IT WORKS</span>
        <h2 className="font-display mt-2 text-4xl tracking-tight text-foreground sm:text-5xl">
          From questions to <span className="text-primary">plan</span>, in a minute.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
        {cells.map(({ icon: Icon, eyebrow, title, body, span }) => (
          <div
            key={title}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card p-6 transition hover:border-primary/50 ${span}`}
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-2xl transition group-hover:opacity-20"
              style={{ background: 'radial-gradient(circle, hsl(81 94% 57%) 0%, transparent 70%)' }}
              aria-hidden="true"
            />
            <div className="relative">
              <Icon className="h-7 w-7 text-primary" />
              <span className="font-display mt-5 block text-xs tracking-[0.25em] text-muted-foreground">
                {eyebrow}
              </span>
              <h3 className="font-display mt-1 text-2xl tracking-wide text-foreground">{title}</h3>
            </div>
            <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BentoGrid;

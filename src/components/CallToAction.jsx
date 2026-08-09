import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

/**
 * Closing CTA. No stock photo, no clashing blue glow. Just the floor-grid + a volt panel.
 */
const CallToAction = ({ onStart }) => (
  <section className="bg-background px-4 pb-24 sm:px-6 lg:px-8">
    <div className="floor-grid relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border bg-card p-10 sm:p-16">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(circle, hsl(81 94% 57%) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="relative text-center">
        <h2 className="font-display text-4xl tracking-tight text-foreground sm:text-6xl">
          STOP GUESSING.
          <br />
          <span className="text-primary volt-glow">START TRAINING.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Your plan is one minute away. Free, instant, and yours to keep.
        </p>
        <div className="mt-8">
          <Button
            onClick={() => onStart()}
            className="bg-primary px-8 py-6 text-base font-bold uppercase tracking-wide text-primary-foreground shadow-[0_0_30px_-6px_hsl(81_94%_57%/0.65)] transition hover:bg-primary/90"
            size="lg"
          >
            Generate my plan
            <ChevronRight className="ml-1 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default CallToAction;

import React from 'react';
import { Button } from '@/components/ui/button';
import { Dumbbell, Activity, Expand as Stretch, ChevronRight } from 'lucide-react';

/**
 * Hero - "Training Floor" identity. No stock photography (the motif is the measurement-grid
 * floor + oversized Anton numerals), no fake social proof. The product's real value (the
 * generator) is the single CTA; the three cards are quick-start intents that also open it.
 */
const Hero = ({ onStart }) => {
  const intents = [
    { icon: Dumbbell, label: 'Strength', note: 'Build muscle and raw power.' },
    { icon: Activity, label: 'Endurance', note: 'Conditioning and stamina.' },
    { icon: Stretch, label: 'Mobility', note: 'Range of motion and recovery.' },
  ];

  return (
    <section className="relative w-full overflow-hidden floor-grid">
      {/* volt corner glow, no photo */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(circle, hsl(81 94% 57%) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <span className="font-display inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs tracking-[0.2em] text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" /> WORKOUT PLAN GENERATOR
        </span>

        <h1 className="font-display mt-6 max-w-3xl text-6xl leading-[0.9] text-foreground sm:text-7xl lg:text-8xl">
          TRAIN <span className="text-primary volt-glow">SMART</span>,
          <br />
          LIFT HEAVY.
        </h1>

        <p className="mt-6 max-w-md text-lg text-muted-foreground">
          Answer a few questions. Get a plan tuned to your body, your goal, and the days you
          actually have. Built in your browser, no sign-up.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Button
            onClick={() => onStart()}
            className="bg-primary px-8 py-6 text-base font-bold uppercase tracking-wide text-primary-foreground shadow-[0_0_30px_-6px_hsl(81_94%_57%/0.65)] transition hover:bg-primary/90"
            size="lg"
          >
            Generate my plan
            <ChevronRight className="ml-1 h-5 w-5" />
          </Button>
          <span className="text-sm text-muted-foreground">Free, instant, client-side</span>
        </div>

        {/* Quick-start intents -> all open the generator */}
        <div className="mt-14 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
          {intents.map(({ icon: Icon, label, note }) => (
            <button
              key={label}
              type="button"
              onClick={() => onStart()}
              className="group flex items-start gap-3 rounded-xl border border-border bg-card/60 p-4 text-left transition hover:border-primary/60 hover:shadow-[0_0_24px_-8px_hsl(81_94%_57%/0.5)]"
            >
              <Icon className="mt-0.5 h-6 w-6 flex-none text-primary" />
              <span>
                <span className="block font-display text-lg tracking-wide text-foreground">{label}</span>
                <span className="block text-xs text-muted-foreground">{note}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

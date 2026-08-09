import React from 'react';
import { Dumbbell, Flame, Leaf } from 'lucide-react';

const workoutCategories = [
  {
    title: 'Build',
    description: 'Targeted hypertrophy and strength work to add muscle and move more weight.',
    icon: <Dumbbell className="h-7 w-7 text-primary" />,
    intensity: [
      { label: 'Strength', value: 90 },
      { label: 'Hypertrophy', value: 75 },
      { label: 'Cardio', value: 25 },
    ],
  },
  {
    title: 'Burn',
    description: 'High-intensity circuits and conditioning to raise your engine and shed fat.',
    icon: <Flame className="h-7 w-7 text-primary" />,
    intensity: [
      { label: 'Cardio', value: 95 },
      { label: 'HIIT', value: 85 },
      { label: 'Endurance', value: 70 },
    ],
  },
  {
    title: 'Move',
    description: 'Dynamic stretching and mobility to restore range of motion and speed recovery.',
    icon: <Leaf className="h-7 w-7 text-primary" />,
    intensity: [
      { label: 'Mobility', value: 90 },
      { label: 'Stretching', value: 80 },
      { label: 'Balance', value: 65 },
    ],
  },
];

const IntensityBar = ({ label, value }) => (
  <div className="w-full">
    <div className="mb-1 flex items-center justify-between">
      <span className="font-display text-xs tracking-[0.15em] text-muted-foreground">{label.toUpperCase()}</span>
      <span className="font-display text-xs text-primary">{value}</span>
    </div>
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
      <div className="h-full rounded-full bg-primary" style={{ width: `${value}%` }} />
    </div>
  </div>
);

const WorkoutTypes = () => (
  <section className="bg-background py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-14 max-w-2xl">
        <span className="font-display text-xs tracking-[0.25em] text-primary">TRAINING STYLES</span>
        <h2 className="font-display mt-2 text-4xl tracking-tight text-foreground sm:text-5xl">
          Three engines. One <span className="text-primary">plan</span>.
        </h2>
        <p className="mt-3 text-muted-foreground">
          Your generated plan blends these based on the goal you pick.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {workoutCategories.map((category) => (
          <div
            key={category.title}
            className="flex flex-col rounded-xl border border-border bg-card p-7 transition hover:border-primary/50"
          >
            <div className="grid h-12 w-12 place-items-center rounded-lg border border-border bg-background">
              {category.icon}
            </div>
            <h3 className="font-display mt-5 text-3xl tracking-wide text-foreground">{category.title}</h3>
            <p className="mt-2 flex-grow text-sm leading-relaxed text-muted-foreground">
              {category.description}
            </p>
            <div className="mt-6 space-y-3">
              {category.intensity.map((item) => (
                <IntensityBar key={item.label} label={item.label} value={item.value} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkoutTypes;

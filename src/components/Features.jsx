import React from 'react';
import { CheckCircle, Target, TrendingUp } from 'lucide-react';

const features = [
  {
    number: '01',
    title: 'Built for your body',
    description:
      'Plans adapt to your weight, height, and BMI, so the volume and exercise choices match where you are today.',
    icon: <CheckCircle className="h-7 w-7 text-primary" />,
  },
  {
    number: '02',
    title: 'Goal-driven',
    description:
      'Pick muscle gain, fat loss, or flexibility and the set, rep, and cardio split changes to chase that goal.',
    icon: <Target className="h-7 w-7 text-primary" />,
  },
  {
    number: '03',
    title: 'Fits your week',
    description:
      'Tell it how many days you train and what equipment you own. You get a schedule you can actually keep.',
    icon: <TrendingUp className="h-7 w-7 text-primary" />,
  },
];

const Features = () => {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl">
          <span className="font-display text-xs tracking-[0.25em] text-primary">THE METHOD</span>
          <h2 className="font-display mt-2 text-4xl tracking-tight text-foreground sm:text-5xl">
            A plan that fits <span className="text-primary">you</span>, not the other way around.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-7 transition hover:border-primary/50"
            >
              <span className="font-display absolute -right-2 -top-4 text-8xl text-primary/10 transition group-hover:text-primary/20">
                {feature.number}
              </span>
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-lg border border-border bg-background">
                  {feature.icon}
                </div>
                <h3 className="font-display mt-5 text-2xl tracking-wide text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

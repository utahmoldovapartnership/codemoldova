import CodeBlock from './CodeBlock'

function TierCard({ title, tier, desc, steps, code }) {
  const border =
    tier === 'base'
      ? 'border-wed/35 bg-wed/[0.06]'
      : tier === 'medium'
        ? 'border-thu/40 bg-thu/[0.06]'
        : tier === 'hard'
          ? 'border-rose-400/35 bg-rose-500/[0.07]'
          : 'border-white/[0.12] bg-surface2/50'

  const label =
    tier === 'base' ? 'Base' : tier === 'medium' ? 'Medium' : tier === 'hard' ? 'Hard' : 'Bonus'

  return (
    <div className={`rounded-card border p-6 sm:p-7 ${border}`}>
      <p className="font-mono text-xs uppercase tracking-wider text-muted">{label}</p>
      <h3 className="mt-2 font-display text-xl font-bold text-primary">{title}</h3>
      {desc ? <p className="mt-3 text-base leading-relaxed text-muted">{desc}</p> : null}
      {steps?.length ? (
        <ol className="mt-5 list-decimal space-y-3 pl-5 text-base leading-relaxed text-primary/95">
          {steps.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      ) : null}
      {code ? (
        <div className="mt-4">
          <CodeBlock lang={code.lang} snippet={code.snippet} />
        </div>
      ) : null}
    </div>
  )
}

export default function ThursdayChallenges({ challenges }) {
  if (!challenges) return null

  const { base, medium, hard, bonus } = challenges

  return (
    <section className="space-y-6" aria-labelledby="challenges-heading">
      <h2 id="challenges-heading" className="font-display text-2xl font-bold text-primary sm:text-3xl">
        Thursday project: four levels
      </h2>
      <p className="max-w-prose text-base leading-relaxed text-muted">
        Everyone does <span className="text-wed">Base</span> first. If you have time, try a harder level.
      </p>
      <div className="grid gap-5">
        {base ? (
          <TierCard tier="base" title={base.title} desc={base.desc} steps={base.steps} code={base.code} />
        ) : null}
        {medium ? (
          <TierCard tier="medium" title={medium.title} desc={medium.desc} steps={medium.steps} code={medium.code} />
        ) : null}
        {hard ? (
          <TierCard tier="hard" title={hard.title} desc={hard.desc} steps={hard.steps} code={hard.code} />
        ) : null}
        {bonus ? (
          <div className="rounded-card border border-dashed border-white/[0.2] bg-surface/40 p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">Bonus</p>
            <p className="mt-2 text-base leading-relaxed text-primary">{bonus}</p>
          </div>
        ) : null}
      </div>
    </section>
  )
}

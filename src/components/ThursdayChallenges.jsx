import CodeBlock from './CodeBlock'

function TierCard({ title, tier, desc, steps, code }) {
  const border =
    tier === 'base'
      ? 'border-wed/35 bg-wed/[0.06]'
      : tier === 'medium'
        ? 'border-thu/40 bg-thu/[0.06]'
        : tier === 'hard'
          ? 'border-mon/40 bg-mon/[0.07]'
          : 'border-ink/20 bg-ink/[0.04]'

  const label =
    tier === 'base' ? 'Base' : tier === 'medium' ? 'Medium' : tier === 'hard' ? 'Hard' : 'Bonus'

  return (
    <div className={`border p-6 sm:p-7 ${border}`}>
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/50">{label}</p>
      <h3 className="mt-2 font-serif text-xl font-medium tracking-tight text-ink">{title}</h3>
      {desc ? <p className="mt-3 text-base leading-relaxed text-ink/70">{desc}</p> : null}
      {steps?.length ? (
        <ol className="mt-5 list-decimal space-y-3 pl-5 text-base leading-relaxed text-ink/90">
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
      <h2 id="challenges-heading" className="font-serif text-2xl font-medium tracking-tight text-ink sm:text-3xl">
        Thursday project: four levels
      </h2>
      <p className="max-w-prose text-base leading-relaxed text-ink/70">
        Everyone does <span className="text-wed">Base</span> first. If you have time, try a harder level.
      </p>
      <div className="grid gap-5">
        {base ? (
          <TierCard tier="base" title={base.title} desc={base.desc} steps={base.steps} code={base.code} />
        ) : null}
        {medium ? (
          <TierCard tier="medium" title={medium.title} desc={medium.desc} steps={medium.steps} code={medium.code} />
        ) : null}
        {hard ? <TierCard tier="hard" title={hard.title} desc={hard.desc} steps={hard.steps} code={hard.code} /> : null}
        {bonus ? (
          <div className="border border-dashed border-ink/30 bg-ink/[0.02] p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/50">Bonus</p>
            <p className="mt-2 text-base leading-relaxed text-ink/90">{bonus}</p>
          </div>
        ) : null}
      </div>
    </section>
  )
}

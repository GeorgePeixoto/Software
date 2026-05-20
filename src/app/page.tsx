export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0A0A0A] text-white">
      <main className="flex flex-col items-center gap-6 px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Simulador da Reforma Tributária
        </h1>
        <p className="max-w-lg text-lg text-zinc-400">
          Descubra em segundos como a reforma tributária (IBS/CBS) vai impactar sua empresa entre
          2026 e 2033.
        </p>
        <div className="mt-4 flex gap-3">
          <span className="rounded-full bg-[#A3FF12]/10 px-4 py-2 text-sm font-medium text-[#A3FF12]">
            Em desenvolvimento — Fase 0
          </span>
        </div>
      </main>
    </div>
  );
}

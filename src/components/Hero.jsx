import { Heart, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-600 via-indigo-600 to-indigo-700 text-white">
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#g1)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:flex lg:items-center lg:gap-12 lg:py-32">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <Users className="mr-2 h-3.5 w-3.5" />
            Pensée pour les aidants
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Soutien simple et humain pour les aidants
          </h1>
          <p className="mt-4 text-lg text-indigo-100">
            Organisez les soins, accédez à des ressources fiables et trouvez du
            répit. Une application conçue pour vous accompagner, pas pour vous
            compliquer la vie.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#features"
              className="inline-flex items-center rounded-md bg-white px-5 py-3 text-indigo-700 shadow hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              <Heart className="mr-2 h-5 w-5" />
              Découvrir les aides
            </a>
            <a
              href="#resources"
              className="inline-flex items-center rounded-md bg-indigo-500/30 px-5 py-3 text-white ring-1 ring-inset ring-white/20 hover:bg-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              Explorer les ressources
            </a>
          </div>
        </div>

        <div className="mt-12 w-full max-w-xl shrink-0 rounded-2xl bg-white/10 p-6 backdrop-blur lg:mt-0">
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Rappels de soins", value: "+35%" },
              { label: "Temps gagné", value: "2h/sem" },
              { label: "Réseau d'aidants", value: "1 200+" },
              { label: "Satisfaction", value: "4.8/5" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl bg-white/20 p-4 text-center ring-1 ring-white/25"
              >
                <div className="text-2xl font-bold">{item.value}</div>
                <div className="mt-1 text-xs text-indigo-100">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-indigo-100">
            Données indicatives basées sur nos premiers utilisateurs.
          </p>
        </div>
      </div>
    </section>
  );
}

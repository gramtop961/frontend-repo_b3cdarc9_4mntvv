import { Calendar, Shield, Brain } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Agenda et rappels",
    desc:
      "Planifiez les rendez-vous, les prises de médicaments et recevez des rappels partagés avec votre famille.",
  },
  {
    icon: Shield,
    title: "Suivi sécurisé",
    desc:
      "Conservez les informations médicales importantes au même endroit et partagez-les en toute sécurité.",
  },
  {
    icon: Brain,
    title: "Conseils d'experts",
    desc:
      "Accédez à des guides pratiques, fiches mémo et recommandations adaptées à votre situation.",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            L'essentiel pour vous faciliter le quotidien
          </h2>
          <p className="mt-3 text-gray-600">
            Des outils concrets pour organiser, communiquer et se ressourcer.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
              <div className="mt-4 text-sm font-medium text-indigo-600 opacity-0 transition group-hover:opacity-100">
                En savoir plus →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

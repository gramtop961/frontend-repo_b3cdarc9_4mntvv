import { FileText, Phone, MapPin } from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "Droits & aides financières",
    items: [
      "Allocation journalière du proche aidant (AJPA)",
      "Dossier MDPH et PCH",
      "Crédit d'impôt pour l'emploi d'un salarié à domicile",
    ],
  },
  {
    icon: Phone,
    title: "Numéros utiles",
    items: [
      "3977 - Maltraitance : écoute et orientation",
      "0 800 360 360 - Plateforme handicap",
      "15 - Urgences médicales (SAMU)",
    ],
  },
  {
    icon: MapPin,
    title: "Proches de chez vous",
    items: [
      "Plateformes de répit",
      "Services d'aide à domicile",
      "Associations locales d'aidants",
    ],
  },
];

export default function CareResources() {
  return (
    <section id="resources" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ressources utiles pour avancer sereinement
          </h2>
          <p className="mt-3 text-gray-600">
            Des liens et informations fiables pour vous guider pas à pas.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {resources.map(({ icon: Icon, title, items }) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-700">
                {items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

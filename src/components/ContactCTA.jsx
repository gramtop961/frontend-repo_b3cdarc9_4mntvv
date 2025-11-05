import { Mail, MessageSquare } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg">
          <div className="grid items-center gap-8 p-8 md:grid-cols-2 md:p-12">
            <div>
              <h3 className="text-2xl font-semibold sm:text-3xl">
                Besoin d'aide ou envie de participer ?
              </h3>
              <p className="mt-2 text-indigo-100">
                Rejoignez notre communauté d'aidants pour échanger des conseils,
                partager des ressources et co-construire les prochaines
                fonctionnalités.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:contact@aidants.app"
                  className="inline-flex items-center rounded-md bg-white px-4 py-2.5 text-indigo-700 shadow hover:bg-indigo-50"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Nous écrire
                </a>
                <a
                  href="#"
                  className="inline-flex items-center rounded-md bg-indigo-500/30 px-4 py-2.5 ring-1 ring-inset ring-white/30 hover:bg-indigo-500/40"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Rejoindre la communauté
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm text-indigo-100">
                    Votre prénom
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Camille"
                    className="w-full rounded-lg border-0 bg-white/90 px-3 py-2 text-gray-900 placeholder-gray-400 shadow-inner outline-none ring-1 ring-white/40 focus:ring-2 focus:ring-white"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm text-indigo-100">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="vous@exemple.fr"
                    className="w-full rounded-lg border-0 bg-white/90 px-3 py-2 text-gray-900 placeholder-gray-400 shadow-inner outline-none ring-1 ring-white/40 focus:ring-2 focus:ring-white"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm text-indigo-100">
                    Message
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Dites-nous en plus sur vos besoins..."
                    className="w-full rounded-lg border-0 bg-white/90 px-3 py-2 text-gray-900 placeholder-gray-400 shadow-inner outline-none ring-1 ring-white/40 focus:ring-2 focus:ring-white"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-2.5 font-medium text-indigo-700 shadow hover:bg-indigo-50"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

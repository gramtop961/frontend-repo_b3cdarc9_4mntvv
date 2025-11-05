import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import CareResources from "./components/CareResources";
import ContactCTA from "./components/ContactCTA";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-600 text-white">A</span>
            Aidants
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="text-gray-700 hover:text-indigo-600">Fonctionnalités</a>
            <a href="#resources" className="text-gray-700 hover:text-indigo-600">Ressources</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-white shadow hover:bg-indigo-700">
            Commencer
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <FeatureGrid />
        <CareResources />
        <div id="contact">
          <ContactCTA />
        </div>
      </main>

      <footer className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Aidants. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-indigo-600">Fonctionnalités</a>
            <a href="#resources" className="hover:text-indigo-600">Ressources</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

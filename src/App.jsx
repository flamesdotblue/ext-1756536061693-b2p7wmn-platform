import HeroCover from './components/HeroCover';
import FeatureList from './components/FeatureList';
import SignUpForm from './components/SignUpForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <HeroCover />
      <main className="relative z-0">
        <FeatureList />
        <section id="signup" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Create your account</h2>
              <p className="mt-3 text-slate-600">Join in a few seconds. No credit card required.</p>
            </div>
            <SignUpForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

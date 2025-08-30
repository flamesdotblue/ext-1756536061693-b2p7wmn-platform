import { Rocket, Shield, User } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Fast onboarding',
    desc: 'Set up your account in seconds with a simple, guided flow.',
  },
  {
    icon: Shield,
    title: 'Security first',
    desc: 'Encrypted credentials and best-practice authentication.',
  },
  {
    icon: User,
    title: 'Profile control',
    desc: 'Manage your preferences and privacy with clarity.',
  },
];

function FeatureList() {
  return (
    <section id="learn-more" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Why join</h2>
          <p className="mt-3 text-slate-600">Purpose-built features to keep you moving forward.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureList;

const steps = [
  { step: '01', label: 'Discovery', desc: 'Understand your business goals, challenges, and technical requirements.' },
  { step: '02', label: 'Strategy', desc: 'Define the roadmap, architecture, and success KPIs for your project.' },
  { step: '03', label: 'Development', desc: 'Build fast, scalable solutions using modern technologies and best practices.' },
  { step: '04', label: 'Testing', desc: 'Rigorous QA, performance testing, and security reviews before launch.' },
  { step: '05', label: 'Launch', desc: 'Deploy securely with full operational readiness and monitoring in place.' },
];

export default function Process() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Development Process</h2>
        <div className="grid md:grid-cols-5 gap-6 text-center">
          {steps.map((item) => (
            <div key={item.step} className="flex flex-col items-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-600 font-bold text-sm">
                {item.step}
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{item.label}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

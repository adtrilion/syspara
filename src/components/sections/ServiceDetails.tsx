const details = [
  {
    title: 'AI & Automation',
    desc: 'Build AI-powered systems including chatbots, automation workflows, predictive analytics, and intelligent agents that reduce costs and scale operations.',
    bullets: ['Custom AI model development', 'Workflow & RPA automation', 'AI chatbots & virtual assistants', 'Predictive analytics pipelines'],
  },
  {
    title: 'Web Platforms',
    desc: 'Custom websites and enterprise web platforms designed for speed, scalability, and exceptional user experience.',
    bullets: ['Next.js & React applications', 'SaaS product development', 'E-commerce platforms', 'CMS & headless architecture'],
  },
  {
    title: 'Mobile Applications',
    desc: 'Mobile apps for iOS and Android with modern UI, strong backend integration, and offline capability.',
    bullets: ['React Native cross-platform apps', 'Native iOS & Android development', 'API & backend integration', 'App Store deployment & support'],
  },
  {
    title: 'Cloud Infrastructure',
    desc: 'Secure, scalable cloud architecture designed for reliability, performance, and cost efficiency.',
    bullets: ['AWS, Azure & GCP setup', 'CI/CD pipeline automation', 'Containerization with Docker & Kubernetes', 'Cloud security & compliance'],
  },
];

export default function ServiceDetails() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 space-y-16">
        {details.map((item) => (
          <div key={item.title} className="bg-white rounded-xl border p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
            <p className="text-gray-600 mb-5">{item.desc}</p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {item.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

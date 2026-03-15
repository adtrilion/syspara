const stack = [
  'React', 'Next.js', 'Node.js', 'Python',
  'TensorFlow', 'AWS', 'Docker', 'PostgreSQL',
  'TypeScript', 'React Native', 'Kubernetes', 'OpenAI',
];

export default function TechStack() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 text-center">
          {stack.map((tech) => (
            <div key={tech} className="border p-4 rounded-lg text-sm font-medium text-slate-700 shadow-sm hover:shadow-md transition-shadow bg-white">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

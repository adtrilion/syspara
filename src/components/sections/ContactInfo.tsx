const info = [
  { label: 'Email', value: 'info@syspara.in' },
  { label: 'Business Hours', value: 'Mon – Fri, 9AM – 6PM' },
  { label: 'Location', value: 'Global Remote Team' },
];

export default function ContactInfo() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
        {info.map((item) => (
          <div key={item.label} className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-2">{item.label}</h3>
            <p className="text-gray-600">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

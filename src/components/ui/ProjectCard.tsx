type Props = {
  title: string;
  tech: string;
  description: string;
};

export default function ProjectCard({ title, tech, description }: Props) {
  return (
    <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-40 bg-gradient-to-br from-blue-100 to-indigo-100" />
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-blue-600 mb-3">{tech}</p>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

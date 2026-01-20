import { FolderClosed, Server } from 'lucide-react';

export default function ProjectCard({ name, description, tech = [], href, icon = 'folder' }) {
  const Icon = icon === 'server' ? Server : FolderClosed;
  const isClickable = !!href;

  const content = (
    <div className={`bg-gray-900 rounded-lg p-4 border border-gray-800 transition ${isClickable ? 'hover:border-green-800 cursor-pointer group' : ''}`}>
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`w-5 h-5 ${icon === 'server' ? 'text-blue-500' : 'text-yellow-500'}`} />
        <span className={`text-green-400 ${isClickable ? 'group-hover:underline' : ''}`}>{name}/</span>
      </div>
      <p className="text-gray-400 text-sm mb-3 ml-7">{description}</p>
      <div className="flex gap-2 ml-7 flex-wrap">
        {tech.map((t, i) => (
          <span key={i} className="text-xs px-2 py-1 bg-gray-800 text-gray-500 rounded">
            {t}
          </span>
        ))}
      </div>
    </div>
  );

  if (isClickable) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
}

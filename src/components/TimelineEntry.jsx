export default function TimelineEntry({ years, description, details = [], expanded = false, onToggle }) {
  const hasDetails = details.length > 0;

  return (
    <div>
      <div
        className={`flex gap-4 ${hasDetails ? 'cursor-pointer hover:text-gray-300' : ''}`}
        onClick={hasDetails ? onToggle : undefined}
      >
        <span className="text-yellow-600 font-mono">{years}</span>
        <span className="text-gray-400">{description}</span>
      </div>
      {expanded && details.length > 0 && (
        <div className="ml-24 mt-1 space-y-1">
          {details.map((detail, i) => (
            <div key={i} className="flex gap-2 text-gray-500">
              <span>{i === details.length - 1 ? '└─' : '├─'}</span>
              <span>{detail}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

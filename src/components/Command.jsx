export default function Command({ command, children, as: Tag = 'section' }) {
  return (
    <Tag className="mb-12">
      <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
        <span className="text-green-500">~</span>
        <span>{command}</span>
      </div>
      {children}
    </Tag>
  );
}

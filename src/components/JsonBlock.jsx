export function JsonBlock({ children }) {
  return (
    <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 text-sm font-mono overflow-x-auto">
      <div className="text-gray-300">{"{"}</div>
      <div className="ml-4">{children}</div>
      <div className="text-gray-300">{"}"}</div>
    </div>
  );
}

export function JsonProperty({ name, value, href, isLast = false }) {
  const valueContent = href ? (
    <a href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer" className="text-green-400 hover:underline">
      "{value}"
    </a>
  ) : (
    <span className="text-orange-300">"{value}"</span>
  );

  return (
    <div>
      <span className="text-purple-400">"{name}"</span>
      <span className="text-gray-300">: </span>
      {valueContent}
      {!isLast && <span className="text-gray-300">,</span>}
    </div>
  );
}

export function JsonNested({ name, children, isLast = false }) {
  return (
    <>
      <div>
        <span className="text-purple-400">"{name}"</span>
        <span className="text-gray-300">: {"{"}</span>
      </div>
      <div className="ml-4">{children}</div>
      <div className="text-gray-300">{"}"}{ !isLast && ","}</div>
    </>
  );
}

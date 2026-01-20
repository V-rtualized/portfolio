const colorClasses = {
  green: 'text-green-400',
  blue: 'text-blue-400',
  purple: 'text-purple-400',
  yellow: 'text-yellow-400',
};

export default function StatCard({ value, label, color = 'green', wide = false }) {
  if (wide) {
    return (
      <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 flex items-center justify-center">
        <span className={`text-3xl font-bold ${colorClasses[color]}`}>{value}</span>
        <span className="text-gray-500 text-lg ml-3">{label}</span>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 text-center">
      <div className={`text-3xl font-bold ${colorClasses[color]}`}>{value}</div>
      <div className="text-gray-500 text-sm">{label}</div>
    </div>
  );
}

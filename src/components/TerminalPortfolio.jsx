import { useState, useEffect } from 'react';

export default function TerminalPortfolio() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Connor Mills';

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
    return () => clearInterval(typing);
  }, []);

  useEffect(() => {
    const cursor = setInterval(() => setShowCursor(c => !c), 500);
    return () => clearInterval(cursor);
  }, []);

  const projects = [
    {
      name: 'balatro-multiplayer',
      description: 'Multiplayer mod for GOTY nominee Balatro',
      stars: '100k+ users',
      tech: ['lua', 'typescript', 'aws', 'tcp']
    },
    {
      name: 'panodle',
      description: 'Full-stack web game with real-time sync',
      stars: 'live',
      tech: ['react', 'supabase', 'postgresql']
    },
    {
      name: 'homelab',
      description: 'Self-hosted Linux server infrastructure',
      stars: 'active',
      tech: ['linux', 'nginx', 'docker', 'ssh']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-mono p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
            <span className="text-green-500">~</span>
            <span>whoami</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-400">
            {typedText}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>_</span>
          </h1>
          <p className="text-gray-400 mt-4 text-lg">
            software developer <span className="text-gray-600">@</span> victoria, bc
          </p>
        </header>

        {/* Quick Info */}
        <section className="mb-12">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
            <span className="text-green-500">~</span>
            <span>cat info.json</span>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 text-sm font-mono">
            <div className="text-gray-300">{"{"}</div>
            <div className="ml-4">
              <span className="text-purple-400">"email"</span>
              <span className="text-gray-300">: </span>
              <a href="mailto:connor@virtualized.dev" className="text-green-400 hover:underline">"connor@virtualized.dev"</a>
              <span className="text-gray-300">,</span>
            </div>
            <div className="ml-4">
              <span className="text-purple-400">"education"</span>
              <span className="text-gray-300">: </span>
              <span className="text-orange-300">"BSc Computer Science, UVic '25"</span>
              <span className="text-gray-300">,</span>
            </div>
            <div className="ml-4">
              <span className="text-purple-400">"status"</span>
              <span className="text-gray-300">: </span>
              <span className="text-orange-300">"Open to Work"</span>
              <span className="text-gray-300">,</span>
            </div>
            <div className="ml-4">
              <span className="text-purple-400">"links"</span>
              <span className="text-gray-300">: {"{"}</span>
            </div>
            <div className="ml-8">
              <span className="text-purple-400">"github"</span>
              <span className="text-gray-300">: </span>
              <a href="https://github.com/V-rtualized/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">"github.com/V-rtualized"</a>
              <span className="text-gray-300">,</span>
            </div>
            <div className="ml-8">
              <span className="text-purple-400">"linkedin"</span>
              <span className="text-gray-300">: </span>
              <a href="https://www.linkedin.com/in/connor-mills-14147813b/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">"linkedin.com/in/connor-mills-14147813b"</a>
            </div>
            <div className="ml-4 text-gray-300">{"}"}</div>
            <div className="text-gray-300">{"}"}</div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="mb-12">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
            <span className="text-green-500">~</span>
            <span>fastfetch</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 text-center">
              <div className="text-3xl font-bold text-green-400">100k+</div>
              <div className="text-gray-500 text-sm">users reached</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 text-center">
              <div className="text-3xl font-bold text-blue-400">4.5k</div>
              <div className="text-gray-500 text-sm">peak DAU</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 text-center">
              <div className="text-3xl font-bold text-purple-400">1.4k</div>
              <div className="text-gray-500 text-sm">peak concurrent</div>
            </div>
          </div>
          <div className="mt-3 text-sm text-gray-500 text-center">
            stats from the project I founded and own, <a href="https://github.com/Virtualized/balatro-multiplayer" className="text-green-400 hover:underline">balatro-multiplayer</a>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
            <span className="text-green-500">~</span>
            <span>ls projects/</span>
          </div>
          <div className="space-y-3">
            {projects.map((project, i) => (
              <div 
                key={i}
                className="bg-gray-900 rounded-lg p-4 border border-gray-800 hover:border-green-800 transition cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">📁</span>
                    <span className="text-green-400 group-hover:underline">{project.name}/</span>
                  </div>
                  <span className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded">
                    {project.stars}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-3 ml-6">{project.description}</p>
                <div className="flex gap-2 ml-6">
                  {project.tech.map((t, j) => (
                    <span key={j} className="text-xs px-2 py-1 bg-gray-800 text-gray-500 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
            <span className="text-green-500">~</span>
            <span>cat skills.txt</span>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="text-gray-500 mb-2"># languages</div>
                <div className="text-gray-300">python</div>
                <div className="text-gray-300">typescript</div>
                <div className="text-gray-300">c/c++</div>
                <div className="text-gray-300">lua</div>
                <div className="text-gray-300">sql</div>
              </div>
              <div>
                <div className="text-gray-500 mb-2"># frontend</div>
                <div className="text-gray-300">react</div>
                <div className="text-gray-300">react native</div>
                <div className="text-gray-300">html/css</div>
                <div className="text-gray-300">javascript</div>
              </div>
              <div>
                <div className="text-gray-500 mb-2"># backend</div>
                <div className="text-gray-300">node.js</div>
                <div className="text-gray-300">postgresql</div>
                <div className="text-gray-300">supabase</div>
                <div className="text-gray-300">nginx</div>
              </div>
              <div>
                <div className="text-gray-500 mb-2"># devops</div>
                <div className="text-gray-300">aws</div>
                <div className="text-gray-300">docker</div>
                <div className="text-gray-300">linux</div>
                <div className="text-gray-300">git</div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="mb-12">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
            <span className="text-green-500">~</span>
            <span>git log --oneline career</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex gap-4">
              <span className="text-yellow-600 font-mono">2024</span>
              <span className="text-gray-400">BSc Computer Science · University of Victoria</span>
            </div>
            <div className="flex gap-4">
              <span className="text-yellow-600 font-mono">2022</span>
              <span className="text-gray-400">Software Developer & IT · TIPS Personnel</span>
            </div>
            <div className="flex gap-4">
              <span className="text-yellow-600 font-mono">2022</span>
              <span className="text-gray-400">Software Developer · Fly and Fetch</span>
            </div>
            <div className="flex gap-4">
              <span className="text-yellow-600 font-mono">2021</span>
              <span className="text-gray-400">Chief Developer · Jikoo</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-600 text-sm py-8 border-t border-gray-800">
          <div className="text-green-400">connor@virtualized.dev</div>
        </footer>
      </div>
    </div>
  );
}

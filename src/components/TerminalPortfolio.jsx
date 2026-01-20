import { useState, useEffect } from 'react';
import Command from './Command';
import { JsonBlock, JsonProperty, JsonNested } from './JsonBlock';
import StatCard from './StatCard';
import ProjectCard from './ProjectCard';
import TimelineEntry from './TimelineEntry';

export default function TerminalPortfolio() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [expandedEntry, setExpandedEntry] = useState(null);
  const [showHint, setShowHint] = useState(true);
  const fullText = 'Connor Mills';

  const handleEntryToggle = (index) => {
    setExpandedEntry(expandedEntry === index ? null : index);
    setShowHint(false);
  };

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
      description: 'I founded and maintain the Multiplayer mod for game of the year nominee Balatro',
      tech: ['lua', 'typescript', 'aws', 'tcp'],
      href: 'https://github.com/Balatro-Multiplayer/BalatroMultiplayer'
    },
    {
      name: 'panodle',
      description: 'I created a full-stack web game using a database, authentication, and cookies for data management',
      tech: ['react', 'supabase', 'postgresql'],
      href: 'https://github.com/V-rtualized/panodle2'
    },
    {
      name: 'homelab',
      description: 'I regularly use and maintain various services on a self-hosted Linux server for myself, friends, and family. Both this website and the Panodle project above run on this server',
      tech: ['linux', 'nginx', 'docker', 'ssh'],
      icon: 'server'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-mono p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Command command="whoami" as="header">
          <h1 className="text-4xl md:text-5xl font-bold text-green-400">
            {typedText}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>_</span>
          </h1>
          <p className="text-gray-400 mt-4 text-lg">
            software developer <span className="text-gray-600">@</span> victoria, bc
          </p>
        </Command>

        {/* Quick Info */}
        <Command command="cat info.json">
          <JsonBlock>
            <JsonProperty name="email" value="connor@virtualized.dev" href="mailto:connor@virtualized.dev" />
            <JsonProperty name="education" value="BSc Computer Science, UVic '25" />
            <JsonProperty name="status" value="Open to Work" />
            <JsonNested name="links" isLast>
              <JsonProperty name="github" value="github.com/V-rtualized" href="https://github.com/V-rtualized/" />
              <JsonProperty name="linkedin" value="linkedin.com/in/connor-mills-14147813b" href="https://www.linkedin.com/in/connor-mills-14147813b/" isLast />
            </JsonNested>
          </JsonBlock>
        </Command>

        {/* Stats Banner */}
        <Command command="fastfetch">
          <StatCard value="3+" label="years experience as a full stack web developer" color="yellow" wide />
          <div className="mt-4 grid grid-cols-3 gap-4">
            <StatCard value="100k+" label="users reached*" color="green" />
            <StatCard value="4.5k" label="peak DAU*" color="blue" />
            <StatCard value="1.4k" label="peak concurrent*" color="purple" />
          </div>
          <div className="mt-3 text-sm text-gray-500 text-center">
            *stats from the project I founded and own, <a href="https://github.com/Balatro-Multiplayer/BalatroMultiplayer" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">balatro-multiplayer</a>
          </div>
        </Command>

        {/* Experience Timeline */}
        <Command command="history | grep software development">
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-3">
              <TimelineEntry
                years="2020-2025"
                description="BSc Computer Science · University of Victoria"
                details={[
                  'Emphasized practical software engineering: Human Computer Interaction, Requirements Engineering, and Software Development Methods.',
                  'Studied database design, network protocols, and cryptography.',
                  'Additional coursework in computer graphics, compilers, and quantum algorithms.'
                ]}
                expanded={expandedEntry === 0}
                onToggle={() => handleEntryToggle(0)}
              />
              {showHint && (
                <span className="text-xs italic whitespace-nowrap animate-hint">
                  {"<-- click to learn more"}
                </span>
              )}
            </div>
            <TimelineEntry
              years="2022-2024"
              description="Software Developer & IT · TIPS Personnel"
              details={[
                'Built web and mobile applications from non-technical specs, owning projects from requirements through deployment.',
                'Architected cloud infrastructure for scalability; migrated legacy databases to PostgreSQL.'
              ]}
              expanded={expandedEntry === 1}
              onToggle={() => handleEntryToggle(1)}
            />
            <TimelineEntry
              years="2022-2022"
              description="Software Developer · Fly and Fetch"
              details={[
                'Developed React/Node.js applications in a Docker-based monorepo with fast Agile iteration cycles.',
                'Collaborated with small team to ship MVPs for new business concepts.'
              ]}
              expanded={expandedEntry === 2}
              onToggle={() => handleEntryToggle(2)}
            />
            <TimelineEntry
              years="2021-2022"
              description="Chief Developer · Jikoo"
              details={[
                'Led development of React Native mobile app with cloud backend, translating non-technical requirements into scalable architecture.'
              ]}
              expanded={expandedEntry === 3}
              onToggle={() => handleEntryToggle(3)}
            />
            <TimelineEntry
              years="2020-2021"
              description="Project Lead · Popular"
              details={[
                'Led a team of developers to build and ship a social media web scraping pipeline.'
              ]}
              expanded={expandedEntry === 4}
              onToggle={() => handleEntryToggle(4)}
            />
          </div>
        </Command>

        {/* Projects */}
        <Command command="ls projects/">
          <div className="space-y-3">
            {projects.map((project, i) => (
              <ProjectCard
                key={i}
                name={project.name}
                description={project.description}
                tech={project.tech}
                href={project.href}
                icon={project.icon}
              />
            ))}
          </div>
        </Command>

        {/* Footer */}
        <footer className="text-center text-gray-600 text-sm py-8 border-t border-gray-800">
          <div className="text-green-400">connor@virtualized.dev</div>
        </footer>
      </div>
    </div>
  );
}

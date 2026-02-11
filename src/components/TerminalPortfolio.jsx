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
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatCard value="200k+" label="users reached*" color="green" />
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
            <div className="flex items-center gap-3 flex-wrap">
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
                <>
                  <span className="text-xs italic animate-hint hidden sm:inline">
                    {"<-- click to learn more"}
                  </span>
                  <span className="text-xs italic animate-hint sm:hidden">
                    {"^ tap to expand"}
                  </span>
                </>
              )}
            </div>
            <TimelineEntry
              years="2022-2024"
              description="Software Developer & IT · TIPS Personnel"
              details={[
                'Led migration from monolithic architecture to microservices, modernizing the web dashboard and enabling faster feature development cycles.',
                'Developed a companion mobile application in React Native that interfaces with the modernized backend and database.',
                'Redesigned database layer, migrating from legacy SQL to PostgreSQL with improved schema design.',
                'Collaborated with non-technical stakeholders to translate business requirements into technical specifications.'
              ]}
              expanded={expandedEntry === 1}
              onToggle={() => handleEntryToggle(1)}
            />
            <TimelineEntry
              years="2022-2022"
              description="Software Developer · Fly and Fetch"
              details={[
                'Built web applications in React and Node.js within a monorepo and Docker-based development environment.',
                'Excelled in a fast-paced, iterative development environment leveraging Agile methodologies.',
                'Collaborated with a small team to construct modern software for new business concepts.'
              ]}
              expanded={expandedEntry === 2}
              onToggle={() => handleEntryToggle(2)}
            />
            <TimelineEntry
              years="2021-2022"
              description="Chief Developer · Jikoo"
              details={[
                'Built mobile applications using React Native and cloud technologies.',
                'Collaborated with non-technical team members to efficiently design and develop scalable software.'
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

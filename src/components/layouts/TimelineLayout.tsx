import { ArrowRight } from "lucide-react";

interface ContentSection {
  title: string;
  subtitle: string;
  heading: string;
  bullets: string[];
  color: string;
  borderColor: string;
}

interface TimelineLayoutProps {
  leftSection: ContentSection;
  rightSection: ContentSection;
  setLeftSection: (section: ContentSection) => void;
  setRightSection: (section: ContentSection) => void;
  isEditing: boolean;
}

export function TimelineLayout({
  leftSection,
  rightSection,
  setLeftSection,
  setRightSection,
  isEditing
}: TimelineLayoutProps) {
  return (
    <div className="flex-1 px-12 py-8">
      <div className="flex items-start gap-6">
        {/* Left Section */}
        <div className="flex-1">
          <div className={`border-4 ${leftSection.borderColor} rounded-2xl p-6`}>
            {isEditing ? (
              <input
                type="text"
                value={leftSection.title}
                onChange={(e) => setLeftSection({...leftSection, title: e.target.value})}
                className={`border-2 border-blue-400 px-2 py-1 rounded ${leftSection.color} text-3xl`}
              />
            ) : (
              <h2 className={`${leftSection.color} text-3xl`}>{leftSection.title}</h2>
            )}
            
            {isEditing ? (
              <input
                type="text"
                value={leftSection.subtitle}
                onChange={(e) => setLeftSection({...leftSection, subtitle: e.target.value})}
                className="w-full border-2 border-blue-400 px-2 py-1 rounded mt-2 italic text-gray-700 text-2xl"
              />
            ) : (
              <p className="mt-2 italic text-gray-700 text-2xl">{leftSection.subtitle}</p>
            )}

            {isEditing ? (
              <input
                type="text"
                value={leftSection.heading}
                onChange={(e) => setLeftSection({...leftSection, heading: e.target.value})}
                className="w-full border-2 border-blue-400 px-2 py-1 rounded mt-4 text-2xl"
              />
            ) : (
              <h3 className="mt-4 text-black text-2xl">{leftSection.heading}</h3>
            )}

            <ul className="mt-3 space-y-2">
              {leftSection.bullets.slice(0, 4).map((bullet, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-black mt-1 text-2xl">•</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={bullet}
                      onChange={(e) => {
                        const newBullets = [...leftSection.bullets];
                        newBullets[index] = e.target.value;
                        setLeftSection({...leftSection, bullets: newBullets});
                      }}
                      className="flex-1 border-2 border-blue-400 px-2 py-1 rounded text-gray-800 text-2xl"
                    />
                  ) : (
                    <span className="text-gray-800 text-2xl">{bullet}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Arrow Connector */}
        <div className="flex items-center pt-20">
          <ArrowRight className="w-12 h-12 text-gray-400" strokeWidth={2.5} />
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <div className={`border-4 ${rightSection.borderColor} rounded-2xl p-6`}>
            {isEditing ? (
              <input
                type="text"
                value={rightSection.title}
                onChange={(e) => setRightSection({...rightSection, title: e.target.value})}
                className={`border-2 border-blue-400 px-2 py-1 rounded ${rightSection.color} text-3xl`}
              />
            ) : (
              <h2 className={`${rightSection.color} text-3xl`}>{rightSection.title}</h2>
            )}
            
            {isEditing ? (
              <input
                type="text"
                value={rightSection.subtitle}
                onChange={(e) => setRightSection({...rightSection, subtitle: e.target.value})}
                className="w-full border-2 border-blue-400 px-2 py-1 rounded mt-2 italic text-gray-700 text-2xl"
              />
            ) : (
              <p className="mt-2 italic text-gray-700 text-2xl">{rightSection.subtitle}</p>
            )}

            {isEditing ? (
              <input
                type="text"
                value={rightSection.heading}
                onChange={(e) => setRightSection({...rightSection, heading: e.target.value})}
                className="w-full border-2 border-blue-400 px-2 py-1 rounded mt-4 text-2xl"
              />
            ) : (
              <h3 className="mt-4 text-black text-2xl">{rightSection.heading}</h3>
            )}

            <ul className="mt-3 space-y-2">
              {rightSection.bullets.slice(0, 4).map((bullet, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-black mt-1 text-2xl">•</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={bullet}
                      onChange={(e) => {
                        const newBullets = [...rightSection.bullets];
                        newBullets[index] = e.target.value;
                        setRightSection({...rightSection, bullets: newBullets});
                      }}
                      className="flex-1 border-2 border-blue-400 px-2 py-1 rounded text-gray-800 text-2xl"
                    />
                  ) : (
                    <span className="text-gray-800 text-2xl">{bullet}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from "react";
import { ContentSection } from "../SlideTemplate";

interface DetailedRoadmapLayoutProps {
  leftSection: ContentSection;
  rightSection: ContentSection;
  setLeftSection: (section: ContentSection) => void;
  setRightSection: (section: ContentSection) => void;
  isEditing: boolean;
}

interface Topic {
  number: string;
  title: string;
  yield: string;
  yieldColor: string;
}

export function DetailedRoadmapLayout({
  leftSection,
  rightSection,
  isEditing
}: DetailedRoadmapLayoutProps) {
  const [mainTitle, setMainTitle] = useState("Roadmap: Part 1");
  
  const [hour1Title, setHour1Title] = useState("HOUR 1: Neuroanatomy & Brain Structure");
  
  const [hour2Title, setHour2Title] = useState("HOUR 2: Brain Regions & Clinical Syndromes");
  
  const [hour1Topics, setHour1Topics] = useState<Topic[]>([
    { number: "1.", title: "Neuroimaging & Neural Communication", yield: "MEDIUM-YIELD", yieldColor: "bg-orange-100 text-orange-700" },
    { number: "2.", title: "Neurotransmitters & Termination", yield: "HIGH-YIELD", yieldColor: "bg-red-100 text-red-700" },
    { number: "3.", title: "Pharmacology & Autonomic System", yield: "HIGH-YIELD", yieldColor: "bg-red-100 text-red-700" },
    { number: "4.", title: "Brainstem & Arousal Systems", yield: "HIGH-YIELD", yieldColor: "bg-red-100 text-red-700" }
  ]);
  
  const [hour2Topics, setHour2Topics] = useState<Topic[]>([
    { number: "1.", title: "Mesolimbic Pathway & Schizophrenia", yield: "HIGH-YIELD", yieldColor: "bg-red-100 text-red-700" },
    { number: "2.", title: "Antipsychotic Complications", yield: "HIGH-YIELD", yieldColor: "bg-red-100 text-red-700" },
    { number: "3.", title: "ADHD & Prefrontal Cortex", yield: "HIGH-YIELD", yieldColor: "bg-red-100 text-red-700" },
    { number: "4.", title: "PTSD & OCD Neural Circuits", yield: "HIGH-YIELD", yieldColor: "bg-red-100 text-red-700" }
  ]);
  
  const [breakText, setBreakText] = useState("10-minute break");
  const [wrapUpText, setWrapUpText] = useState("Q&A Session & Wrap-Up");
  
  const [copyright, setCopyright] = useState("© 2025 PrepJet, Academic Licensure Preparation and Education Service, LLC | All Rights Reserved");

  return (
    <div className="h-full flex flex-col bg-gray-100">
      {/* Purple Top Bar */}
      <div className="bg-purple-600 h-1 w-full"></div>
      
      <div className="flex-1 px-12 py-8 flex flex-col">
        {/* Main Title */}
        <div className="text-center mb-8">
          {isEditing ? (
            <input
              type="text"
              value={mainTitle}
              onChange={(e) => setMainTitle(e.target.value)}
              className="border-2 border-blue-400 px-4 py-2 rounded text-gray-900 text-5xl w-full text-center"
            />
          ) : (
            <h1 className="text-gray-900 text-5xl">{mainTitle}</h1>
          )}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-6 flex-1">
          {/* Hour 1 Column */}
          <div className="flex flex-col">
            {/* Hour 1 Header */}
            <div className="bg-green-500 text-white rounded-t-lg p-4 mb-4">
              {isEditing ? (
                  <input
                    type="text"
                    value={hour1Title}
                    onChange={(e) => setHour1Title(e.target.value)}
                    className="border-2 border-blue-400 px-2 py-1 rounded text-white bg-green-600 w-full text-2xl"
                  />
              ) : (
                  <h2 className="text-2xl">{hour1Title}</h2>
              )}
            </div>

            {/* Hour 1 Topics */}
            <div className="space-y-4">
              {hour1Topics.map((topic, idx) => (
                <div key={idx} className="bg-white rounded p-4 shadow-sm border-l-4 border-orange-400">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      {isEditing ? (
                        <input
                          type="text"
                          value={`${topic.number} ${topic.title}`}
                          onChange={(e) => {
                            const newTopics = [...hour1Topics];
                            const parts = e.target.value.split(' ');
                            newTopics[idx] = {
                              ...topic,
                              number: parts[0],
                              title: parts.slice(1).join(' ')
                            };
                            setHour1Topics(newTopics);
                          }}
                          className="border-2 border-blue-400 px-2 py-1 rounded text-gray-900 w-full text-xl"
                        />
                      ) : (
                        <h3 className="text-gray-900 text-xl">
                          <span>{topic.number}</span> <span>{topic.title}</span>
                        </h3>
                      )}
                    </div>
                    <div className={`ml-2 px-3 py-1 rounded text-sm ${topic.yieldColor}`}>
                      {topic.yield}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hour 2 Column */}
          <div className="flex flex-col">
            {/* Hour 2 Header */}
            <div className="bg-green-500 text-white rounded-t-lg p-4 mb-4">
              {isEditing ? (
                  <input
                    type="text"
                    value={hour2Title}
                    onChange={(e) => setHour2Title(e.target.value)}
                    className="border-2 border-blue-400 px-2 py-1 rounded text-white bg-green-600 w-full text-2xl"
                  />
              ) : (
                  <h2 className="text-2xl">{hour2Title}</h2>
              )}
            </div>

            {/* Hour 2 Topics */}
            <div className="space-y-4">
              {hour2Topics.map((topic, idx) => (
                <div key={idx} className="bg-white rounded p-4 shadow-sm border-l-4 border-orange-400">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      {isEditing ? (
                        <input
                          type="text"
                          value={`${topic.number} ${topic.title}`}
                          onChange={(e) => {
                            const newTopics = [...hour2Topics];
                            const parts = e.target.value.split(' ');
                            newTopics[idx] = {
                              ...topic,
                              number: parts[0],
                              title: parts.slice(1).join(' ')
                            };
                            setHour2Topics(newTopics);
                          }}
                          className="border-2 border-blue-400 px-2 py-1 rounded text-gray-900 w-full text-xl"
                        />
                      ) : (
                        <h3 className="text-gray-900 text-xl">
                          <span>{topic.number}</span> <span>{topic.title}</span>
                        </h3>
                      )}
                    </div>
                    <div className={`ml-2 px-3 py-1 rounded text-sm ${topic.yieldColor}`}>
                      {topic.yield}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Break and Wrap-Up Row - Skinny Rectangle */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg mt-1 mb-6 py-2 px-6 flex justify-between items-center">
          <div>
            {isEditing ? (
              <input
                type="text"
                value={breakText}
                onChange={(e) => setBreakText(e.target.value)}
                className="border-2 border-blue-400 px-2 py-1 rounded text-gray-500 italic text-xl"
              />
            ) : (
              <p className="text-gray-500 italic text-xl">{breakText}</p>
            )}
          </div>
          <div>
            {isEditing ? (
              <input
                type="text"
                value={wrapUpText}
                onChange={(e) => setWrapUpText(e.target.value)}
                className="border-2 border-blue-400 px-2 py-1 rounded text-purple-700 text-xl"
              />
            ) : (
              <p className="text-purple-700 text-xl">{wrapUpText}</p>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          {isEditing ? (
            <input
              type="text"
              value={copyright}
              onChange={(e) => setCopyright(e.target.value)}
              className="border-2 border-blue-400 px-2 py-1 rounded text-gray-500 text-sm w-full text-center"
            />
          ) : (
            <p className="text-gray-500 text-sm">{copyright}</p>
          )}
        </div>
      </div>
    </div>
  );
}
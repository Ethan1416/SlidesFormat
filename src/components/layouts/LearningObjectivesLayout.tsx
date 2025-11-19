import { useState } from "react";
import { ContentSection } from "../SlideTemplate";
import { Check } from "lucide-react";

interface LearningObjectivesLayoutProps {
  leftSection: ContentSection;
  rightSection: ContentSection;
  setLeftSection: (section: ContentSection) => void;
  setRightSection: (section: ContentSection) => void;
  isEditing: boolean;
}

export function LearningObjectivesLayout({
  leftSection,
  rightSection,
  isEditing
}: LearningObjectivesLayoutProps) {
  const [mainTitle, setMainTitle] = useState("Learning Objectives");
  const [subtitle, setSubtitle] = useState("What You'll Master in Part 1");
  
  const [objectives, setObjectives] = useState<string[]>([
    "Identify the neural substrates underlying different memory systems",
    "Distinguish between explicit/implicit and declarative/procedural memory types",
    "Explain how encoding, consolidation, and retrieval processes differ across systems",
    "Apply memory system models to clinical presentations of amnesia and dementia",
    "Analyze dissociations between memory types in neuropsychological assessments",
    "Synthesize research on age-related changes across multiple memory systems"
  ]);
  
  const [highYieldText, setHighYieldText] = useState("High-Yield: The Physiological Psychology domain covers 10-13% of the scored items on your EPPP");
  
  const [copyright, setCopyright] = useState("© 2025 PrepJet, Academic Licensure Preparation and Education Service, LLC | All Rights Reserved");

  return (
    <div className="h-full flex flex-col bg-gray-100">
      {/* Purple Top Bar */}
      <div className="bg-purple-600 h-1 w-full"></div>
      
      <div className="flex-1 px-16 py-12 flex flex-col">
        {/* Main Title */}
        <div className="text-center mb-3">
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

        {/* Subtitle */}
        <div className="text-center mb-10">
          {isEditing ? (
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="border-2 border-blue-400 px-4 py-2 rounded text-purple-600 text-3xl w-full text-center"
            />
          ) : (
            <p className="text-purple-600 text-3xl">{subtitle}</p>
          )}
        </div>

        {/* Objectives List */}
        <div className="space-y-4 mb-10 max-w-4xl mx-auto w-full">
          {objectives.map((objective, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                {isEditing ? (
                  <input
                    type="text"
                    value={objective}
                    onChange={(e) => {
                      const newObjectives = [...objectives];
                      newObjectives[idx] = e.target.value;
                      setObjectives(newObjectives);
                    }}
                    className="border-2 border-blue-400 px-2 py-1 rounded text-gray-900 text-2xl w-full"
                  />
                ) : (
                  <p className="text-gray-900 text-2xl">
                    <span className="font-bold">{objective.split(' ')[0]}</span> {objective.split(' ').slice(1).join(' ')}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* High Yield Box */}
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 mb-8 w-full">
          <div className="flex items-start gap-3">
            <span className="text-3xl">📊</span>
            {isEditing ? (
              <textarea
                value={highYieldText}
                onChange={(e) => setHighYieldText(e.target.value)}
                className="border-2 border-blue-400 px-2 py-1 rounded text-gray-800 w-full text-xl"
                rows={2}
              />
            ) : (
              <p className="text-gray-800 text-xl">
                <span className="font-bold">High-Yield:</span> {highYieldText.replace('High-Yield: ', '')}
              </p>
            )}
          </div>
        </div>

        {/* Spacer to push copyright to bottom */}
        <div className="flex-1"></div>

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
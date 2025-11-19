import { useState } from "react";
import { ContentSection } from "../SlideTemplate";

interface JourneyOverviewLayoutProps {
  leftSection: ContentSection;
  rightSection: ContentSection;
  setLeftSection: (section: ContentSection) => void;
  setRightSection: (section: ContentSection) => void;
  isEditing: boolean;
}

export function JourneyOverviewLayout({
  leftSection,
  rightSection,
  isEditing
}: JourneyOverviewLayoutProps) {
  const [mainTitle, setMainTitle] = useState("Your 2.5-Hour Journey");
  const [subtitle, setSubtitle] = useState("First Half: Physiological Psychology & Psychopharmacology");
  
  const [hour1Label, setHour1Label] = useState("Hour 1");
  const [hour1Title, setHour1Title] = useState("Neuroanatomy & Brain Structure");
  const [hour1Subtitle, setHour1Subtitle] = useState("Major brain regions, neurons, neurotransmitter systems");
  
  const [breakText, setBreakText] = useState("10-min break");
  
  const [hour2Label, setHour2Label] = useState("Hour 2");
  const [hour2Title, setHour2Title] = useState("Psychopharmacology Foundations");
  const [hour2Subtitle, setHour2Subtitle] = useState("Drug mechanisms, major medication classes, clinical applications");
  
  const [wrapUpText, setWrapUpText] = useState("Wrap-Up");
  const [qnaText, setQnaText] = useState("Q&A Session");
  
  const [copyright, setCopyright] = useState("© 2025 PrepJet, Academic Licensure Preparation and Education Service, LLC | All Rights Reserved");

  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Purple Top Bar */}
      <div className="bg-purple-600 h-1 w-full"></div>
      
      <div className="flex-1 px-16 py-8 flex flex-col">
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
        <div className="text-center mb-8">
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

        {/* Hour 1 */}
        <div className="bg-green-50 border-l-4 border-green-600 rounded p-5 mb-4">
          <div className="mb-2">
            {isEditing ? (
              <input
                type="text"
                value={hour1Label}
                onChange={(e) => setHour1Label(e.target.value)}
                className="border-2 border-blue-400 px-2 py-1 rounded text-green-600 text-2xl"
              />
            ) : (
              <p className="text-green-600 text-2xl">{hour1Label}</p>
            )}
          </div>
          <div className="mb-1">
            {isEditing ? (
              <input
                type="text"
                value={hour1Title}
                onChange={(e) => setHour1Title(e.target.value)}
                className="border-2 border-blue-400 px-2 py-1 rounded text-gray-900 text-3xl w-full"
              />
            ) : (
              <h2 className="text-gray-900 text-3xl">{hour1Title}</h2>
            )}
          </div>
          <div>
            {isEditing ? (
              <input
                type="text"
                value={hour1Subtitle}
                onChange={(e) => setHour1Subtitle(e.target.value)}
                className="border-2 border-blue-400 px-2 py-1 rounded text-gray-600 text-xl w-full"
              />
            ) : (
              <p className="text-gray-600 text-xl">{hour1Subtitle}</p>
            )}
          </div>
        </div>

        {/* Break */}
        <div className="text-center mb-4">
          {isEditing ? (
            <input
              type="text"
              value={breakText}
              onChange={(e) => setBreakText(e.target.value)}
              className="border-2 border-blue-400 px-2 py-1 rounded text-gray-400 italic text-xl text-center"
            />
          ) : (
            <p className="text-gray-400 italic text-xl">{breakText}</p>
          )}
        </div>

        {/* Hour 2 */}
        <div className="bg-green-50 border-l-4 border-green-600 rounded p-5 mb-6">
          <div className="mb-2">
            {isEditing ? (
              <input
                type="text"
                value={hour2Label}
                onChange={(e) => setHour2Label(e.target.value)}
                className="border-2 border-blue-400 px-2 py-1 rounded text-green-600 text-2xl"
              />
            ) : (
              <p className="text-green-600 text-2xl">{hour2Label}</p>
            )}
          </div>
          <div className="mb-1">
            {isEditing ? (
              <input
                type="text"
                value={hour2Title}
                onChange={(e) => setHour2Title(e.target.value)}
                className="border-2 border-blue-400 px-2 py-1 rounded text-gray-900 text-3xl w-full"
              />
            ) : (
              <h2 className="text-gray-900 text-3xl">{hour2Title}</h2>
            )}
          </div>
          <div>
            {isEditing ? (
              <input
                type="text"
                value={hour2Subtitle}
                onChange={(e) => setHour2Subtitle(e.target.value)}
                className="border-2 border-blue-400 px-2 py-1 rounded text-gray-600 text-xl w-full"
              />
            ) : (
              <p className="text-gray-600 text-xl">{hour2Subtitle}</p>
            )}
          </div>
        </div>

        {/* Wrap-Up / Q&A Bar */}
        <div className="bg-purple-100 rounded p-3 mb-6 flex justify-between items-center">
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
          <div>
            {isEditing ? (
              <input
                type="text"
                value={qnaText}
                onChange={(e) => setQnaText(e.target.value)}
                className="border-2 border-blue-400 px-2 py-1 rounded text-purple-700 text-xl"
              />
            ) : (
              <p className="text-purple-700 text-xl">{qnaText}</p>
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

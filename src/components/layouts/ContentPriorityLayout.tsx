import { useState } from "react";
import { ContentSection } from "../SlideTemplate";

interface ContentPriorityLayoutProps {
  leftSection: ContentSection;
  rightSection: ContentSection;
  setLeftSection: (section: ContentSection) => void;
  setRightSection: (section: ContentSection) => void;
  isEditing: boolean;
}

export function ContentPriorityLayout({
  leftSection,
  rightSection,
  isEditing
}: ContentPriorityLayoutProps) {
  const [mainTitle, setMainTitle] = useState("Content Priority Key");
  const [subtitle, setSubtitle] = useState("How to Focus Your Study Time");
  
  // High-Yield Section
  const [highYieldTitle, setHighYieldTitle] = useState("HIGH-YIELD");
  const [highYieldBadge, setHighYieldBadge] = useState("60% OF TIME");
  const [highYieldLine1, setHighYieldLine1] = useState('I\'ll say: "This is high-yield!" or "The EPPP loves this"');
  const [highYieldLine2, setHighYieldLine2] = useState("→ Take detailed notes, this appears frequently on exams");
  const [highYieldLine3, setHighYieldLine3] = useState("");
  
  // Medium-Yield Section
  const [mediumYieldTitle, setMediumYieldTitle] = useState("MEDIUM-YIELD");
  const [mediumYieldBadge, setMediumYieldBadge] = useState("30% OF TIME");
  const [mediumYieldLine1, setMediumYieldLine1] = useState('I\'ll say: "Know this for recognition" or "Important for differentiation"');
  const [mediumYieldLine2, setMediumYieldLine2] = useState("→ Medium-yield, tested occasionally");
  const [mediumYieldLine3, setMediumYieldLine3] = useState("");
  
  // Low-Yield Section
  const [lowYieldTitle, setLowYieldTitle] = useState("LOW-YIELD");
  const [lowYieldBadge, setLowYieldBadge] = useState("10% OF TIME");
  const [lowYieldLine1, setLowYieldLine1] = useState('I\'ll say: "For awareness only" or "Rarely tested"');
  const [lowYieldLine2, setLowYieldLine2] = useState("→ Low-yield, brief awareness sufficient");
  const [lowYieldLine3, setLowYieldLine3] = useState("");
  
  const [copyright, setCopyright] = useState("© 2025 PrepJet, Academic Licensure Preparation and Education Service, LLC | All Rights Reserved");

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Purple Top Bar */}
      <div className="bg-purple-600 h-1 w-full"></div>
      
      <div className="flex-1 px-20 pt-3 pb-12 flex flex-col">
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

        {/* HIGH-YIELD Section */}
        <div className="bg-red-50 border-l-8 border-red-600 rounded-r-lg px-6 pt-6 pb-3">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-red-600 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            {isEditing ? (
              <input
                type="text"
                value={highYieldTitle}
                onChange={(e) => setHighYieldTitle(e.target.value)}
                className="border-2 border-blue-400 px-2 py-1 rounded text-gray-900 text-3xl"
              />
            ) : (
              <h2 className="text-gray-900 text-3xl">{highYieldTitle}</h2>
            )}
            {isEditing ? (
              <input
                type="text"
                value={highYieldBadge}
                onChange={(e) => setHighYieldBadge(e.target.value)}
                className="border-2 border-blue-400 px-2 py-1 rounded bg-red-600 text-white text-xl"
              />
            ) : (
              <div className="bg-red-600 text-white px-4 py-1 rounded text-xl">{highYieldBadge}</div>
            )}
          </div>
          <div className="space-y-2 ml-14">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={highYieldLine1}
                  onChange={(e) => setHighYieldLine1(e.target.value)}
                  className="border-2 border-blue-400 px-2 py-1 rounded text-gray-900 text-2xl w-full"
                />
                <input
                  type="text"
                  value={highYieldLine2}
                  onChange={(e) => setHighYieldLine2(e.target.value)}
                  className="border-2 border-blue-400 px-2 py-1 rounded text-gray-900 text-2xl w-full"
                />
                <input
                  type="text"
                  value={highYieldLine3}
                  onChange={(e) => setHighYieldLine3(e.target.value)}
                  className="border-2 border-blue-400 px-2 py-1 rounded text-gray-900 text-2xl w-full"
                />
              </>
            ) : (
              <>
                <p className="text-gray-900 text-2xl">{highYieldLine1}</p>
                <p className="text-gray-900 text-2xl">{highYieldLine2}</p>
                <p className="text-gray-900 text-2xl">{highYieldLine3}</p>
              </>
            )}
          </div>
        </div>

        {/* MEDIUM-YIELD Section */}
        <div className="bg-yellow-50 border-l-8 border-yellow-500 rounded-r-lg px-6 pt-6 pb-3">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-yellow-500 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            {isEditing ? (
              <input
                type="text"
                value={mediumYieldTitle}
                onChange={(e) => setMediumYieldTitle(e.target.value)}
                className="border-2 border-blue-400 px-2 py-1 rounded text-gray-900 text-3xl"
              />
            ) : (
              <h2 className="text-gray-900 text-3xl">{mediumYieldTitle}</h2>
            )}
            {isEditing ? (
              <input
                type="text"
                value={mediumYieldBadge}
                onChange={(e) => setMediumYieldBadge(e.target.value)}
                className="border-2 border-blue-400 px-2 py-1 rounded bg-yellow-600 text-white text-xl"
              />
            ) : (
              <div className="bg-yellow-600 text-white px-4 py-1 rounded text-xl">{mediumYieldBadge}</div>
            )}
          </div>
          <div className="space-y-2 ml-14">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={mediumYieldLine1}
                  onChange={(e) => setMediumYieldLine1(e.target.value)}
                  className="border-2 border-blue-400 px-2 py-1 rounded text-gray-900 text-2xl w-full"
                />
                <input
                  type="text"
                  value={mediumYieldLine2}
                  onChange={(e) => setMediumYieldLine2(e.target.value)}
                  className="border-2 border-blue-400 px-2 py-1 rounded text-gray-900 text-2xl w-full"
                />
                <input
                  type="text"
                  value={mediumYieldLine3}
                  onChange={(e) => setMediumYieldLine3(e.target.value)}
                  className="border-2 border-blue-400 px-2 py-1 rounded text-gray-900 text-2xl w-full"
                />
              </>
            ) : (
              <>
                <p className="text-gray-900 text-2xl">{mediumYieldLine1}</p>
                <p className="text-gray-900 text-2xl">{mediumYieldLine2}</p>
                <p className="text-gray-900 text-2xl">{mediumYieldLine3}</p>
              </>
            )}
          </div>
        </div>

        {/* LOW-YIELD Section */}
        <div className="bg-gray-100 border-l-8 border-gray-400 rounded-r-lg px-6 pt-6 pb-3">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gray-400 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
            </div>
            {isEditing ? (
              <input
                type="text"
                value={lowYieldTitle}
                onChange={(e) => setLowYieldTitle(e.target.value)}
                className="border-2 border-blue-400 px-2 py-1 rounded text-gray-900 text-3xl"
              />
            ) : (
              <h2 className="text-gray-900 text-3xl">{lowYieldTitle}</h2>
            )}
            {isEditing ? (
              <input
                type="text"
                value={lowYieldBadge}
                onChange={(e) => setLowYieldBadge(e.target.value)}
                className="border-2 border-blue-400 px-2 py-1 rounded bg-gray-500 text-white text-xl"
              />
            ) : (
              <div className="bg-gray-500 text-white px-4 py-1 rounded text-xl">{lowYieldBadge}</div>
            )}
          </div>
          <div className="space-y-2 ml-14">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={lowYieldLine1}
                  onChange={(e) => setLowYieldLine1(e.target.value)}
                  className="border-2 border-blue-400 px-2 py-1 rounded text-gray-900 text-2xl w-full"
                />
                <input
                  type="text"
                  value={lowYieldLine2}
                  onChange={(e) => setLowYieldLine2(e.target.value)}
                  className="border-2 border-blue-400 px-2 py-1 rounded text-gray-900 text-2xl w-full"
                />
                <input
                  type="text"
                  value={lowYieldLine3}
                  onChange={(e) => setLowYieldLine3(e.target.value)}
                  className="border-2 border-blue-400 px-2 py-1 rounded text-gray-900 text-2xl w-full"
                />
              </>
            ) : (
              <>
                <p className="text-gray-900 text-2xl">{lowYieldLine1}</p>
                <p className="text-gray-900 text-2xl">{lowYieldLine2}</p>
                <p className="text-gray-900 text-2xl">{lowYieldLine3}</p>
              </>
            )}
          </div>
        </div>

        {/* Spacer to push copyright to bottom */}
        <div className="flex-1"></div>

        {/* Copyright */}
        <div className="text-center mt-4">
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
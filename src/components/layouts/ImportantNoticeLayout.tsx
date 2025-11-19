import { useState } from "react";
import { ContentSection } from "../SlideTemplate";
import { AlertCircle } from "lucide-react";
import exampleImage from 'figma:asset/782d9e3b1b42f1b2a56ba12d9e556863e43f6160.png';

interface ImportantNoticeLayoutProps {
  leftSection: ContentSection;
  rightSection: ContentSection;
  setLeftSection: (section: ContentSection) => void;
  setRightSection: (section: ContentSection) => void;
  isEditing: boolean;
}

export function ImportantNoticeLayout({
  leftSection,
  rightSection,
  isEditing
}: ImportantNoticeLayoutProps) {
  const [warningText, setWarningText] = useState("CONTENT WARNING: This lecture contains clinical material including videos and case examples depicting neurological and psychological disorders that may be disturbing to some viewers. Viewer discretion is advised.");
  
  const [section1Title, setSection1Title] = useState("Recording Prohibited");
  const [section2Title, setSection2Title] = useState("Copyrighted Educational Materials");
  const [section3Title, setSection3Title] = useState("Protected Video Content");
  const [section4Title, setSection4Title] = useState("Legal and Ethical Responsibilities");
  const [section5Title, setSection5Title] = useState("What You May Do");
  
  const [acknowledgmentText, setAcknowledgmentText] = useState("By continuing to participate in this lecture, you acknowledge that you have read, understood, and agree to comply with these policies.");
  
  const [copyright, setCopyright] = useState("© 2025 PrepJet, Academic Licensure Preparation and Education Service, LLC | All Rights Reserved");

  return (
    <div className="h-full flex flex-col bg-gray-50 px-12 py-8">
      {/* Warning Box */}
      <div className="bg-red-600 text-white rounded-lg p-4 mb-6 flex items-start gap-3">
        <AlertCircle className="w-6 h-6 mt-1 flex-shrink-0" />
        {isEditing ? (
          <textarea
            value={warningText}
            onChange={(e) => setWarningText(e.target.value)}
            className="border-2 border-blue-400 px-2 py-1 rounded text-white bg-red-700 text-xl w-full"
            rows={2}
          />
        ) : (
          <p className="text-white text-xl leading-relaxed">{warningText}</p>
        )}
      </div>

      {/* Content Sections - Headers Only */}
      <div className="space-y-4 flex-1">
        {/* Section 1 - Red */}
        <div className="border-l-4 border-red-600 bg-white rounded p-4">
          {isEditing ? (
            <input
              type="text"
              value={section1Title}
              onChange={(e) => setSection1Title(e.target.value)}
              className="border-2 border-blue-400 px-2 py-1 rounded text-gray-900 text-2xl w-full"
            />
          ) : (
            <h3 className="text-gray-900 text-2xl">{section1Title}</h3>
          )}
        </div>

        {/* Section 2 - Orange */}
        <div className="border-l-4 border-orange-500 bg-white rounded p-4">
          {isEditing ? (
            <input
              type="text"
              value={section2Title}
              onChange={(e) => setSection2Title(e.target.value)}
              className="border-2 border-blue-400 px-2 py-1 rounded text-gray-900 text-2xl w-full"
            />
          ) : (
            <h3 className="text-gray-900 text-2xl">{section2Title}</h3>
          )}
        </div>

        {/* Section 3 - Yellow */}
        <div className="border-l-4 border-yellow-500 bg-white rounded p-4">
          {isEditing ? (
            <input
              type="text"
              value={section3Title}
              onChange={(e) => setSection3Title(e.target.value)}
              className="border-2 border-blue-400 px-2 py-1 rounded text-gray-900 text-2xl w-full"
            />
          ) : (
            <h3 className="text-gray-900 text-2xl">{section3Title}</h3>
          )}
        </div>

        {/* Section 4 - Blue */}
        <div className="border-l-4 border-blue-600 bg-white rounded p-4">
          {isEditing ? (
            <input
              type="text"
              value={section4Title}
              onChange={(e) => setSection4Title(e.target.value)}
              className="border-2 border-blue-400 px-2 py-1 rounded text-gray-900 text-2xl w-full"
            />
          ) : (
            <h3 className="text-gray-900 text-2xl">{section4Title}</h3>
          )}
        </div>

        {/* Section 5 - Green */}
        <div className="border-l-4 border-green-600 bg-white rounded p-4">
          {isEditing ? (
            <input
              type="text"
              value={section5Title}
              onChange={(e) => setSection5Title(e.target.value)}
              className="border-2 border-blue-400 px-2 py-1 rounded text-gray-900 text-2xl w-full"
            />
          ) : (
            <h3 className="text-gray-900 text-2xl">{section5Title}</h3>
          )}
        </div>
      </div>

      {/* Acknowledgment Box */}
      <div className="bg-purple-100 border border-purple-300 rounded-lg p-4 mt-4">
        {isEditing ? (
          <textarea
            value={acknowledgmentText}
            onChange={(e) => setAcknowledgmentText(e.target.value)}
            className="border-2 border-blue-400 px-2 py-1 rounded text-purple-800 text-xl w-full text-center"
            rows={2}
          />
        ) : (
          <p className="text-purple-800 text-xl text-center">{acknowledgmentText}</p>
        )}
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
  );
}
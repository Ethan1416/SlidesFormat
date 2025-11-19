import { useState } from "react";
import { ContentSection } from "../SlideTemplate";

interface TitleSlideLayoutProps {
  leftSection: ContentSection;
  rightSection: ContentSection;
  setLeftSection: (section: ContentSection) => void;
  setRightSection: (section: ContentSection) => void;
  isEditing: boolean;
}

export function TitleSlideLayout({
  leftSection,
  rightSection,
  isEditing
}: TitleSlideLayoutProps) {
  const [mainTitle, setMainTitle] = useState("Physiological Psychology and Psychopharmacology");
  const [subtitle, setSubtitle] = useState("First Half");
  const [sessionTitle, setSessionTitle] = useState("Session 1");
  const [duration, setDuration] = useState("Duration: 2.5 hours (including breaks & Q&A)");
  const [author, setAuthor] = useState("Ethan Hoffower");
  const [copyright, setCopyright] = useState("© 2025 PrepJet, Academic Licensure Preparation and Education Service, LLC | All Rights Reserved");

  return (
    <div className="h-full flex flex-col bg-gray-50 border-8 border-indigo-600">
      <div className="flex-1 flex flex-col items-center justify-center px-16 py-12">
        {/* Main Title */}
        <div className="text-center mb-8">
          {isEditing ? (
            <textarea
              value={mainTitle}
              onChange={(e) => setMainTitle(e.target.value)}
              className="border-2 border-blue-400 px-4 py-2 rounded text-gray-900 text-6xl w-full text-center resize-none"
              rows={2}
            />
          ) : (
            <h1 className="text-gray-900 text-6xl leading-tight">{mainTitle}</h1>
          )}
        </div>

        {/* Subtitle */}
        <div className="mb-6">
          {isEditing ? (
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="border-2 border-blue-400 px-4 py-2 rounded text-indigo-600 text-5xl text-center"
            />
          ) : (
            <h2 className="text-indigo-600 text-5xl">{subtitle}</h2>
          )}
        </div>

        {/* Decorative Line */}
        <div className="w-24 h-1 bg-indigo-600 mb-12"></div>

        {/* Session Title */}
        <div className="mb-3">
          {isEditing ? (
            <input
              type="text"
              value={sessionTitle}
              onChange={(e) => setSessionTitle(e.target.value)}
              className="border-2 border-blue-400 px-4 py-2 rounded text-gray-900 text-4xl text-center"
            />
          ) : (
            <h3 className="text-gray-900 text-4xl">{sessionTitle}</h3>
          )}
        </div>

        {/* Duration */}
        <div className="mb-12">
          {isEditing ? (
            <input
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="border-2 border-blue-400 px-4 py-2 rounded text-gray-500 italic text-2xl text-center"
            />
          ) : (
            <p className="text-gray-500 italic text-2xl">{duration}</p>
          )}
        </div>

        {/* Author */}
        <div className="mb-8">
          {isEditing ? (
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border-2 border-blue-400 px-4 py-2 rounded text-gray-900 text-3xl text-center"
            />
          ) : (
            <p className="text-gray-900 text-3xl">{author}</p>
          )}
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="pb-4 px-8">
        {isEditing ? (
          <input
            type="text"
            value={copyright}
            onChange={(e) => setCopyright(e.target.value)}
            className="border-2 border-blue-400 px-2 py-1 rounded text-gray-400 text-sm w-full text-center"
          />
        ) : (
          <p className="text-gray-400 text-center text-sm">{copyright}</p>
        )}
      </div>
    </div>
  );
}
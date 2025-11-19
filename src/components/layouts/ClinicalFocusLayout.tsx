import { useState } from "react";
import { ContentSection } from "../SlideTemplate";

interface ClinicalFocusLayoutProps {
  leftSection: ContentSection;
  rightSection: ContentSection;
  setLeftSection: (section: ContentSection) => void;
  setRightSection: (section: ContentSection) => void;
  isEditing: boolean;
}

export function ClinicalFocusLayout({
  leftSection,
  rightSection,
  isEditing
}: ClinicalFocusLayoutProps) {
  // Top section states
  const [declMemTitle, setDeclMemTitle] = useState("Declarative Memory");
  const [declMemSubtitle, setDeclMemSubtitle] = useState("Explicit Recall");
  const [declFeat1, setDeclFeat1] = useState("Conscious awareness");
  const [declFeat2, setDeclFeat2] = useState("Flexible, updatable");
  const [declFeat3, setDeclFeat3] = useState("Fast acquisition");
  
  const [procMemTitle, setProcMemTitle] = useState("Procedural Memory");
  const [procMemSubtitle, setProcMemSubtitle] = useState("Implicit Skills");
  const [procFeat1, setProcFeat1] = useState("Unconscious execution");
  const [procFeat2, setProcFeat2] = useState("Gradual acquisition");
  const [procFeat3, setProcFeat3] = useState("Resistant to forgetting");
  
  // Clinical section states
  const [declDamageTitle, setDeclDamageTitle] = useState("Declarative Damage");
  const [declClin1Label, setDeclClin1Label] = useState("Amnesia:");
  const [declClin1Text, setDeclClin1Text] = useState("Cannot form new memories");
  const [declClin2Label, setDeclClin2Label] = useState("Alzheimer's:");
  const [declClin2Text, setDeclClin2Text] = useState("Semantic knowledge loss");
  const [declClin3Label, setDeclClin3Label] = useState("Hippocampal:");
  const [declClin3Text, setDeclClin3Text] = useState("Encoding deficits");
  
  const [procDamageTitle, setProcDamageTitle] = useState("Procedural Damage");
  const [procClin1Label, setProcClin1Label] = useState("Parkinson's:");
  const [procClin1Text, setProcClin1Text] = useState("Motor skill learning");
  const [procClin2Label, setProcClin2Label] = useState("Huntington's:");
  const [procClin2Text, setProcClin2Text] = useState("Habit acquisition");
  const [procClin3Label, setProcClin3Label] = useState("Basal Ganglia:");
  const [procClin3Text, setProcClin3Text] = useState("Procedural deficits");

  return (
    <div className="h-full p-6 flex flex-col gap-4">
      {/* Top Section - Memory Types Overview */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-purple-50 border-2 border-purple-400 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-10 bg-purple-600 rounded"></div>
            <div className="flex-1">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={declMemTitle}
                    onChange={(e) => setDeclMemTitle(e.target.value)}
                    className="border-2 border-blue-400 px-2 py-1 rounded text-purple-700 text-2xl w-full"
                  />
                  <input
                    type="text"
                    value={declMemSubtitle}
                    onChange={(e) => setDeclMemSubtitle(e.target.value)}
                    className="border-2 border-blue-400 px-2 py-1 rounded text-purple-600 text-xl italic w-full mt-1"
                  />
                </>
              ) : (
                <>
                  <h3 className="text-purple-700 text-2xl">{declMemTitle}</h3>
                  <p className="text-purple-600 text-xl italic">{declMemSubtitle}</p>
                </>
              )}
            </div>
          </div>
          <ul className="space-y-1 text-gray-800 text-xl">
            <li>
              •{" "}
              {isEditing ? (
                <input
                  type="text"
                  value={declFeat1}
                  onChange={(e) => setDeclFeat1(e.target.value)}
                  className="border-2 border-blue-400 px-1 rounded inline-block flex-1"
                />
              ) : (
                declFeat1
              )}
            </li>
            <li>
              •{" "}
              {isEditing ? (
                <input
                  type="text"
                  value={declFeat2}
                  onChange={(e) => setDeclFeat2(e.target.value)}
                  className="border-2 border-blue-400 px-1 rounded inline-block flex-1"
                />
              ) : (
                declFeat2
              )}
            </li>
            <li>
              •{" "}
              {isEditing ? (
                <input
                  type="text"
                  value={declFeat3}
                  onChange={(e) => setDeclFeat3(e.target.value)}
                  className="border-2 border-blue-400 px-1 rounded inline-block flex-1"
                />
              ) : (
                declFeat3
              )}
            </li>
          </ul>
        </div>

        <div className="bg-red-50 border-2 border-red-400 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-10 bg-red-600 rounded"></div>
            <div className="flex-1">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={procMemTitle}
                    onChange={(e) => setProcMemTitle(e.target.value)}
                    className="border-2 border-blue-400 px-2 py-1 rounded text-red-600 text-2xl w-full"
                  />
                  <input
                    type="text"
                    value={procMemSubtitle}
                    onChange={(e) => setProcMemSubtitle(e.target.value)}
                    className="border-2 border-blue-400 px-2 py-1 rounded text-red-600 text-xl italic w-full mt-1"
                  />
                </>
              ) : (
                <>
                  <h3 className="text-red-600 text-2xl">{procMemTitle}</h3>
                  <p className="text-red-600 text-xl italic">{procMemSubtitle}</p>
                </>
              )}
            </div>
          </div>
          <ul className="space-y-1 text-gray-800 text-xl">
            <li>
              •{" "}
              {isEditing ? (
                <input
                  type="text"
                  value={procFeat1}
                  onChange={(e) => setProcFeat1(e.target.value)}
                  className="border-2 border-blue-400 px-1 rounded inline-block flex-1"
                />
              ) : (
                procFeat1
              )}
            </li>
            <li>
              •{" "}
              {isEditing ? (
                <input
                  type="text"
                  value={procFeat2}
                  onChange={(e) => setProcFeat2(e.target.value)}
                  className="border-2 border-blue-400 px-1 rounded inline-block flex-1"
                />
              ) : (
                procFeat2
              )}
            </li>
            <li>
              •{" "}
              {isEditing ? (
                <input
                  type="text"
                  value={procFeat3}
                  onChange={(e) => setProcFeat3(e.target.value)}
                  className="border-2 border-blue-400 px-1 rounded inline-block flex-1"
                />
              ) : (
                procFeat3
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* Clinical Impairments Section */}
      <div className="flex-1 flex flex-col gap-2 pt-1">
        
        <div className="grid grid-cols-2 gap-6 flex-1">
          {/* Declarative Impairments */}
          <div className="bg-purple-100 border-l-4 border-purple-600 rounded-lg p-4">
            {isEditing ? (
              <input
                type="text"
                value={declDamageTitle}
                onChange={(e) => setDeclDamageTitle(e.target.value)}
                className="border-2 border-blue-400 px-2 py-1 rounded text-purple-700 text-2xl w-full mb-2"
              />
            ) : (
              <h4 className="text-purple-700 text-2xl mb-2">{declDamageTitle}</h4>
            )}
            <ul className="space-y-1 text-gray-800 text-xl">
              <li>
                •{" "}
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={declClin1Label}
                      onChange={(e) => setDeclClin1Label(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded font-semibold inline-block"
                      style={{ width: `${declClin1Label.length + 1}ch` }}
                    />
                    {" "}
                    <input
                      type="text"
                      value={declClin1Text}
                      onChange={(e) => setDeclClin1Text(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded inline-block"
                    />
                  </>
                ) : (
                  <>
                    <strong>{declClin1Label}</strong> {declClin1Text}
                  </>
                )}
              </li>
              <li>
                •{" "}
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={declClin2Label}
                      onChange={(e) => setDeclClin2Label(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded font-semibold inline-block"
                      style={{ width: `${declClin2Label.length + 1}ch` }}
                    />
                    {" "}
                    <input
                      type="text"
                      value={declClin2Text}
                      onChange={(e) => setDeclClin2Text(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded inline-block"
                    />
                  </>
                ) : (
                  <>
                    <strong>{declClin2Label}</strong> {declClin2Text}
                  </>
                )}
              </li>
              <li>
                •{" "}
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={declClin3Label}
                      onChange={(e) => setDeclClin3Label(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded font-semibold inline-block"
                      style={{ width: `${declClin3Label.length + 1}ch` }}
                    />
                    {" "}
                    <input
                      type="text"
                      value={declClin3Text}
                      onChange={(e) => setDeclClin3Text(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded inline-block"
                    />
                  </>
                ) : (
                  <>
                    <strong>{declClin3Label}</strong> {declClin3Text}
                  </>
                )}
              </li>
            </ul>
          </div>

          {/* Procedural Impairments */}
          <div className="bg-red-100 border-l-4 border-red-600 rounded-lg p-4">
            {isEditing ? (
              <input
                type="text"
                value={procDamageTitle}
                onChange={(e) => setProcDamageTitle(e.target.value)}
                className="border-2 border-blue-400 px-2 py-1 rounded text-red-600 text-2xl w-full mb-2"
              />
            ) : (
              <h4 className="text-red-600 text-2xl mb-2">{procDamageTitle}</h4>
            )}
            <ul className="space-y-1 text-gray-800 text-xl">
              <li>
                •{" "}
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={procClin1Label}
                      onChange={(e) => setProcClin1Label(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded font-semibold inline-block"
                      style={{ width: `${procClin1Label.length + 1}ch` }}
                    />
                    {" "}
                    <input
                      type="text"
                      value={procClin1Text}
                      onChange={(e) => setProcClin1Text(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded inline-block"
                    />
                  </>
                ) : (
                  <>
                    <strong>{procClin1Label}</strong> {procClin1Text}
                  </>
                )}
              </li>
              <li>
                •{" "}
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={procClin2Label}
                      onChange={(e) => setProcClin2Label(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded font-semibold inline-block"
                      style={{ width: `${procClin2Label.length + 1}ch` }}
                    />
                    {" "}
                    <input
                      type="text"
                      value={procClin2Text}
                      onChange={(e) => setProcClin2Text(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded inline-block"
                    />
                  </>
                ) : (
                  <>
                    <strong>{procClin2Label}</strong> {procClin2Text}
                  </>
                )}
              </li>
              <li>
                •{" "}
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={procClin3Label}
                      onChange={(e) => setProcClin3Label(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded font-semibold inline-block"
                      style={{ width: `${procClin3Label.length + 1}ch` }}
                    />
                    {" "}
                    <input
                      type="text"
                      value={procClin3Text}
                      onChange={(e) => setProcClin3Text(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded inline-block"
                    />
                  </>
                ) : (
                  <>
                    <strong>{procClin3Label}</strong> {procClin3Text}
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

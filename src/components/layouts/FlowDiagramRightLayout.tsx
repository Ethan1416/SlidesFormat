import { useState } from "react";
import { ContentSection } from "../SlideTemplate";

interface FlowDiagramRightLayoutProps {
  leftSection: ContentSection;
  rightSection: ContentSection;
  setLeftSection: (section: ContentSection) => void;
  setRightSection: (section: ContentSection) => void;
  isEditing: boolean;
}

export function FlowDiagramRightLayout({
  leftSection,
  rightSection,
  isEditing
}: FlowDiagramRightLayoutProps) {
  const [row1Title, setRow1Title] = useState("Encoding Process");
  const [row1Left, setRow1Left] = useState("Conscious attention required");
  const [row1Right, setRow1Right] = useState("Automatic skill acquisition");
  
  const [row2Title, setRow2Title] = useState("Storage Duration");
  const [row2Left, setRow2Left] = useState("Hippocampal consolidation");
  const [row2Right, setRow2Right] = useState("Striatal habit formation");
  
  const [row3Title, setRow3Title] = useState("Retrieval Method");
  const [row3Left, setRow3Left] = useState("Effortful conscious recall");
  const [row3Right, setRow3Right] = useState("Automatic performance");
  
  const [row4Title, setRow4Title] = useState("Forgetting Rate");
  const [row4Left, setRow4Left] = useState("Vulnerable to interference");
  const [row4Right, setRow4Right] = useState("Resistant to forgetting");

  return (
    <div className="h-full p-4 flex gap-4">
      {/* Left Side - Blank White Space */}
      <div className="flex-1 bg-white">
      </div>

      {/* Right Side - Key Distinctions */}
      <div className="flex-1 flex flex-col justify-center gap-2">
        <div className="space-y-2">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-2">
            {isEditing ? (
              <input
                type="text"
                value={row1Title}
                onChange={(e) => setRow1Title(e.target.value)}
                className="border-2 border-blue-400 px-2 py-1 rounded text-gray-800 text-2xl w-full mb-1"
              />
            ) : (
              <h4 className="text-gray-800 text-2xl mb-1">{row1Title}</h4>
            )}
            <div className="flex gap-2">
              <div className="flex-1 bg-purple-50 p-2 rounded border-l-4 border-purple-600">
                {isEditing ? (
                  <input
                    type="text"
                    value={row1Left}
                    onChange={(e) => setRow1Left(e.target.value)}
                    className="border-2 border-blue-400 px-1 rounded text-purple-700 text-xl w-full"
                  />
                ) : (
                  <p className="text-purple-700 text-xl">{row1Left}</p>
                )}
              </div>
              <div className="flex-1 bg-red-50 p-2 rounded border-l-4 border-red-600">
                {isEditing ? (
                  <input
                    type="text"
                    value={row1Right}
                    onChange={(e) => setRow1Right(e.target.value)}
                    className="border-2 border-blue-400 px-1 rounded text-red-600 text-xl w-full"
                  />
                ) : (
                  <p className="text-red-600 text-xl">{row1Right}</p>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-2">
            {isEditing ? (
              <input
                type="text"
                value={row2Title}
                onChange={(e) => setRow2Title(e.target.value)}
                className="border-2 border-blue-400 px-2 py-1 rounded text-gray-800 text-2xl w-full mb-1"
              />
            ) : (
              <h4 className="text-gray-800 text-2xl mb-1">{row2Title}</h4>
            )}
            <div className="flex gap-2">
              <div className="flex-1 bg-purple-50 p-2 rounded border-l-4 border-purple-600">
                {isEditing ? (
                  <input
                    type="text"
                    value={row2Left}
                    onChange={(e) => setRow2Left(e.target.value)}
                    className="border-2 border-blue-400 px-1 rounded text-purple-700 text-xl w-full"
                  />
                ) : (
                  <p className="text-purple-700 text-xl">{row2Left}</p>
                )}
              </div>
              <div className="flex-1 bg-red-50 p-2 rounded border-l-4 border-red-600">
                {isEditing ? (
                  <input
                    type="text"
                    value={row2Right}
                    onChange={(e) => setRow2Right(e.target.value)}
                    className="border-2 border-blue-400 px-1 rounded text-red-600 text-xl w-full"
                  />
                ) : (
                  <p className="text-red-600 text-xl">{row2Right}</p>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-2">
            {isEditing ? (
              <input
                type="text"
                value={row3Title}
                onChange={(e) => setRow3Title(e.target.value)}
                className="border-2 border-blue-400 px-2 py-1 rounded text-gray-800 text-2xl w-full mb-1"
              />
            ) : (
              <h4 className="text-gray-800 text-2xl mb-1">{row3Title}</h4>
            )}
            <div className="flex gap-2">
              <div className="flex-1 bg-purple-50 p-2 rounded border-l-4 border-purple-600">
                {isEditing ? (
                  <input
                    type="text"
                    value={row3Left}
                    onChange={(e) => setRow3Left(e.target.value)}
                    className="border-2 border-blue-400 px-1 rounded text-purple-700 text-xl w-full"
                  />
                ) : (
                  <p className="text-purple-700 text-xl">{row3Left}</p>
                )}
              </div>
              <div className="flex-1 bg-red-50 p-2 rounded border-l-4 border-red-600">
                {isEditing ? (
                  <input
                    type="text"
                    value={row3Right}
                    onChange={(e) => setRow3Right(e.target.value)}
                    className="border-2 border-blue-400 px-1 rounded text-red-600 text-xl w-full"
                  />
                ) : (
                  <p className="text-red-600 text-xl">{row3Right}</p>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-2">
            {isEditing ? (
              <input
                type="text"
                value={row4Title}
                onChange={(e) => setRow4Title(e.target.value)}
                className="border-2 border-blue-400 px-2 py-1 rounded text-gray-800 text-2xl w-full mb-1"
              />
            ) : (
              <h4 className="text-gray-800 text-2xl mb-1">{row4Title}</h4>
            )}
            <div className="flex gap-2">
              <div className="flex-1 bg-purple-50 p-2 rounded border-l-4 border-purple-600">
                {isEditing ? (
                  <input
                    type="text"
                    value={row4Left}
                    onChange={(e) => setRow4Left(e.target.value)}
                    className="border-2 border-blue-400 px-1 rounded text-purple-700 text-xl w-full"
                  />
                ) : (
                  <p className="text-purple-700 text-xl">{row4Left}</p>
                )}
              </div>
              <div className="flex-1 bg-red-50 p-2 rounded border-l-4 border-red-600">
                {isEditing ? (
                  <input
                    type="text"
                    value={row4Right}
                    onChange={(e) => setRow4Right(e.target.value)}
                    className="border-2 border-blue-400 px-1 rounded text-red-600 text-xl w-full"
                  />
                ) : (
                  <p className="text-red-600 text-xl">{row4Right}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

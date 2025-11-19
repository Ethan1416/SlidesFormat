import { useState } from "react";
import { ContentSection } from "../SlideTemplate";
import { ArrowDown, ArrowRight } from "lucide-react";

interface FlowDiagramLeftLayoutProps {
  leftSection: ContentSection;
  rightSection: ContentSection;
  setLeftSection: (section: ContentSection) => void;
  setRightSection: (section: ContentSection) => void;
  isEditing: boolean;
}

export function FlowDiagramLeftLayout({
  leftSection,
  rightSection,
  isEditing
}: FlowDiagramLeftLayoutProps) {
  const [box1Text, setBox1Text] = useState("Memory Formation Process");
  const [box2Text, setBox2Text] = useState("ENCODING (Input Stage)");
  const [box3Text, setBox3Text] = useState("STORAGE (Consolidation)");
  const [box4Text, setBox4Text] = useState("MEMORY TYPE SYSTEMS");
  const [box5Text, setBox5Text] = useState("RETRIEVAL (Access Stage)");

  return (
    <div className="h-full p-4 flex gap-4">
      {/* Left Side - Flow Process */}
      <div className="flex-1 flex flex-col justify-center gap-1">
        {/* Box 1: Memory Formation */}
        <div className="bg-blue-100 px-4 py-3 rounded-lg border-2 border-blue-400">
          {isEditing ? (
            <input
              type="text"
              value={box1Text}
              onChange={(e) => setBox1Text(e.target.value)}
              className="border-2 border-blue-400 px-2 py-1 rounded text-blue-700 text-2xl text-center w-full bg-white"
            />
          ) : (
            <h3 className="text-blue-700 text-2xl text-center">{box1Text}</h3>
          )}
        </div>

        <div className="flex items-center justify-center">
          <ArrowDown className="w-5 h-5 text-gray-400" />
        </div>

        {/* Box 2: ENCODING */}
        <div className="bg-purple-100 px-4 py-3 rounded-lg border-2 border-purple-600">
          {isEditing ? (
            <input
              type="text"
              value={box2Text}
              onChange={(e) => setBox2Text(e.target.value)}
              className="border-2 border-blue-400 px-2 py-1 rounded text-purple-700 text-2xl text-center w-full bg-white"
            />
          ) : (
            <h4 className="text-purple-700 text-2xl text-center">{box2Text}</h4>
          )}
        </div>

        <div className="flex items-center justify-center">
          <ArrowDown className="w-5 h-5 text-gray-400" />
        </div>

        {/* Box 3: STORAGE */}
        <div className="bg-orange-100 px-4 py-3 rounded-lg border-2 border-orange-500">
          {isEditing ? (
            <input
              type="text"
              value={box3Text}
              onChange={(e) => setBox3Text(e.target.value)}
              className="border-2 border-blue-400 px-2 py-1 rounded text-orange-600 text-2xl text-center w-full bg-white"
            />
          ) : (
            <h4 className="text-orange-600 text-2xl text-center">{box3Text}</h4>
          )}
        </div>

        <div className="flex items-center justify-center">
          <ArrowDown className="w-5 h-5 text-gray-400" />
        </div>

        {/* Box 4: Memory Types */}
        <div className="bg-gray-100 px-4 py-3 rounded-lg border-2 border-gray-400">
          {isEditing ? (
            <input
              type="text"
              value={box4Text}
              onChange={(e) => setBox4Text(e.target.value)}
              className="border-2 border-blue-400 px-2 py-1 rounded text-gray-700 text-2xl text-center w-full bg-white"
            />
          ) : (
            <h4 className="text-gray-700 text-2xl text-center">{box4Text}</h4>
          )}
        </div>

        <div className="flex items-center justify-center">
          <ArrowDown className="w-5 h-5 text-gray-400" />
        </div>

        {/* Box 5: RETRIEVAL */}
        <div className="bg-green-100 px-4 py-3 rounded-lg border-2 border-green-600">
          {isEditing ? (
            <input
              type="text"
              value={box5Text}
              onChange={(e) => setBox5Text(e.target.value)}
              className="border-2 border-blue-400 px-2 py-1 rounded text-green-700 text-2xl text-center w-full bg-white"
            />
          ) : (
            <h4 className="text-green-700 text-2xl text-center">{box5Text}</h4>
          )}
        </div>
      </div>

      {/* Right Side - Blank White Space */}
      <div className="flex-1 bg-white">
      </div>
    </div>
  );
}

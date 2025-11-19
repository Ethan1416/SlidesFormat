import { useState } from "react";
import { ContentSection } from "../SlideTemplate";
import { FileText } from "lucide-react";

interface MultipleChoiceAnswerLayoutProps {
  leftSection: ContentSection;
  rightSection: ContentSection;
  setLeftSection: (section: ContentSection) => void;
  setRightSection: (section: ContentSection) => void;
  isEditing: boolean;
}

export function MultipleChoiceAnswerLayout({
  leftSection,
  rightSection,
  isEditing
}: MultipleChoiceAnswerLayoutProps) {
  const [vignetteText, setVignetteText] = useState("When Charles administers opioids at maximal tolerated doses, he must consider the integrative effects on neurophysiology, safety profile, and consciousness modulation.");
  const [questionPrompt, setQuestionPrompt] = useState("Which of the following statements BEST describes the pharmacologic implications of this event?");
  
  const [optionAText, setOptionAText] = useState("Despite the emergence of Delta and Theta rhythms on EEG, the high therapeutic index ensures a wide safety margin, minimizing the risk of CNS-mediated hypoventilation.");
  const [optionBText, setOptionBText] = useState("Elevated opioid doses promote cortical desynchronization, reflected as increased Beta activity, while paradoxically improving pain tolerance via NMDA receptor antagonism.");
  const [optionCText, setOptionCText] = useState("High-dose opioids lower the therapeutic index significantly, with EEG slowing (Delta/Theta dominance) indicating deep cortical suppression; this correlates with increased risk of hypoxia and CO₂ narcosis.");
  const [optionDText, setOptionDText] = useState("Persistent Theta wave dominance reflects hyperexcitable cortical networks; combined with a low therapeutic index, this paradoxically elevates seizure susceptibility during opioid overdose states.");
  
  const [correctAnswer, setCorrectAnswer] = useState<"A" | "B" | "C" | "D">("C");

  return (
    <div className="h-full flex flex-col bg-gray-50 px-12 py-8">
      {/* Clinical Vignette */}
      <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded mb-4" style={{ paddingRight: "10%" }}>
        <div className="flex items-start gap-3">
          <FileText className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
          <div className="flex-1">
            {isEditing ? (
              <textarea
                value={vignetteText}
                onChange={(e) => setVignetteText(e.target.value)}
                className="border-2 border-blue-400 px-2 py-1 rounded text-gray-800 text-2xl w-full"
                rows={2}
              />
            ) : (
              <p className="text-gray-800 text-2xl leading-relaxed">{vignetteText}</p>
            )}
          </div>
        </div>
      </div>

      {/* Question Prompt */}
      <div className="mb-4">
        {isEditing ? (
          <textarea
            value={questionPrompt}
            onChange={(e) => setQuestionPrompt(e.target.value)}
            className="border-2 border-blue-400 px-2 py-1 rounded text-gray-900 text-2xl w-full"
            rows={2}
          />
        ) : (
          <p className="text-gray-900 text-2xl">{questionPrompt}</p>
        )}
      </div>

      {/* Correct Answer Selector (only visible in edit mode) */}
      {isEditing && (
        <div className="mb-4 bg-blue-50 border border-blue-300 rounded p-3">
          <label className="text-gray-800 text-xl mr-4">Correct Answer:</label>
          <select
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value as "A" | "B" | "C" | "D")}
            className="border-2 border-blue-400 px-3 py-2 rounded text-xl"
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>
      )}

      {/* Answer Options */}
      <div className="space-y-3 flex-1">
        <div className={`border rounded-lg p-3 ${
          correctAnswer === "A" 
            ? "bg-green-50 border-green-500 border-2" 
            : "bg-white border-gray-300 hover:border-purple-400 transition-colors cursor-pointer"
        }`}>
          <div className="flex items-start gap-4">
            <div className={`flex-shrink-0 w-8 h-8 text-white rounded flex items-center justify-center text-2xl ${
              correctAnswer === "A" ? "bg-green-600" : "bg-gray-800"
            }`}>
              A
            </div>
            {isEditing ? (
              <textarea
                value={optionAText}
                onChange={(e) => setOptionAText(e.target.value)}
                className="border-2 border-blue-400 px-2 py-1 rounded text-gray-800 text-2xl flex-1"
                rows={2}
              />
            ) : (
              <p className="text-gray-800 text-2xl flex-1 leading-relaxed">{optionAText}</p>
            )}
          </div>
        </div>

        <div className={`border rounded-lg p-3 ${
          correctAnswer === "B" 
            ? "bg-green-50 border-green-500 border-2" 
            : "bg-white border-gray-300 hover:border-purple-400 transition-colors cursor-pointer"
        }`}>
          <div className="flex items-start gap-4">
            <div className={`flex-shrink-0 w-8 h-8 text-white rounded flex items-center justify-center text-2xl ${
              correctAnswer === "B" ? "bg-green-600" : "bg-gray-800"
            }`}>
              B
            </div>
            {isEditing ? (
              <textarea
                value={optionBText}
                onChange={(e) => setOptionBText(e.target.value)}
                className="border-2 border-blue-400 px-2 py-1 rounded text-gray-800 text-2xl flex-1"
                rows={2}
              />
            ) : (
              <p className="text-gray-800 text-2xl flex-1 leading-relaxed">{optionBText}</p>
            )}
          </div>
        </div>

        <div className={`border rounded-lg p-3 ${
          correctAnswer === "C" 
            ? "bg-green-50 border-green-500 border-2" 
            : "bg-white border-gray-300 hover:border-purple-400 transition-colors cursor-pointer"
        }`}>
          <div className="flex items-start gap-4">
            <div className={`flex-shrink-0 w-8 h-8 text-white rounded flex items-center justify-center text-2xl ${
              correctAnswer === "C" ? "bg-green-600" : "bg-gray-800"
            }`}>
              C
            </div>
            {isEditing ? (
              <textarea
                value={optionCText}
                onChange={(e) => setOptionCText(e.target.value)}
                className="border-2 border-blue-400 px-2 py-1 rounded text-gray-800 text-2xl flex-1"
                rows={2}
              />
            ) : (
              <p className="text-gray-800 text-2xl flex-1 leading-relaxed">{optionCText}</p>
            )}
          </div>
        </div>

        <div className={`border rounded-lg p-3 ${
          correctAnswer === "D" 
            ? "bg-green-50 border-green-500 border-2" 
            : "bg-white border-gray-300 hover:border-purple-400 transition-colors cursor-pointer"
        }`}>
          <div className="flex items-start gap-4">
            <div className={`flex-shrink-0 w-8 h-8 text-white rounded flex items-center justify-center text-2xl ${
              correctAnswer === "D" ? "bg-green-600" : "bg-gray-800"
            }`}>
              D
            </div>
            {isEditing ? (
              <textarea
                value={optionDText}
                onChange={(e) => setOptionDText(e.target.value)}
                className="border-2 border-blue-400 px-2 py-1 rounded text-gray-800 text-2xl flex-1"
                rows={2}
              />
            ) : (
              <p className="text-gray-800 text-2xl flex-1 leading-relaxed">{optionDText}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

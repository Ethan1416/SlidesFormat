import { useState } from "react";
import { ContentSection } from "../SlideTemplate";

interface ThreeCardLayoutProps {
  leftSection: ContentSection;
  rightSection: ContentSection;
  setLeftSection: (section: ContentSection) => void;
  setRightSection: (section: ContentSection) => void;
  isEditing: boolean;
}

export function ThreeCardLayout({
  leftSection,
  rightSection,
  isEditing
}: ThreeCardLayoutProps) {
  // Card 1 states
  const [card1Title, setCard1Title] = useState("Episodic Memory");
  const [card1Subtitle, setCard1Subtitle] = useState("Personal Events");
  const [card1Icon, setCard1Icon] = useState("📅");
  const [card1CenterText, setCard1CenterText] = useState("Time and Place Context");
  const [card1Item1Label, setCard1Item1Label] = useState("When:");
  const [card1Item1Text, setCard1Item1Text] = useState("Temporal context information");
  const [card1Item2Label, setCard1Item2Label] = useState("Where:");
  const [card1Item2Text, setCard1Item2Text] = useState("Spatial location details");
  const [card1Item3Label, setCard1Item3Label] = useState("What:");
  const [card1Item3Text, setCard1Item3Text] = useState("Event-specific content");
  
  // Card 2 states
  const [card2Title, setCard2Title] = useState("Semantic Memory");
  const [card2Subtitle, setCard2Subtitle] = useState("General Knowledge");
  const [card2Icon, setCard2Icon] = useState("📚");
  const [card2CenterText, setCard2CenterText] = useState("Facts and Concepts");
  const [card2Item1Label, setCard2Item1Label] = useState("Facts:");
  const [card2Item1Text, setCard2Item1Text] = useState("World knowledge database");
  const [card2Item2Label, setCard2Item2Label] = useState("Concepts:");
  const [card2Item2Text, setCard2Item2Text] = useState("Category information");
  const [card2Item3Label, setCard2Item3Label] = useState("Language:");
  const [card2Item3Text, setCard2Item3Text] = useState("Word meanings lexicon");
  
  // Card 3 states
  const [card3Title, setCard3Title] = useState("Procedural Memory");
  const [card3Subtitle, setCard3Subtitle] = useState("Skills & Habits");
  const [card3Icon, setCard3Icon] = useState("🚴");
  const [card3CenterText, setCard3CenterText] = useState("Motor Skill Learning");
  const [card3Item1Label, setCard3Item1Label] = useState("Motor:");
  const [card3Item1Text, setCard3Item1Text] = useState("Physical movement patterns");
  const [card3Item2Label, setCard3Item2Label] = useState("Cognitive:");
  const [card3Item2Text, setCard3Item2Text] = useState("Mental routine skills");
  const [card3Item3Label, setCard3Item3Label] = useState("Implicit:");
  const [card3Item3Text, setCard3Item3Text] = useState("Unconscious execution");

  return (
    <div className="h-full p-6">
      <div className="grid grid-cols-3 gap-4 h-full">
        {/* Card 1 - Episodic Memory */}
        <div className="border-2 border-purple-400 rounded-lg overflow-hidden flex flex-col bg-white">
          <div className="bg-purple-600 px-4 py-2">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={card1Title}
                  onChange={(e) => setCard1Title(e.target.value)}
                  className="border-2 border-blue-400 px-2 py-1 rounded text-white text-2xl text-center w-full bg-purple-700"
                />
                <input
                  type="text"
                  value={card1Subtitle}
                  onChange={(e) => setCard1Subtitle(e.target.value)}
                  className="border-2 border-blue-400 px-2 py-1 rounded text-purple-100 text-xl text-center italic w-full bg-purple-700 mt-1"
                />
              </>
            ) : (
              <>
                <h3 className="text-white text-2xl text-center">{card1Title}</h3>
                <p className="text-purple-100 text-xl text-center italic">{card1Subtitle}</p>
              </>
            )}
          </div>
          
          <div className="flex-1 bg-purple-50 p-4 flex items-center justify-center">
            <div className="text-center">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={card1Icon}
                    onChange={(e) => setCard1Icon(e.target.value)}
                    className="border-2 border-blue-400 px-2 py-1 rounded text-purple-600 text-6xl mb-2 text-center w-20"
                  />
                  <input
                    type="text"
                    value={card1CenterText}
                    onChange={(e) => setCard1CenterText(e.target.value)}
                    className="border-2 border-blue-400 px-2 py-1 rounded text-gray-700 text-xl w-full"
                  />
                </>
              ) : (
                <>
                  <div className="text-purple-600 text-6xl mb-2">{card1Icon}</div>
                  <p className="text-gray-700 text-xl">{card1CenterText}</p>
                </>
              )}
            </div>
          </div>
          
          <div className="p-3 bg-white border-t-2 border-purple-200">
            <p className="text-gray-800 text-xl">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={card1Item1Label}
                    onChange={(e) => setCard1Item1Label(e.target.value)}
                    className="border-2 border-blue-400 px-1 rounded font-semibold inline-block"
                    style={{ width: `${card1Item1Label.length + 1}ch` }}
                  />
                  {" "}
                  <input
                    type="text"
                    value={card1Item1Text}
                    onChange={(e) => setCard1Item1Text(e.target.value)}
                    className="border-2 border-blue-400 px-1 rounded inline-block"
                  />
                </>
              ) : (
                <>
                  <strong>{card1Item1Label}</strong> {card1Item1Text}
                </>
              )}
            </p>
            <p className="text-gray-700 text-xl mt-1">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={card1Item2Label}
                    onChange={(e) => setCard1Item2Label(e.target.value)}
                    className="border-2 border-blue-400 px-1 rounded font-semibold inline-block"
                    style={{ width: `${card1Item2Label.length + 1}ch` }}
                  />
                  {" "}
                  <input
                    type="text"
                    value={card1Item2Text}
                    onChange={(e) => setCard1Item2Text(e.target.value)}
                    className="border-2 border-blue-400 px-1 rounded inline-block"
                  />
                </>
              ) : (
                <>
                  <strong>{card1Item2Label}</strong> {card1Item2Text}
                </>
              )}
            </p>
            <p className="text-gray-700 text-xl mt-1">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={card1Item3Label}
                    onChange={(e) => setCard1Item3Label(e.target.value)}
                    className="border-2 border-blue-400 px-1 rounded font-semibold inline-block"
                    style={{ width: `${card1Item3Label.length + 1}ch` }}
                  />
                  {" "}
                  <input
                    type="text"
                    value={card1Item3Text}
                    onChange={(e) => setCard1Item3Text(e.target.value)}
                    className="border-2 border-blue-400 px-1 rounded inline-block"
                  />
                </>
              ) : (
                <>
                  <strong>{card1Item3Label}</strong> {card1Item3Text}
                </>
              )}
            </p>
          </div>
        </div>

        {/* Card 2 - Semantic Memory */}
        <div className="border-2 border-purple-400 rounded-lg overflow-hidden flex flex-col bg-white">
          <div className="bg-purple-500 px-4 py-2">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={card2Title}
                  onChange={(e) => setCard2Title(e.target.value)}
                  className="border-2 border-blue-400 px-2 py-1 rounded text-white text-2xl text-center w-full bg-purple-600"
                />
                <input
                  type="text"
                  value={card2Subtitle}
                  onChange={(e) => setCard2Subtitle(e.target.value)}
                  className="border-2 border-blue-400 px-2 py-1 rounded text-purple-100 text-xl text-center italic w-full bg-purple-600 mt-1"
                />
              </>
            ) : (
              <>
                <h3 className="text-white text-2xl text-center">{card2Title}</h3>
                <p className="text-purple-100 text-xl text-center italic">{card2Subtitle}</p>
              </>
            )}
          </div>
          
          <div className="flex-1 bg-purple-50 p-4 flex items-center justify-center">
            <div className="text-center">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={card2Icon}
                    onChange={(e) => setCard2Icon(e.target.value)}
                    className="border-2 border-blue-400 px-2 py-1 rounded text-purple-600 text-6xl mb-2 text-center w-20"
                  />
                  <input
                    type="text"
                    value={card2CenterText}
                    onChange={(e) => setCard2CenterText(e.target.value)}
                    className="border-2 border-blue-400 px-2 py-1 rounded text-gray-700 text-xl w-full"
                  />
                </>
              ) : (
                <>
                  <div className="text-purple-600 text-6xl mb-2">{card2Icon}</div>
                  <p className="text-gray-700 text-xl">{card2CenterText}</p>
                </>
              )}
            </div>
          </div>
          
          <div className="p-3 bg-white border-t-2 border-purple-200">
            <p className="text-gray-800 text-xl">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={card2Item1Label}
                    onChange={(e) => setCard2Item1Label(e.target.value)}
                    className="border-2 border-blue-400 px-1 rounded font-semibold inline-block"
                    style={{ width: `${card2Item1Label.length + 1}ch` }}
                  />
                  {" "}
                  <input
                    type="text"
                    value={card2Item1Text}
                    onChange={(e) => setCard2Item1Text(e.target.value)}
                    className="border-2 border-blue-400 px-1 rounded inline-block"
                  />
                </>
              ) : (
                <>
                  <strong>{card2Item1Label}</strong> {card2Item1Text}
                </>
              )}
            </p>
            <p className="text-gray-700 text-xl mt-1">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={card2Item2Label}
                    onChange={(e) => setCard2Item2Label(e.target.value)}
                    className="border-2 border-blue-400 px-1 rounded font-semibold inline-block"
                    style={{ width: `${card2Item2Label.length + 1}ch` }}
                  />
                  {" "}
                  <input
                    type="text"
                    value={card2Item2Text}
                    onChange={(e) => setCard2Item2Text(e.target.value)}
                    className="border-2 border-blue-400 px-1 rounded inline-block"
                  />
                </>
              ) : (
                <>
                  <strong>{card2Item2Label}</strong> {card2Item2Text}
                </>
              )}
            </p>
            <p className="text-gray-700 text-xl mt-1">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={card2Item3Label}
                    onChange={(e) => setCard2Item3Label(e.target.value)}
                    className="border-2 border-blue-400 px-1 rounded font-semibold inline-block"
                    style={{ width: `${card2Item3Label.length + 1}ch` }}
                  />
                  {" "}
                  <input
                    type="text"
                    value={card2Item3Text}
                    onChange={(e) => setCard2Item3Text(e.target.value)}
                    className="border-2 border-blue-400 px-1 rounded inline-block"
                  />
                </>
              ) : (
                <>
                  <strong>{card2Item3Label}</strong> {card2Item3Text}
                </>
              )}
            </p>
          </div>
        </div>

        {/* Card 3 - Procedural Memory */}
        <div className="border-2 border-red-400 rounded-lg overflow-hidden flex flex-col bg-white">
          <div className="bg-red-600 px-4 py-2">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={card3Title}
                  onChange={(e) => setCard3Title(e.target.value)}
                  className="border-2 border-blue-400 px-2 py-1 rounded text-white text-2xl text-center w-full bg-red-700"
                />
                <input
                  type="text"
                  value={card3Subtitle}
                  onChange={(e) => setCard3Subtitle(e.target.value)}
                  className="border-2 border-blue-400 px-2 py-1 rounded text-red-100 text-xl text-center italic w-full bg-red-700 mt-1"
                />
              </>
            ) : (
              <>
                <h3 className="text-white text-2xl text-center">{card3Title}</h3>
                <p className="text-red-100 text-xl text-center italic">{card3Subtitle}</p>
              </>
            )}
          </div>
          
          <div className="flex-1 bg-red-50 p-4 flex items-center justify-center">
            <div className="text-center">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={card3Icon}
                    onChange={(e) => setCard3Icon(e.target.value)}
                    className="border-2 border-blue-400 px-2 py-1 rounded text-red-600 text-6xl mb-2 text-center w-20"
                  />
                  <input
                    type="text"
                    value={card3CenterText}
                    onChange={(e) => setCard3CenterText(e.target.value)}
                    className="border-2 border-blue-400 px-2 py-1 rounded text-gray-700 text-xl w-full"
                  />
                </>
              ) : (
                <>
                  <div className="text-red-600 text-6xl mb-2">{card3Icon}</div>
                  <p className="text-gray-700 text-xl">{card3CenterText}</p>
                </>
              )}
            </div>
          </div>
          
          <div className="p-3 bg-white border-t-2 border-red-200">
            <p className="text-gray-800 text-xl">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={card3Item1Label}
                    onChange={(e) => setCard3Item1Label(e.target.value)}
                    className="border-2 border-blue-400 px-1 rounded font-semibold inline-block"
                    style={{ width: `${card3Item1Label.length + 1}ch` }}
                  />
                  {" "}
                  <input
                    type="text"
                    value={card3Item1Text}
                    onChange={(e) => setCard3Item1Text(e.target.value)}
                    className="border-2 border-blue-400 px-1 rounded inline-block"
                  />
                </>
              ) : (
                <>
                  <strong>{card3Item1Label}</strong> {card3Item1Text}
                </>
              )}
            </p>
            <p className="text-gray-700 text-xl mt-1">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={card3Item2Label}
                    onChange={(e) => setCard3Item2Label(e.target.value)}
                    className="border-2 border-blue-400 px-1 rounded font-semibold inline-block"
                    style={{ width: `${card3Item2Label.length + 1}ch` }}
                  />
                  {" "}
                  <input
                    type="text"
                    value={card3Item2Text}
                    onChange={(e) => setCard3Item2Text(e.target.value)}
                    className="border-2 border-blue-400 px-1 rounded inline-block"
                  />
                </>
              ) : (
                <>
                  <strong>{card3Item2Label}</strong> {card3Item2Text}
                </>
              )}
            </p>
            <p className="text-gray-700 text-xl mt-1">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={card3Item3Label}
                    onChange={(e) => setCard3Item3Label(e.target.value)}
                    className="border-2 border-blue-400 px-1 rounded font-semibold inline-block"
                    style={{ width: `${card3Item3Label.length + 1}ch` }}
                  />
                  {" "}
                  <input
                    type="text"
                    value={card3Item3Text}
                    onChange={(e) => setCard3Item3Text(e.target.value)}
                    className="border-2 border-blue-400 px-1 rounded inline-block"
                  />
                </>
              ) : (
                <>
                  <strong>{card3Item3Label}</strong> {card3Item3Text}
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

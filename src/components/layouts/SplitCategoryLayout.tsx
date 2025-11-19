import { useState } from "react";
import { ContentSection } from "../SlideTemplate";

interface SplitCategoryLayoutProps {
  leftSection: ContentSection;
  rightSection: ContentSection;
  setLeftSection: (section: ContentSection) => void;
  setRightSection: (section: ContentSection) => void;
  isEditing: boolean;
}

export function SplitCategoryLayout({
  leftSection,
  rightSection,
  isEditing
}: SplitCategoryLayoutProps) {
  const [categoriesTitle, setCategoriesTitle] = useState("Memory Categories");
  const [declarativeTitle, setDeclarativeTitle] = useState("Declarative");
  const [declarativeSubtitle, setDeclarativeSubtitle] = useState("Explicit");
  const [episodicLabel, setEpisodicLabel] = useState("Episodic:");
  const [episodicText, setEpisodicText] = useState("Personal events");
  const [semanticLabel, setSemanticLabel] = useState("Semantic:");
  const [semanticText, setSemanticText] = useState("Facts, concepts");
  const [autobioLabel, setAutobioLabel] = useState("Autobiographical:");
  const [autobioText, setAutobioText] = useState("Life story");
  const [spatialLabel, setSpatialLabel] = useState("Spatial:");
  const [spatialText, setSpatialText] = useState("Locations, maps");
  
  const [proceduralTitle, setProceduralTitle] = useState("Procedural");
  const [proceduralSubtitle, setProceduralSubtitle] = useState("Implicit");
  const [motorLabel, setMotorLabel] = useState("Motor:");
  const [motorText, setMotorText] = useState("Physical skills");
  const [habitsLabel, setHabitsLabel] = useState("Habits:");
  const [habitsText, setHabitsText] = useState("Routines");
  const [cognitiveLabel, setCognitiveLabel] = useState("Cognitive:");
  const [cognitiveText, setCognitiveText] = useState("Mental skills");
  const [perceptualLabel, setPerceptualLabel] = useState("Perceptual:");
  const [perceptualText, setPerceptualText] = useState("Pattern");
  
  const [declarativeFeaturesTitle, setDeclarativeFeaturesTitle] = useState("Declarative Features");
  const [declarativeFeature1, setDeclarativeFeature1] = useState("Conscious, intentional recall");
  const [declarativeFeature2, setDeclarativeFeature2] = useState("Flexible, can be updated");
  const [declarativeClinicalLabel, setDeclarativeClinicalLabel] = useState("Clinical:");
  const [declarativeClinicalText, setDeclarativeClinicalText] = useState("H.M. case study");
  
  const [proceduralFeaturesTitle, setProceduralFeaturesTitle] = useState("Procedural Features");
  const [proceduralFeature1, setProceduralFeature1] = useState("Unconscious, automatic");
  const [proceduralFeature2, setProceduralFeature2] = useState("Gradual, requires practice");
  const [proceduralClinicalLabel, setProceduralClinicalLabel] = useState("Clinical:");
  const [proceduralClinicalText, setProceduralClinicalText] = useState("Parkinson's disease");

  return (
    <div className="h-full px-6 pb-6 flex gap-6">
      {/* Left Side - Categories Box */}
      <div className="flex-1 border-2 border-gray-300 rounded-lg px-6 pb-6 bg-gray-50 flex flex-col justify-start">
        <div className="text-center mb-4">
          <div className="bg-gray-200 px-6 py-2 rounded-lg inline-block">
            {isEditing ? (
              <input
                type="text"
                value={categoriesTitle}
                onChange={(e) => setCategoriesTitle(e.target.value)}
                className="border-2 border-blue-400 px-2 py-1 rounded text-gray-700 text-2xl bg-transparent text-center"
              />
            ) : (
              <h3 className="text-gray-700 text-2xl">{categoriesTitle}</h3>
            )}
          </div>
        </div>

        <div className="flex gap-6">
          {/* Structure Column */}
          <div className="flex-1">
            <div className="bg-purple-100 border-l-4 border-purple-600 px-4 py-2 rounded">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={declarativeTitle}
                    onChange={(e) => setDeclarativeTitle(e.target.value)}
                    className="border-2 border-blue-400 px-2 py-1 rounded text-purple-700 text-2xl bg-white w-full"
                  />
                  <input
                    type="text"
                    value={declarativeSubtitle}
                    onChange={(e) => setDeclarativeSubtitle(e.target.value)}
                    className="border-2 border-blue-400 px-2 py-1 rounded text-gray-600 text-xl italic bg-white w-full mt-1"
                  />
                </>
              ) : (
                <>
                  <h4 className="text-purple-700 text-2xl">{declarativeTitle}</h4>
                  <p className="text-gray-600 text-xl italic">{declarativeSubtitle}</p>
                </>
              )}
            </div>
            <div className="mt-3 space-y-2">
              <div className="bg-white p-3 rounded border border-purple-200">
                {isEditing ? (
                  <p className="text-gray-800 text-xl">
                    <input
                      type="text"
                      value={episodicLabel}
                      onChange={(e) => setEpisodicLabel(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded font-semibold inline-block"
                      style={{ width: `${episodicLabel.length + 1}ch` }}
                    />
                    {" "}
                    <input
                      type="text"
                      value={episodicText}
                      onChange={(e) => setEpisodicText(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded inline-block flex-1"
                    />
                  </p>
                ) : (
                  <p className="text-gray-800 text-xl"><span className="font-semibold">{episodicLabel}</span> {episodicText}</p>
                )}
              </div>
              <div className="bg-white p-3 rounded border border-purple-200">
                {isEditing ? (
                  <p className="text-gray-800 text-xl">
                    <input
                      type="text"
                      value={semanticLabel}
                      onChange={(e) => setSemanticLabel(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded font-semibold inline-block"
                      style={{ width: `${semanticLabel.length + 1}ch` }}
                    />
                    {" "}
                    <input
                      type="text"
                      value={semanticText}
                      onChange={(e) => setSemanticText(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded inline-block flex-1"
                    />
                  </p>
                ) : (
                  <p className="text-gray-800 text-xl"><span className="font-semibold">{semanticLabel}</span> {semanticText}</p>
                )}
              </div>
              <div className="bg-white p-3 rounded border border-purple-200">
                {isEditing ? (
                  <p className="text-gray-800 text-xl">
                    <input
                      type="text"
                      value={autobioLabel}
                      onChange={(e) => setAutobioLabel(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded font-semibold inline-block"
                      style={{ width: `${autobioLabel.length + 1}ch` }}
                    />
                    {" "}
                    <input
                      type="text"
                      value={autobioText}
                      onChange={(e) => setAutobioText(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded inline-block flex-1"
                    />
                  </p>
                ) : (
                  <p className="text-gray-800 text-xl"><span className="font-semibold">{autobioLabel}</span> {autobioText}</p>
                )}
              </div>
              <div className="bg-white p-3 rounded border border-purple-200">
                {isEditing ? (
                  <p className="text-gray-800 text-xl">
                    <input
                      type="text"
                      value={spatialLabel}
                      onChange={(e) => setSpatialLabel(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded font-semibold inline-block"
                      style={{ width: `${spatialLabel.length + 1}ch` }}
                    />
                    {" "}
                    <input
                      type="text"
                      value={spatialText}
                      onChange={(e) => setSpatialText(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded inline-block flex-1"
                    />
                  </p>
                ) : (
                  <p className="text-gray-800 text-xl"><span className="font-semibold">{spatialLabel}</span> {spatialText}</p>
                )}
              </div>
            </div>
          </div>

          {/* Function Column */}
          <div className="flex-1">
            <div className="bg-red-100 border-l-4 border-red-600 px-4 py-2 rounded">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={proceduralTitle}
                    onChange={(e) => setProceduralTitle(e.target.value)}
                    className="border-2 border-blue-400 px-2 py-1 rounded text-red-600 text-2xl bg-white w-full"
                  />
                  <input
                    type="text"
                    value={proceduralSubtitle}
                    onChange={(e) => setProceduralSubtitle(e.target.value)}
                    className="border-2 border-blue-400 px-2 py-1 rounded text-gray-600 text-xl italic bg-white w-full mt-1"
                  />
                </>
              ) : (
                <>
                  <h4 className="text-red-600 text-2xl">{proceduralTitle}</h4>
                  <p className="text-gray-600 text-xl italic">{proceduralSubtitle}</p>
                </>
              )}
            </div>
            <div className="mt-3 space-y-2">
              <div className="bg-white p-3 rounded border border-red-200">
                {isEditing ? (
                  <p className="text-gray-800 text-xl">
                    <input
                      type="text"
                      value={motorLabel}
                      onChange={(e) => setMotorLabel(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded font-semibold inline-block"
                      style={{ width: `${motorLabel.length + 1}ch` }}
                    />
                    {" "}
                    <input
                      type="text"
                      value={motorText}
                      onChange={(e) => setMotorText(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded inline-block flex-1"
                    />
                  </p>
                ) : (
                  <p className="text-gray-800 text-xl"><span className="font-semibold">{motorLabel}</span> {motorText}</p>
                )}
              </div>
              <div className="bg-white p-3 rounded border border-red-200">
                {isEditing ? (
                  <p className="text-gray-800 text-xl">
                    <input
                      type="text"
                      value={habitsLabel}
                      onChange={(e) => setHabitsLabel(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded font-semibold inline-block"
                      style={{ width: `${habitsLabel.length + 1}ch` }}
                    />
                    {" "}
                    <input
                      type="text"
                      value={habitsText}
                      onChange={(e) => setHabitsText(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded inline-block flex-1"
                    />
                  </p>
                ) : (
                  <p className="text-gray-800 text-xl"><span className="font-semibold">{habitsLabel}</span> {habitsText}</p>
                )}
              </div>
              <div className="bg-white p-3 rounded border border-red-200">
                {isEditing ? (
                  <p className="text-gray-800 text-xl">
                    <input
                      type="text"
                      value={cognitiveLabel}
                      onChange={(e) => setCognitiveLabel(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded font-semibold inline-block"
                      style={{ width: `${cognitiveLabel.length + 1}ch` }}
                    />
                    {" "}
                    <input
                      type="text"
                      value={cognitiveText}
                      onChange={(e) => setCognitiveText(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded inline-block flex-1"
                    />
                  </p>
                ) : (
                  <p className="text-gray-800 text-xl"><span className="font-semibold">{cognitiveLabel}</span> {cognitiveText}</p>
                )}
              </div>
              <div className="bg-white p-3 rounded border border-red-200">
                {isEditing ? (
                  <p className="text-gray-800 text-xl">
                    <input
                      type="text"
                      value={perceptualLabel}
                      onChange={(e) => setPerceptualLabel(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded font-semibold inline-block"
                      style={{ width: `${perceptualLabel.length + 1}ch` }}
                    />
                    {" "}
                    <input
                      type="text"
                      value={perceptualText}
                      onChange={(e) => setPerceptualText(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded inline-block flex-1"
                    />
                  </p>
                ) : (
                  <p className="text-gray-800 text-xl"><span className="font-semibold">{perceptualLabel}</span> {perceptualText}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Detailed Lists */}
      <div className="flex-1 flex flex-col gap-3">
        {/* Declarative Details */}
        <div className="flex-1 bg-purple-50 border-2 border-purple-300 rounded-lg p-5">
          {isEditing ? (
            <input
              type="text"
              value={declarativeFeaturesTitle}
              onChange={(e) => setDeclarativeFeaturesTitle(e.target.value)}
              className="border-2 border-blue-400 px-2 py-1 rounded text-purple-700 text-2xl w-full mb-2"
            />
          ) : (
            <h3 className="text-purple-700 text-2xl mb-2">{declarativeFeaturesTitle}</h3>
          )}
          <ul className="space-y-1 text-gray-800 text-xl">
            <li>
              •{" "}
              {isEditing ? (
                <input
                  type="text"
                  value={declarativeFeature1}
                  onChange={(e) => setDeclarativeFeature1(e.target.value)}
                  className="border-2 border-blue-400 px-1 rounded inline-block flex-1"
                />
              ) : (
                declarativeFeature1
              )}
            </li>
            <li>
              •{" "}
              {isEditing ? (
                <input
                  type="text"
                  value={declarativeFeature2}
                  onChange={(e) => setDeclarativeFeature2(e.target.value)}
                  className="border-2 border-blue-400 px-1 rounded inline-block flex-1"
                />
              ) : (
                declarativeFeature2
              )}
            </li>
          </ul>
          
          <div className="mt-3 bg-purple-100 border-l-4 border-purple-600 p-2 rounded">
            {isEditing ? (
              <p className="text-purple-800 text-xl">
                <input
                  type="text"
                  value={declarativeClinicalLabel}
                  onChange={(e) => setDeclarativeClinicalLabel(e.target.value)}
                  className="border-2 border-blue-400 px-1 rounded font-semibold inline-block"
                  style={{ width: `${declarativeClinicalLabel.length + 1}ch` }}
                />
                {" "}
                <input
                  type="text"
                  value={declarativeClinicalText}
                  onChange={(e) => setDeclarativeClinicalText(e.target.value)}
                  className="border-2 border-blue-400 px-1 rounded inline-block"
                />
              </p>
            ) : (
              <p className="text-purple-800 text-xl">
                <strong>{declarativeClinicalLabel}</strong> {declarativeClinicalText}
              </p>
            )}
          </div>
        </div>

        {/* Procedural Details */}
        <div className="flex-1 bg-red-50 border-2 border-red-300 rounded-lg p-5">
          {isEditing ? (
            <input
              type="text"
              value={proceduralFeaturesTitle}
              onChange={(e) => setProceduralFeaturesTitle(e.target.value)}
              className="border-2 border-blue-400 px-2 py-1 rounded text-red-600 text-2xl w-full mb-2"
            />
          ) : (
            <h3 className="text-red-600 text-2xl mb-2">{proceduralFeaturesTitle}</h3>
          )}
          <ul className="space-y-1 text-gray-800 text-xl">
            <li>
              •{" "}
              {isEditing ? (
                <input
                  type="text"
                  value={proceduralFeature1}
                  onChange={(e) => setProceduralFeature1(e.target.value)}
                  className="border-2 border-blue-400 px-1 rounded inline-block flex-1"
                />
              ) : (
                proceduralFeature1
              )}
            </li>
            <li>
              •{" "}
              {isEditing ? (
                <input
                  type="text"
                  value={proceduralFeature2}
                  onChange={(e) => setProceduralFeature2(e.target.value)}
                  className="border-2 border-blue-400 px-1 rounded inline-block flex-1"
                />
              ) : (
                proceduralFeature2
              )}
            </li>
          </ul>
          
          <div className="mt-3 bg-red-100 border-l-4 border-red-600 p-2 rounded">
            {isEditing ? (
              <p className="text-red-700 text-xl">
                <input
                  type="text"
                  value={proceduralClinicalLabel}
                  onChange={(e) => setProceduralClinicalLabel(e.target.value)}
                  className="border-2 border-blue-400 px-1 rounded font-semibold inline-block"
                  style={{ width: `${proceduralClinicalLabel.length + 1}ch` }}
                />
                {" "}
                <input
                  type="text"
                  value={proceduralClinicalText}
                  onChange={(e) => setProceduralClinicalText(e.target.value)}
                  className="border-2 border-blue-400 px-1 rounded inline-block"
                />
              </p>
            ) : (
              <p className="text-red-700 text-xl">
                <strong>{proceduralClinicalLabel}</strong> {proceduralClinicalText}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

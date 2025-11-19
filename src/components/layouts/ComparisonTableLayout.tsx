import { useState } from "react";
import { ContentSection } from "../SlideTemplate";

interface ComparisonTableLayoutProps {
  leftSection: ContentSection;
  rightSection: ContentSection;
  setLeftSection: (section: ContentSection) => void;
  setRightSection: (section: ContentSection) => void;
  isEditing: boolean;
}

export function ComparisonTableLayout({
  leftSection,
  rightSection,
  isEditing
}: ComparisonTableLayoutProps) {
  const [tableTitle, setTableTitle] = useState("Memory Systems Comparison Overview");
  const [headerFeature, setHeaderFeature] = useState("Feature Type");
  const [headerDeclarative, setHeaderDeclarative] = useState("Declarative");
  const [headerProcedural, setHeaderProcedural] = useState("Procedural");
  
  const [row1Feature, setRow1Feature] = useState("Awareness Level");
  const [row1Decl, setRow1Decl] = useState("Conscious explicit recollection");
  const [row1Proc, setRow1Proc] = useState("Unconscious implicit execution");
  
  const [row2Feature, setRow2Feature] = useState("Brain Regions");
  const [row2Decl, setRow2Decl] = useState("Hippocampus medial temporal lobe");
  const [row2Proc, setRow2Proc] = useState("Basal ganglia cerebellum striatum");
  
  const [row3Feature, setRow3Feature] = useState("Acquisition");
  const [row3Decl, setRow3Decl] = useState("Rapid one-trial learning possible");
  const [row3Proc, setRow3Proc] = useState("Gradual repeated practice needed");
  
  const [row4Feature, setRow4Feature] = useState("Flexibility");
  const [row4Decl, setRow4Decl] = useState("Highly flexible content updating");
  const [row4Proc, setRow4Proc] = useState("Rigid automated behavior patterns");
  
  const [row5Feature, setRow5Feature] = useState("Verbalization");
  const [row5Decl, setRow5Decl] = useState("Easy to describe and communicate");
  const [row5Proc, setRow5Proc] = useState("Difficult to verbalize or explain");
  
  const [clinicalTitle1, setClinicalTitle1] = useState("Clinical Impairment Pattern");
  const [clinical1Text1, setClinical1Text1] = useState("Amnesia cases:");
  const [clinical1Detail1, setClinical1Detail1] = useState("Impaired episodic recall");
  const [clinical1Text2, setClinical1Text2] = useState("Dementia type:");
  const [clinical1Detail2, setClinical1Detail2] = useState("Semantic knowledge loss");
  
  const [clinicalTitle2, setClinicalTitle2] = useState("Motor Disorder Presentation");
  const [clinical2Text1, setClinical2Text1] = useState("Parkinson's disease shows procedural deficits");
  const [clinical2Text2, setClinical2Text2] = useState("Huntington's impairs habit learning systems");

  const rows = [
    {
      feature: row1Feature,
      declarative: row1Decl,
      procedural: row1Proc,
      setFeature: setRow1Feature,
      setDecl: setRow1Decl,
      setProc: setRow1Proc
    },
    {
      feature: row2Feature,
      declarative: row2Decl,
      procedural: row2Proc,
      setFeature: setRow2Feature,
      setDecl: setRow2Decl,
      setProc: setRow2Proc
    },
    {
      feature: row3Feature,
      declarative: row3Decl,
      procedural: row3Proc,
      setFeature: setRow3Feature,
      setDecl: setRow3Decl,
      setProc: setRow3Proc
    },
    {
      feature: row4Feature,
      declarative: row4Decl,
      procedural: row4Proc,
      setFeature: setRow4Feature,
      setDecl: setRow4Decl,
      setProc: setRow4Proc
    },
    {
      feature: row5Feature,
      declarative: row5Decl,
      procedural: row5Proc,
      setFeature: setRow5Feature,
      setDecl: setRow5Decl,
      setProc: setRow5Proc
    }
  ];

  return (
    <div className="h-full p-6 flex flex-col">
      <div className="mb-4 text-center">
        {isEditing ? (
          <input
            type="text"
            value={tableTitle}
            onChange={(e) => setTableTitle(e.target.value)}
            className="border-2 border-blue-400 px-2 py-1 rounded text-gray-800 text-2xl w-full text-center"
          />
        ) : (
          <h3 className="text-gray-800 text-2xl">{tableTitle}</h3>
        )}
      </div>

      <div className="flex-1 overflow-auto">
        <table className="w-full border-2 border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border-2 border-gray-300 px-6 py-3 text-left text-gray-800 text-2xl w-1/4">
                {isEditing ? (
                  <input
                    type="text"
                    value={headerFeature}
                    onChange={(e) => setHeaderFeature(e.target.value)}
                    className="border-2 border-blue-400 px-2 py-1 rounded w-full bg-white"
                  />
                ) : (
                  headerFeature
                )}
              </th>
              <th className="border-2 border-gray-300 px-6 py-3 text-left text-purple-700 text-2xl w-3/8 bg-purple-50">
                {isEditing ? (
                  <input
                    type="text"
                    value={headerDeclarative}
                    onChange={(e) => setHeaderDeclarative(e.target.value)}
                    className="border-2 border-blue-400 px-2 py-1 rounded w-full bg-white"
                  />
                ) : (
                  headerDeclarative
                )}
              </th>
              <th className="border-2 border-gray-300 px-6 py-3 text-left text-red-600 text-2xl w-3/8 bg-red-50">
                {isEditing ? (
                  <input
                    type="text"
                    value={headerProcedural}
                    onChange={(e) => setHeaderProcedural(e.target.value)}
                    className="border-2 border-blue-400 px-2 py-1 rounded w-full bg-white"
                  />
                ) : (
                  headerProcedural
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="border-2 border-gray-300 px-6 py-2 text-gray-800 text-xl">
                  {isEditing ? (
                    <input
                      type="text"
                      value={row.feature}
                      onChange={(e) => row.setFeature(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded w-full"
                    />
                  ) : (
                    row.feature
                  )}
                </td>
                <td className="border-2 border-gray-300 px-6 py-2 text-gray-700 text-xl bg-purple-50">
                  {isEditing ? (
                    <input
                      type="text"
                      value={row.declarative}
                      onChange={(e) => row.setDecl(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded w-full"
                    />
                  ) : (
                    row.declarative
                  )}
                </td>
                <td className="border-2 border-gray-300 px-6 py-2 text-gray-700 text-xl bg-red-50">
                  {isEditing ? (
                    <input
                      type="text"
                      value={row.procedural}
                      onChange={(e) => row.setProc(e.target.value)}
                      className="border-2 border-blue-400 px-1 rounded w-full"
                    />
                  ) : (
                    row.procedural
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-purple-100 border-l-4 border-purple-600 p-3 rounded">
          {isEditing ? (
            <input
              type="text"
              value={clinicalTitle1}
              onChange={(e) => setClinicalTitle1(e.target.value)}
              className="border-2 border-blue-400 px-2 py-1 rounded text-purple-700 text-2xl w-full mb-1"
            />
          ) : (
            <h4 className="text-purple-700 text-2xl mb-1">{clinicalTitle1}</h4>
          )}
          <p className="text-gray-700 text-xl">
            •{" "}
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={clinical1Text1}
                  onChange={(e) => setClinical1Text1(e.target.value)}
                  className="border-2 border-blue-400 px-1 rounded font-semibold inline-block"
                  style={{ width: `${clinical1Text1.length + 1}ch` }}
                />
                {" "}
                <input
                  type="text"
                  value={clinical1Detail1}
                  onChange={(e) => setClinical1Detail1(e.target.value)}
                  className="border-2 border-blue-400 px-1 rounded inline-block"
                />
              </>
            ) : (
              <>
                <strong>{clinical1Text1}</strong> {clinical1Detail1}
              </>
            )}
          </p>
          <p className="text-gray-700 text-xl">
            •{" "}
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={clinical1Text2}
                  onChange={(e) => setClinical1Text2(e.target.value)}
                  className="border-2 border-blue-400 px-1 rounded font-semibold inline-block"
                  style={{ width: `${clinical1Text2.length + 1}ch` }}
                />
                {" "}
                <input
                  type="text"
                  value={clinical1Detail2}
                  onChange={(e) => setClinical1Detail2(e.target.value)}
                  className="border-2 border-blue-400 px-1 rounded inline-block"
                />
              </>
            ) : (
              <>
                <strong>{clinical1Text2}</strong> {clinical1Detail2}
              </>
            )}
          </p>
        </div>
        <div className="bg-red-100 border-l-4 border-red-600 p-3 rounded">
          {isEditing ? (
            <input
              type="text"
              value={clinicalTitle2}
              onChange={(e) => setClinicalTitle2(e.target.value)}
              className="border-2 border-blue-400 px-2 py-1 rounded text-red-600 text-2xl w-full mb-1"
            />
          ) : (
            <h4 className="text-red-600 text-2xl mb-1">{clinicalTitle2}</h4>
          )}
          <p className="text-gray-700 text-xl">
            •{" "}
            {isEditing ? (
              <input
                type="text"
                value={clinical2Text1}
                onChange={(e) => setClinical2Text1(e.target.value)}
                className="border-2 border-blue-400 px-1 rounded inline-block flex-1"
              />
            ) : (
              clinical2Text1
            )}
          </p>
          <p className="text-gray-700 text-xl">
            •{" "}
            {isEditing ? (
              <input
                type="text"
                value={clinical2Text2}
                onChange={(e) => setClinical2Text2(e.target.value)}
                className="border-2 border-blue-400 px-1 rounded inline-block flex-1"
              />
            ) : (
              clinical2Text2
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Edit2, Layout } from "lucide-react";
import { TwoColumnLayout } from "./layouts/TwoColumnLayout";
import { TimelineLayout } from "./layouts/TimelineLayout";
import { GridLayout } from "./layouts/GridLayout";
import { SplitCategoryLayout } from "./layouts/SplitCategoryLayout";
import { ThreeCardLayout } from "./layouts/ThreeCardLayout";
import { FlowDiagramLeftLayout } from "./layouts/FlowDiagramLeftLayout";
import { FlowDiagramRightLayout } from "./layouts/FlowDiagramRightLayout";
import { ComparisonTableLayout } from "./layouts/ComparisonTableLayout";
import { ClinicalFocusLayout } from "./layouts/ClinicalFocusLayout";
import { MultipleChoiceLayout } from "./layouts/MultipleChoiceLayout";
import { MultipleChoiceAnswerLayout } from "./layouts/MultipleChoiceAnswerLayout";
import { TitleSlideLayout } from "./layouts/TitleSlideLayout";
import { ImportantNoticeLayout } from "./layouts/ImportantNoticeLayout";
import { JourneyOverviewLayout } from "./layouts/JourneyOverviewLayout";
import { DetailedRoadmapLayout } from "./layouts/DetailedRoadmapLayout";
import { LearningObjectivesLayout } from "./layouts/LearningObjectivesLayout";
import { ContentPriorityLayout } from "./layouts/ContentPriorityLayout";

export interface ContentSection {
  title: string;
  subtitle: string;
  heading: string;
  bullets: string[];
  color: string;
  borderColor: string;
}

export type LayoutType = "two-column" | "timeline" | "grid" | "split-category" | "three-card" | "flow-diagram-left" | "flow-diagram-right" | "comparison-table" | "clinical-focus" | "multiple-choice" | "multiple-choice-answer" | "title-slide" | "important-notice" | "journey-overview" | "detailed-roadmap" | "learning-objectives" | "content-priority";

export function SlideTemplate() {
  const title = "Memory Systems: Experience to Knowledge";
  const subtitle = "Feel your hand writing notes - that's procedural. Reading these words?";
  const badge = "TIER 1";
  const footerTitle = "EPPP APPLICATION";
  const footerText =
    "Tests differentiation of memory system types from clinical presentation, encoding vs retrieval deficits, neuroanatomical substrates (hippocampus vs basal ganglia), and explicit/implicit memory dissociations in amnesia cases and normal aging.";
  const copyright = "© 2025 PrepJet, Academic Licensure Preparation and Education Service, LLC | All Rights Reserved";

  const [leftSection, setLeftSection] = useState<ContentSection>({
    title: "DECLARATIVE MEMORY",
    subtitle: "The Mind's Video Library",
    heading: "Episodic Memory",
    bullets: [
      "Personal experiences with context",
      "When and where it happened",
      "Like watching your own movie reel",
      "Hippocampus-dependent encoding",
      "Conscious recollection required",
      "Vulnerable to interference"
    ],
    color: "text-purple-700",
    borderColor: "border-purple-600"
  });

  const [rightSection, setRightSection] = useState<ContentSection>({
    title: "PROCEDURAL MEMORY",
    subtitle: "The Body Remembers",
    heading: "Motor Skills & Habits",
    bullets: [
      "Riding a bike, typing, brushing teeth",
      "Automatic, hard to describe in words",
      "Basal ganglia and cerebellum territory",
      "Like your fingers know before your mind does",
      "Non-conscious execution",
      "Resistant to forgetting"
    ],
    color: "text-red-600",
    borderColor: "border-red-600"
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentLayout, setCurrentLayout] = useState<LayoutType>("two-column");
  const [showLayoutMenu, setShowLayoutMenu] = useState(false);

  const layouts = [
    { id: "two-column" as LayoutType, name: "Two Column Comparison" },
    { id: "timeline" as LayoutType, name: "Timeline/Process" },
    { id: "grid" as LayoutType, name: "Grid Layout" },
    { id: "split-category" as LayoutType, name: "Split Category Layout" },
    { id: "three-card" as LayoutType, name: "Three Card Layout" },
    { id: "flow-diagram-left" as LayoutType, name: "Flow Diagram Left Layout" },
    { id: "flow-diagram-right" as LayoutType, name: "Flow Diagram Right Layout" },
    { id: "comparison-table" as LayoutType, name: "Comparison Table Layout" },
    { id: "clinical-focus" as LayoutType, name: "Clinical Focus Layout" },
    { id: "multiple-choice" as LayoutType, name: "Multiple Choice Layout" },
    { id: "multiple-choice-answer" as LayoutType, name: "Multiple Choice Answer Layout" },
    { id: "title-slide" as LayoutType, name: "Title Slide Layout" },
    { id: "important-notice" as LayoutType, name: "Important Notice Layout" },
    { id: "journey-overview" as LayoutType, name: "Journey Overview Layout" },
    { id: "detailed-roadmap" as LayoutType, name: "Detailed Roadmap Layout" },
    { id: "learning-objectives" as LayoutType, name: "Learning Objectives Layout" },
    { id: "content-priority" as LayoutType, name: "Content Priority Layout" }
  ];

  const renderLayout = () => {
    const props = {
      leftSection,
      rightSection,
      setLeftSection,
      setRightSection,
      isEditing
    };

    switch (currentLayout) {
      case "timeline":
        return <TimelineLayout {...props} />;
      case "grid":
        return <GridLayout {...props} />;
      case "split-category":
        return <SplitCategoryLayout {...props} />;
      case "three-card":
        return <ThreeCardLayout {...props} />;
      case "flow-diagram-left":
        return <FlowDiagramLeftLayout {...props} />;
      case "flow-diagram-right":
        return <FlowDiagramRightLayout {...props} />;
      case "comparison-table":
        return <ComparisonTableLayout {...props} />;
      case "clinical-focus":
        return <ClinicalFocusLayout {...props} />;
      case "multiple-choice":
        return <MultipleChoiceLayout {...props} />;
      case "multiple-choice-answer":
        return <MultipleChoiceAnswerLayout {...props} />;
      case "title-slide":
        return <TitleSlideLayout {...props} />;
      case "important-notice":
        return <ImportantNoticeLayout {...props} />;
      case "journey-overview":
        return <JourneyOverviewLayout {...props} />;
      case "detailed-roadmap":
        return <DetailedRoadmapLayout {...props} />;
      case "learning-objectives":
        return <LearningObjectivesLayout {...props} />;
      case "content-priority":
        return <ContentPriorityLayout {...props} />;
      default:
        return <TwoColumnLayout {...props} />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-gray-700">PowerPoint Slide Template</h1>
        <div className="flex gap-3">
          <div className="relative">
            <button
              onClick={() => setShowLayoutMenu(!showLayoutMenu)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <Layout className="w-4 h-4" />
              Choose Layout
            </button>
            {showLayoutMenu && (
              <div className="absolute top-full mt-2 right-0 bg-white border-2 border-blue-500 rounded-lg shadow-xl z-10 min-w-[240px]">
                {layouts.map((layout) => (
                  <button
                    key={layout.id}
                    onClick={() => {
                      setCurrentLayout(layout.id);
                      setShowLayoutMenu(false);
                    }}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg ${
                      currentLayout === layout.id ? "bg-blue-50 text-blue-700" : "text-gray-700"
                    }`}
                  >
                    {layout.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              isEditing 
                ? "bg-blue-600 text-white" 
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            <Edit2 className="w-4 h-4" />
            {isEditing ? "Done Editing" : "Edit Mode"}
          </button>
        </div>
      </div>

      {/* Slide Container */}
      <div className="bg-white shadow-2xl" style={{ aspectRatio: "16/9" }}>
        <div className="h-full flex flex-col">
          {/* Header Section - Fixed Height - Hidden for Multiple Choice, Title Slide, Important Notice, Journey Overview, and Detailed Roadmap */}
          {currentLayout !== "multiple-choice" && currentLayout !== "multiple-choice-answer" && currentLayout !== "title-slide" && currentLayout !== "important-notice" && currentLayout !== "journey-overview" && currentLayout !== "detailed-roadmap" && currentLayout !== "learning-objectives" && currentLayout !== "content-priority" && (
            <div className="border-b-2 border-gray-300 px-12 relative" style={{ height: "140px", flexShrink: 0 }}>
              <div className="pt-8">
                <h1 className="text-black text-5xl">{title}</h1>
                <p className="mt-2 text-gray-600 italic text-2xl">{subtitle}</p>
              </div>

              {/* Badge */}
              <div className="absolute top-8 right-12">
                <div className="bg-red-600 text-white px-6 py-2 rounded-lg text-2xl">
                  {badge}
                </div>
              </div>
            </div>
          )}

          {/* Content Section - Dynamic Layout - Takes remaining space */}
          <div className="flex-1 overflow-hidden">
            {renderLayout()}
          </div>

          {/* Footer Section - Fixed Height - Hidden for Multiple Choice, Title Slide, Important Notice, Journey Overview, and Detailed Roadmap */}
          {currentLayout !== "multiple-choice" && currentLayout !== "multiple-choice-answer" && currentLayout !== "title-slide" && currentLayout !== "important-notice" && currentLayout !== "journey-overview" && currentLayout !== "detailed-roadmap" && currentLayout !== "learning-objectives" && currentLayout !== "content-priority" && (
            <div className="bg-yellow-100 border-l-4 border-yellow-500 px-12" style={{ height: "120px", flexShrink: 0 }}>
              <div className="py-4">
                <h3 className="text-orange-600 text-2xl">{footerTitle}</h3>
                <p className="mt-2 text-gray-800 text-xl">{footerText}</p>
              </div>
            </div>
          )}

          {/* Copyright - Fixed Height - Hidden for Title Slide, Important Notice, Journey Overview, and Detailed Roadmap */}
          {currentLayout !== "title-slide" && currentLayout !== "important-notice" && currentLayout !== "journey-overview" && currentLayout !== "detailed-roadmap" && currentLayout !== "learning-objectives" && currentLayout !== "content-priority" && (
            <div className="bg-gray-100 px-12 border-t border-gray-200" style={{ height: "28px", flexShrink: 0 }}>
              <div className="py-1">
                <p className="text-gray-500 text-center text-sm leading-tight">{copyright}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
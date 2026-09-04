// =================================
//  IMPORTS
// =================================
import { LucideIcon } from "lucide-react";

// =================================
//  TOKENS
// =================================
const INK = "#171412";
const CREAM = "#F3EFE4";
const BADGE = "#D9D5C9";
const RED = "#C1272D";

// =================================
//  DIMENSIONS
// =================================
const ICON_SIZE = 150;
const ICON_GAP = 16;

// =================================
//  TYPES
// =================================
interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[];
  icon?: LucideIcon;
  accent?: boolean;
}

// =================================
//  COMPONENT
// =================================
export function ProjectCard({
  title,
  description,
  tags = [],
  icon: Icon,
  accent = false,
}: ProjectCardProps) {
  // =================================
  //  RENDER
  // =================================
  return (
    <div
      style={{
        background: CREAM,
        border: `3px solid ${INK}`,
        boxShadow: `6px 6px 0px ${INK}`,
        padding: "24px",
        display: "flex",
        gap: `${ICON_GAP}px`,
        cursor: "default",
        transition: "transform 120ms ease, box-shadow 120ms ease",
        width: "100%",
        boxSizing: "border-box",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translate(4px, 4px)";
        e.currentTarget.style.boxShadow = `2px 2px 0px ${INK}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translate(0px, 0px)";
        e.currentTarget.style.boxShadow = `6px 6px 0px ${INK}`;
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: `${ICON_SIZE}px`,
          height: `${ICON_SIZE}px`,
          minWidth: `${ICON_SIZE}px`,
          background: accent ? RED : BADGE,
          border: `2px solid ${INK}`,
          boxShadow: `3px 3px 0px ${INK}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          alignSelf: "flex-start",
        }}
      >
        {Icon && (
          <Icon size={28} color={accent ? "#fff" : INK} strokeWidth={2.25} />
        )}
      </div>

      {/* Content column: title, description, tags */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          flex: 1,
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "24px",
            fontWeight: 800,
            color: INK,
            fontFamily: "system-ui, sans-serif",
            lineHeight: 1.2,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            margin: 0,
            fontSize: "16px",
            lineHeight: 1.6,
            color: INK,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          {description}
        </p>

        {tags.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginTop: "auto",
            }}
          >
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  background: BADGE,
                  border: `2px solid ${INK}`,
                  boxShadow: `2px 2px 0px ${INK}`,
                  padding: "4px 12px",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                  color: INK,
                  fontFamily: "system-ui, sans-serif",
                  textTransform: "uppercase",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

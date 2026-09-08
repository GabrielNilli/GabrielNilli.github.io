// =================================
//  TYPES
// =================================
interface PhoneFrameProps {
  src: string;
  alt: string;
  className?: string;
}

// =================================
//  COMPONENT
// =================================
export default function PhoneFrame({ src, alt, className }: PhoneFrameProps) {
  // =================================
  //  RENDER
  // =================================
  return (
    <div
      className={`inline-block flex-shrink-0 border-4 border-[var(--border-color)]
                  bg-[var(--surface-color)] p-2 shadow-[6px_6px_0_var(--shadow-color)]
                  ${className ?? ""}`}
    >
      <img
        src={src}
        alt={alt}
        className="aspect-[9/19.5] w-full border-2 border-[var(--border-color)] object-cover"
      />
    </div>
  );
}

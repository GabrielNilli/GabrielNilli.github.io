// =================================
//  IMPORTS
// =================================
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import PhoneFrame from "./PhoneFrame";

// =================================
//  TYPES
// =================================
interface GalleryImage {
  src: string;
  alt: string;
}

interface ProjectGalleryProps {
  images: GalleryImage[];
}

// =================================
//  COMPONENT
// =================================
export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  // Chiudi con ESC
  useEffect(() => {
    if (!activeImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImage]);

  if (images.length === 0) return null;

  // =================================
  //  RENDER
  // =================================
  return (
    <>
      <div className="mb-8 flex gap-4 overflow-x-auto pb-2">
        {images.map((image) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveImage(image)}
            aria-label={`Espandi: ${image.alt}`}
            className="block w-[200px] shrink-0 cursor-zoom-in text-left transition-transform duration-150 hover:-translate-y-1"
          >
            <PhoneFrame src={image.src} alt={image.alt} className="w-full" />
          </button>
        ))}
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            aria-label="Chiudi"
            className="absolute right-5 top-5 flex size-10 cursor-pointer items-center justify-center border-2 border-[var(--border-color)] bg-[var(--surface-color)] text-[var(--text-color)] shadow-[3px_3px_0px_var(--shadow-color)]"
          >
            <X size={20} strokeWidth={2.5} />
          </button>

          <img
            src={activeImage.src}
            alt={activeImage.alt}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[85vh] max-w-full border-4 border-[var(--border-color)] object-contain shadow-[8px_8px_0px_rgba(0,0,0,0.5)]"
          />
        </div>
      )}
    </>
  );
}

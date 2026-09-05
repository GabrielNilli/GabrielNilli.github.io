// =================================
//  IMPORTS
// =================================
import ProfilePic from "./../../../../../images/profile/ProfilePic.jpg";

// =================================
//  COMPONENT
// =================================
export default function AvatarSection() {
  // =================================
  //  RENDER
  // =================================
  return (
    <>
      <div className="h-full min-h-84 overflow-hidden border-6 border-[var(--border-color)] bg-[var(--surface-muted-color)] shadow-[6px_6px_0px_var(--shadow-color)]">
        <img className="size-full object-cover" src={ProfilePic} alt="Gabriel Nilli" />
      </div>
    </>
  );
}

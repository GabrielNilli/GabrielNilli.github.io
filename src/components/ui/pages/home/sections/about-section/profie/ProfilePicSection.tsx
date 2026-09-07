// =================================
//  IMPORTS
// =================================
import ProfilePic from "./../../../../../../../images/profile/ProfilePic.jpg";

// =================================
//  COMPONENT
// =================================
export default function ProfilePicSection() {
  // =================================
  //  CONSTS
  // =================================

  // =================================
  //  RENDER
  // =================================
  return (
    <>
      <div className="border-6 size-40 border-[var(--border-color)] shadow-[6px_6px_0px_var(--shadow-color)] md:size-64">
        <img src={ProfilePic} />
      </div>
    </>
  );
}

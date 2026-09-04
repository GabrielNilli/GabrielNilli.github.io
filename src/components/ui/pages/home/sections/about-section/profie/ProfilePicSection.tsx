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
      <div className="border-6 size-64 shadow-[3px_3px_0px_#121212]">
        <img src={ProfilePic} />
      </div>
    </>
  );
}

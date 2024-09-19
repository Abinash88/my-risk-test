import { useState } from "react";

import Profile from "./profile";
import EditProfile from "./EditProfile";

const AccountProfile = () => {
  const [editpage, setEditPage] = useState(false);
  const handleEditPage = () => {
    setEditPage(true);
  };
  const handleExitEdit = () => {
    setEditPage(false);
  };
  return (
    <div>
      <h3 className="font-semibold text-2xl mb-5">Account Profile</h3>
      {editpage ? (
        <EditProfile handleExitEdit={handleExitEdit} />
      ) : (
        <Profile handleEditPage={handleEditPage} />
      )}
    </div>
  );
};

export default AccountProfile;

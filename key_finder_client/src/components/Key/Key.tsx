import React, { FC, useState } from "react";
import { KeyDto, UserDto } from "../../api/dto";
import { claimKey } from "../../api/keys";
import { showAlert } from "../../utils/alert";
import UserSelectionDialog from "../UserSelectionDialog/UserSelectionDialog";

interface KeyProps {
  data: KeyDto;
  reload: () => void;
  users: UserDto[];
}

const Key: FC<KeyProps> = (data) => {
  const [showDialog, setShowDialog] = useState(false);

  const handleShowDialog = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  const claim = async () => {
    try {
      await claimKey(data.data.keyId);
      data.reload();
      showAlert("You have successfully claimed the key!");
    } catch (error: any) {
      showAlert(error);
    }
  };

  const setSelectedUser = (user?: UserDto | null) => {
    
  }

  return (
    <div className="mb-2">
      {data.data.name}
      <button className="btn btn-warning m-2" onClick={claim}>
        Claim
      </button>
      <button className="btn btn-info" onClick={handleShowDialog}>
        Transfer
      </button>
      <UserSelectionDialog show={showDialog} onClose={handleCloseDialog} users={data.users} onUserSelect={setSelectedUser} />
    </div>
  );
};

export default Key;

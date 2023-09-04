import React, { FC, useState } from "react";
import { KeyDto, UserDto } from "../../api/dto";
import { claimKey, transferKey } from "../../api/keys";
import { showAlert } from "../../utils/alert";
import UserSelectionDialog from "../UserSelectionDialog/UserSelectionDialog";
import { getUser } from "../../utils/storage";

interface KeyProps {
  data: KeyDto;
  reload: () => void;
  users: UserDto[];
  member: UserDto;
}

const Key: FC<KeyProps> = (data) => {
  const [showDialog, setShowDialog] = useState(false);
  const currentUser = getUser();

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
      //showAlert("You have successfully claimed the key!");
    } catch (error: any) {
      showAlert(error);
    }
  };

  const transfer = async (userId: number) => {
    try {
      await transferKey(data.data.keyId, userId);
      data.reload();
      //showAlert("You have successfully transferred the key!");
    } catch (error: any) {
      showAlert(error);
    }
  };

  const setSelectedUser = (user?: UserDto | null) => {
    if (!user) {
      showAlert("Choose a user to transfer the key");
      return;
    }
    transfer(user.id!);
  };

  return (
    <div className="mb-2">
      {data.data.name}
      {currentUser?.id != data.member.id ? (
        <button className="btn btn-warning m-2" onClick={claim}>
          Claim
        </button>
      ) : (
        <button className="btn btn-info m-2" onClick={handleShowDialog}>
          Transfer
        </button>
      )}
      <UserSelectionDialog
        show={showDialog}
        onClose={handleCloseDialog}
        users={data.users}
        onUserSelect={setSelectedUser}
      />
    </div>
  );
};

export default Key;

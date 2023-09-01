import React, { FC } from "react";
import { KeyDto } from "../../api/dto";
import { claimKey } from "../../api/keys";
import { showAlert } from "../../utils/alert";

interface KeyProps {
  data: KeyDto;
  reload: () => void;
}

const Key: FC<KeyProps> = (data) => {
  const claim = async () => {
    try {
      await claimKey(data.data.keyId);
      data.reload();
      showAlert("You have successfully claimed the key!");
    } catch (error: any) {
      showAlert(error);
    }
  };

  return (
    <div className="mb-2">
      {data.data.name}
      <button className="btn btn-warning m-2" onClick={claim}>
        Claim
      </button>
      <button className="btn btn-info">Transfer</button>
    </div>
  );
};

export default Key;

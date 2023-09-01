import React, { FC } from "react";
import { KeyDto } from "../../api/dto";

interface KeyProps {
  data: KeyDto;
}

const Key: FC<KeyProps> = (data) => (
  <div className="mb-2">
    {data.data.name}
    <button className="btn btn-warning m-2">Claim</button>
    <button className="btn btn-info">Transfer</button>
  </div>
);

export default Key;

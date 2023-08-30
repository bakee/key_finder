import React, { FC } from "react";
import { MemberDto } from "../../api/dto";

interface MemberProps {
  member: MemberDto;
}

const Member: FC<MemberProps> = (data) => {
  const transferKey = () => {};

  return (
    <div className="card" style={{ width: 200 }}>
      <div className="card-body">
        <h3 className="card-title">{data.member.member.name}</h3>
        <h4 className="car-subtitle card-subtitle mb-2 text-muted">
          {data.member.member.email}
        </h4>

        {data.member.keys.map((k) => (
          <p className="card-text">{k.name}</p>
        ))}
        <button onClick={transferKey} className="btn btn-primary">
          Transfer
        </button>
      </div>
    </div>
  );
};

export default Member;

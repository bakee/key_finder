import React, { FC } from "react";
import { MemberDto } from "../../api/dto";
import Key from "../Key/Key";

interface MemberProps {
  member: MemberDto;
}

const Member: FC<MemberProps> = (data) => {
  const transferKey = () => {};
  const keys = data.member.keys;
  const hasAKey = keys.length > 0;
  const bgClass = hasAKey ? "bg-success" : "bg-secondary";

  return (
    <div className={`card ${bgClass} text-white mb-3`} style={{ width: 250 }}>
      <div className="card-body">
        <h4 className="car-subtitle card-subtitle mb-2">
          {data.member.member.name}
        </h4>
        {data.member.member.email}
        {hasAKey && (
          <div className="mt-3">
            <h5>Keys</h5>
            {keys.map((k) =>  <Key data={k} /> )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Member;

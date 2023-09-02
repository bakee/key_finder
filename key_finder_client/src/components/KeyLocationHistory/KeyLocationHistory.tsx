import React, { FC, useEffect, useState } from "react";
import { getToken } from "../../utils/storage";
import { CarDto, KeyLocationDto } from "../../api/dto";
import { getKeyLocationHistory } from "../../api/cars";
import { Table } from "react-bootstrap";
import {
  DatatableWrapper,
  TableBody,
  TableColumnType,
  TableHeader,
} from "react-bs-datatable";

interface KeyLocationHistoryProps {
  car: CarDto;
}

interface KeyLocationTable {
  key: string;
  handoverType: string;
  previousMember: string;
  member: string;
  created: string;
}

const KeyLocationHistory: FC<KeyLocationHistoryProps> = (data) => {
  const [keyLocations, setKeyLocations] = useState<KeyLocationTable[]>([]);

  useEffect(() => {
    const getLocations = async () => {
      const keyLocalions = await getKeyLocationHistory(data.car.id!);
      setKeyLocations(
        keyLocalions.map(
          (kl) =>
            ({
              key: kl.key.name,
              handoverType: kl.handoverType,
              previousMember: kl.previousMember?.name,
              member: kl.member?.name,
              created: kl.created.toString(),
            } as KeyLocationTable)
        )
      );
    };

    getLocations();
  }, []);

  const headers: TableColumnType<KeyLocationTable>[] = [
    { title: "Key", prop: "key" },
    { title: "Type", prop: "handoverType" },
    { title: "Previous User", prop: "previousMember" },
    { title: "User", prop: "member" },
    { title: "Date", prop: "created" },
  ];

  return (
    <div>
      <h1>Keys Location History</h1>
      <DatatableWrapper body={keyLocations} headers={headers}>
        <Table>
          <TableHeader />
          <TableBody />
        </Table>
      </DatatableWrapper>
    </div>
  );
};

export default KeyLocationHistory;

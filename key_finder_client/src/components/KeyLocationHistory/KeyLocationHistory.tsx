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
import { format, parse, parseJSON } from "date-fns";

interface KeyLocationHistoryProps {
  car: CarDto;
  reload: boolean;
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
            created: format(parseJSON(kl.created), "M/d/yyyy h:mm:ss aaa"),
          } as KeyLocationTable)
      )
    );
  };

  useEffect(() => {
    getLocations();
  }, [data.reload]);

  const headers: TableColumnType<KeyLocationTable>[] = [
    { title: "Date", prop: "created" },
    { title: "Key", prop: "key" },
    { title: "Member", prop: "member" },
    { title: "Previous Member", prop: "previousMember" },
    { title: "Transfer method", prop: "handoverType" },
  ];

  return (
    <div>
      <h4>Keys Location History</h4>
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

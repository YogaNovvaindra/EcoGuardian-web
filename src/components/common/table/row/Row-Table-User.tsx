import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/use-modal-store";
import { User } from "@prisma/client";
import { AnyARecord, AnyNsRecord } from "dns";
import React from "react";
import { UseFormRegister } from "react-hook-form";

interface Props {
  userData: any;
}

const RowTableUser: React.FC<Props> = ({ userData }) => {
  const { onOpen } = useModal();
  return (
    <>
      {userData.map((item: User) => (
        <tr key={item.id}>
          <td>{item.username}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.image}</td>
          <td>{item.role}</td>
          <td>
            <Button onClick={() => onOpen("deleteUser", { User: item })}>
              Hapus
            </Button>
            <Button onClick={() => onOpen("createUser")}>Tambah</Button>
            <Button onClick={() => onOpen("editUser", { User: item })}>
              Edit
            </Button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default RowTableUser;

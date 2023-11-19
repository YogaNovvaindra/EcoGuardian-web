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
        <tr key={item.id} className="border-b-2">
          <td className="styletablebodyuser">{item.username}</td>
          <td className="styletablebodyuser">{item.name}</td>
          <td className="styletablebodyuser">{item.email}</td>
          <td className="styletablebodyuser">{item.image}</td>
          <td className="styletablebodyuser">{item.role}</td>
          <td className="styletablebodyuser">
            <Button onClick={() => onOpen("deleteUser", { User: item })}>
              Hapus
            </Button>
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

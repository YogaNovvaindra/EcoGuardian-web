import { useModal } from "@/hooks/use-modal-store";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Switch } from "../../ui/switch";
import { BiPencil } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { ModalProvider } from "../../providers/modal-provider";
import React from "react";
import { ModalType } from "../../../hooks/use-modal-store";
import DataCardMonitoringIot from "./Datacard-MapmonitoringIot";
import { esp } from "@prisma/client";

interface Props {
  espData: esp;
}

const CardMapMonitoringIot: React.FC<Props> = ({ espData }) => {
  const { onOpen } = useModal();

  return (
    <section className="flex flex-col gap-6 bg-light-1 rounded-md p-6 border">
      <div>
        <div className="flex justify-between">
          <div className="">
            <h2 className="text-body-semibold">{espData.nama}</h2>
            <p>Devices located in location 1</p>
          </div>
          <Switch />
        </div>
        <DataCardMonitoringIot espData={espData} />
      </div>
      {/* <iframe
        width="600"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        src={
          "https://www.google.com/maps/embed/v1/view?key=AIzaSyAOhk5jGMgW-ZI6G3iwoDg4YSzrzRFCgwE&center=-8.1583021,113.7241236&zoom=15"
        }
        allowFullScreen
      ></iframe> */}
      <div className="flex justify-end gap-2">
        <Button
          variant="ghost"
          onClick={() => onOpen("deleteEsp", { esp: espData })}
        >
          <AiFillDelete></AiFillDelete>
        </Button>
        <Button onClick={() => onOpen("editEsp", { esp: espData })}>
          <BiPencil />
        </Button>
      </div>
    </section>
  );
};

export default CardMapMonitoringIot;

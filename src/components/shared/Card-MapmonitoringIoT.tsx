import { useModal } from "@/hooks/use-modal-store";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import { BiPencil } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { ModalProvider } from "../providers/modal-provider";
const CardMapMonitoringIot = () => {
  const { onOpen } = useModal();
  return (
    <section className="flex flex-col gap-6 bg-light-1 rounded-md p-6 border">
      <div className="flex justify-between">
        <div className="">
          <h2 className="text-body-semibold">Esp 1</h2>
          <p>Devices located in location 1</p>
        </div>
        <Switch />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <p className="w-40">DHT 22</p>
          <Input type="text" value="nilai DHT 22" disabled />
        </div>
        <div className="flex gap-4 items-center">
          <p className="w-40">Temperature</p>
          <Input type="text" value="nilai Temperature" disabled />
        </div>
        <div className="flex gap-4 items-center">
          <p className="w-40">CO2</p>
          <Input type="text" value="nilai CO2" disabled />
        </div>
        <div className="flex gap-4 items-center">
          <p className="w-40">Dangerous Gas</p>
          <Input type="text" value="nilai Dangerouse Gas" disabled />
        </div>
        <div className="flex gap-4 items-center">
          <p className="w-40">Pollution</p>
          <Input type="text" value="nilai Pollution" disabled />
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <Button variant="ghost" onClick={() => onOpen("deleteEsp")}>
          <AiFillDelete></AiFillDelete>
        </Button>
        <Button onClick={() => onOpen("editEsp")}>
          <BiPencil />
        </Button>
      </div>
    </section>
  );
};

export default CardMapMonitoringIot;

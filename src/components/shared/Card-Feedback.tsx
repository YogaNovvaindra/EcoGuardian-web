import { Button } from "../ui/button";
import { BsThreeDotsVertical } from "react-icons/bs";

const CardFeedback = () => {
  return (
    <div className="flex justify-between pb-2 border-b-2">
      <div>
        <p className="text-body-normal">Lorem ipsum dolor sit amet.</p>
        <p>12:33 Tuesday, 09 September 2023</p>
      </div>
      <Button variant="ghost" className="text-[24px]" size="iconAdd">
        <BsThreeDotsVertical />
      </Button>
    </div>
  );
};

export default CardFeedback;

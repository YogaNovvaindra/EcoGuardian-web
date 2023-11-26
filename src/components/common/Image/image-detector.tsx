import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { FC, useEffect } from "react";

interface Props {
  item: {
    id: string;
  };
}

const ImageDetector: FC<Props> = ({ item }) => {
  const {
    data: imageData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => {
      const { data } = await axios.get(`/api/image_detector/image/${item.id}`);

      console.log("data dashboard: ", data);

      return data;
    },
  });
  return (
    <div className="w-[800px]">
      <Image alt="" src={imageData} width={100} />
    </div>
  );
};

export default ImageDetector;

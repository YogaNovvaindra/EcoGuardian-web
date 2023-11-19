"use client";

import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Props {}
const ImageUser = () => {
  return (
    <div>
      <Input id="image" type="file" />
    </div>
  );
};

export default ImageUser;

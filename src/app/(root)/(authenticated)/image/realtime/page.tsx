"use client";

import NavbarImageDetector from "@/components/common/navbar/Navbar-Imagedetector";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const [objectInfo, setObjectInfo] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const source = new EventSource("http://192.168.192.207:5000/object_info");
    source.onmessage = function (event) {
      setObjectInfo(event.data);
    };

    // Cleanup event source on component unmount
    return () => source.close();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <section className="h-full w-full flex flex-col gap-4 md:overflow-auto">
      <div>
        <h1 className="text-heading1-semibold">Air Pollution Image Detector</h1>
        <span>{pathname}</span>
      </div>
      <div className="flex flex-col h-full overflow-auto">
        <NavbarImageDetector />
        <div className="w-full h-full bg-light-1 flex flex-col gap-4 rounded-md h-40 p-6 overflow-auto">
          <p>{objectInfo}</p>
          <iframe
            src="http://192.168.192.207:5000/video_feed"
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Page;
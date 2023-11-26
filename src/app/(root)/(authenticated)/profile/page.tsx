"use client";

import TableUser from "@/components/common/table/Table-User";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useModal } from "@/hooks/use-modal-store";
import { User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Import, Table } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";

type Props = {};

const Page = () => {
  const { data: session } = useSession();


  const { onOpen } = useModal();
  const pathname = usePathname();

  return (
    <section className="h-full w-full flex flex-col gap-4 md:overflow-auto">
      <div>
        <h1 className="text-heading1-semibold">Profile</h1>
        <span>{pathname}</span>
      </div>
      <div className="w-full h-full bg-light-1 flex flex-col gap-4 rounded-md h-40 p-6 overflow-auto">
        <div className="flex flex-col gap-2">
          <h2 className="text-heading2-semibold">Profile Setting</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="flex gap-10">
          <div className="w-96 bg-red-500">
            <div>
              <Image
                alt=""
                src={"/public/../assets/img/example-user.jpeg"}
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-4">
              {/* <div className="flex flex-col gap-2">
                <p className="w-40">ID</p>
                <Input
                  type="text"
                  value={session?.user. || ""}
                  disabled
                />
              </div> */}
              <div className="flex flex-col gap-2">
                <p className="w-40">Username</p>
                <Input
                  type="text"
                  value={session?.user.username || ""}
                  disabled
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="w-40">Name</p>
                <Input type="text" value={session?.user.name || ""} disabled />
              </div>
              <div className="flex flex-col gap-2">
                <p className="w-40">Email</p>
                <Input
                  type="email"
                  value={session?.user.email || ""}
                  disabled
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="w-40">Role</p>
                <Input type="text" value={session?.user.role} disabled />
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <Button variant="destructive">Delete</Button>
              <Button variant="default">Update</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;

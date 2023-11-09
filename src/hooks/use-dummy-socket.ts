import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { dummy } from "@prisma/client"; // Import model dummy dari Prisma

import { useSocket } from "@/components/providers/socket-provider";

type DummySocketProps = {
  addKey: string;
  updateKey?: string;
  queryKey: string;
};

export const useDummySocket = ({
  addKey,
  updateKey,
  queryKey,
}: DummySocketProps) => {
  const { socket } = useSocket();
  const queryClient = useQueryClient();

  function showNotification(title: string, options: NotificationOptions) {
    if (Notification.permission === "granted") {
      new Notification(title, options);
    }
  }

  // Di dalam fungsi yang dipanggil saat event "addKey" dari WebSocket muncul
  useEffect(() => {
    if (socket) {
      const handleAddKey = (dummyData: dummy) => {
        // Mengecek izin notifikasi
        if (Notification.permission !== "granted") {
          // Jika pengguna belum memberikan izin, tampilkan permintaan izin notifikasi
          Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
              // Izin diberikan, tampilkan notifikasi
              showNotification("Pesan Baru", {
                body: `${dummyData.createdAt}`,
              });
            }
          });
        } else {
          // Izin sudah diberikan, tampilkan notifikasi
          showNotification("Pesan Baru", { body: `${dummyData.createdAt}` });
        }
      };

      socket.on(addKey, handleAddKey);

      return () => {
        socket.off(addKey, handleAddKey);
      };
    }
  }, [socket, addKey]);

  useEffect(() => {
    if (!socket) {
      return;
    }

    // socket.on(updateKey, (dummyData: dummy) => {
    //   queryClient.setQueryData([queryKey], (oldData: any) => {
    //     if (!oldData || !oldData.pages || oldData.pages.length === 0) {
    //       return oldData;
    //     }

    //     const newData = oldData.pages.map((page: any) => {
    //       return {
    //         ...page,
    //         dummyData: page.dummyData.map((item: dummy) => {
    //           if (item.id === dummyData.id) {
    //             return dummyData;
    //           }
    //           return item;
    //         }),
    //       };
    //     });

    //     return {
    //       ...oldData,
    //       pages: newData,
    //     };
    //   });
    // });

    socket.on(addKey, (dummyData: dummy) => {
      queryClient.setQueryData([queryKey], (oldData: any) => {
        if (!oldData || !oldData.pages || oldData.pages.length === 0) {
          return {
            pages: [
              {
                dummyData: [dummyData],
              },
            ],
          };
        }

        const newData = [...oldData.pages];

        if (newData[0].dummyData && Array.isArray(newData[0].dummyData)) {
          newData[0] = {
            ...newData[0],
            dummyData: [dummyData, ...newData[0].dummyData],
          };
        } else {
          newData[0].dummyData = [dummyData];
        }
        return {
          ...oldData,
          pages: newData,
        };
      });
    });

    return () => {
      if (updateKey) {
        socket.off(updateKey);
      }
      socket.off(addKey);
    };
  }, [queryClient, addKey, queryKey, socket, updateKey]);
};

// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectLabel,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import { selectItemFeedbackQuestions as itemList } from "@/constants";
// import { useModal } from "@/hooks/use-modal-store";

// export const CreateFeedbacResponseModal = () => {
//   const { isOpen, onClose, type, data } = useModal();

//   const isModalOpen = isOpen && type === "createFeedbackResponse";

//   const handleClose = () => {
//     onClose();
//   };
//   return (
//     <Dialog open={isModalOpen} onOpenChange={handleClose}>
//       <DialogContent className="bg-neutral-100 text-black p-0 overflow-hidden">
//         <DialogHeader className="pt-8 px-6">
//           <DialogTitle className="text-2xl font-bold">
//             Tambah Response
//           </DialogTitle>
//           <DialogDescription>Lorem ipsum dolor sit amet</DialogDescription>
//         </DialogHeader>
//         <form className="flex flex-col gap-10 px-6">
//           <div className="flex flex-col gap-2">
//             <Label htmlFor="">Lorem ipsum dolor sit amet.</Label>
//             <Textarea id="" placeholder="Lorem ipsum dolor sit amet" />
//             {/* {errors.nama && <div>{errors.nama.message}</div>} */}
//           </div>
//           <div className="flex flex-col gap-2">
//             <Label htmlFor="">Lorem ipsum dolor sit amet.</Label>
//             <Select>
//               <SelectTrigger>
//                 <SelectValue placeholder="default" />
//               </SelectTrigger>
//               <SelectContent>
//                 {itemList.map((item, index) => (
//                   <SelectItem key={index} value={item}>
//                     {item}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//             {/* {errors.nama && <div>{errors.nama.message}</div>} */}
//           </div>
//           <DialogFooter className="px-6 pb-8">
//             <Button
//               type="button"
//               variant="default"
//               className="bg-neutral-800 hover:bg-neutral-800/80 text-light-2"
//               onClick={handleClose}
//             >
//               Clear
//             </Button>

//             <Button variant="themeMode">Save</Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };

import { Card, CardContent } from "@/components/ui/card";
import { IconTool } from "@tabler/icons-react";
import { IconMail } from "@tabler/icons-react";
import { IconX } from "@tabler/icons-react";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import Experience from "../modalContent/Experience";
import Contact from "../modalContent/Contact";

export default function NavBlocks() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-5 mt-[10px] sm:mt-[20px] w-full">
      <Dialog>
        <DialogTrigger asChild>
          <Card className="hover-text-effect-nolift cursor-pointer h-[150px] sm:h-full">
            <CardContent className="p-5 flex flex-col items-center justify-center h-full">
              <div className="flex flex-col items-center justify-center h-40">
                <IconTool size={64} stroke={1.2} />
              </div>
              <span className="text-2xl font-thin relative top-[-15px] sm:top-[-25px]">
                Experience
              </span>
            </CardContent>
          </Card>
        </DialogTrigger>

        <DialogContent className="w-[100%] max-w-[1200px] h-full lg:h-[calc(100%_-_20px)] sm:rounded-none px-[20px] md:px-20 focus-visible:outline-none">
          <div className="overflow-y-scroll scrollbar-hide mt-8">
            <DialogClose asChild>
              <div className="absolute right-[15px] top-[15px] hover:text-teal-400 hover-text-effect-plain cursor-pointer">
                <IconX size={32} stroke={1} />
              </div>
            </DialogClose>

            <Experience />
          </div>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Card id="contact-card" className="hover-text-effect-nolift cursor-pointer h-[150px] sm:h-full">
            <CardContent className="p-5 flex flex-col items-center justify-center h-full">
              <div className="flex flex-col items-center justify-center h-40">
                <IconMail size={64} stroke={1.2} />
              </div>
              <span className="text-2xl font-thin relative top-[-15px] sm:top-[-25px]">
                Contact
              </span>
            </CardContent>
          </Card>
        </DialogTrigger>

        <DialogContent
          className={`w-[90%] sm:w-[100%] md:max-w-[600px] lg:max-w-[800px] h-[320px] md:h-[525px] sm:rounded-none px-10 md:px-20 focus-visible:outline-none`}
        >
          <div className="flex jusitfy-end">
            <DialogClose asChild>
              <div className="absolute right-[15px] top-[15px] hover:text-teal-400 hover-text-effect-plain cursor-pointer">
                <IconX size={32} stroke={1} />
              </div>
            </DialogClose>
          </div>

          <Contact />
        </DialogContent>
      </Dialog>
    </div>
  );
}

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { IconTie } from "@tabler/icons-react";
import { IconAt } from "@tabler/icons-react";
import { IconSend2 } from "@tabler/icons-react";
import { IconX } from "@tabler/icons-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Experience from "../modalContent/Experience"

export default function NavBlocks() {
  return (
    <div className="grid grid-cols-2 gap-5 mt-[20px] w-full">
      <Dialog>
        <DialogTrigger asChild>
          <Card className="hover-text-effect-nolift cursor-pointer">
            <CardContent className="p-5 flex flex-col items-center justify-center h-full">
              <div className="flex flex-col items-center justify-center h-40">
                <IconTie size={64} stroke={1.2} />
              </div>
              <span className="text-2xl font-thin relative top-[-25px]">
                Experience
              </span>
            </CardContent>
          </Card>
        </DialogTrigger>

        <DialogContent className="w-[100%] max-w-[1200px] h-[calc(100%_-_20px)] sm:rounded-none px-10 md:px-20 focus-visible:outline-none">
          <div className="">
            <DialogClose asChild>
              <div className="absolute right-[20px] top-[20px] hover:text-teal-400 hover-text-effect-plain cursor-pointer">
                <IconX size={32} stroke={1} />
              </div>
            </DialogClose>

            <Experience />
          </div>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Card className="hover-text-effect-nolift cursor-pointer">
            <CardContent className="p-5 flex flex-col items-center justify-center h-full">
              <div className="flex flex-col items-center justify-center h-40">
                <IconAt size={64} stroke={1.2} />
              </div>
              <span className="text-2xl font-thin relative top-[-25px]">
                Contact
              </span>
            </CardContent>
          </Card>
        </DialogTrigger>

        <DialogContent className="w-[100%] md:max-w-[600px] lg:max-w-[800px] h-[525px] sm:rounded-none px-10 md:px-20 focus-visible:outline-none">
          <div className="flex jusitfy-end">
            <DialogClose asChild>
              <div className="absolute right-[20px] top-[20px] hover:text-teal-400 hover-text-effect-plain cursor-pointer">
                <IconX size={32} stroke={1} />
              </div>
            </DialogClose>
          </div>

          <div class="w-full flex items-center">
            <form class="w-full">
              <div class="mb-4 pt-4">
                <Input
                  class="h-[50px] appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div class="mb-4">
                <Input
                  class="h-[50px] appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Email Address"
                />
              </div>
              <div class="mb-6">
                <textarea
                  class="h-[200px] appearance-none resize-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Message"
                ></textarea>
              </div>
              <div class="flex items-center justify-center">
                <button
                  class="flex justify-center items-center w-full max-w-[100px] h-[45px] bg-white hover:bg-teal-400 text-teal-400 hover:text-white hover-text-effect-plain border border-teal-400 font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  <IconSend2 />
                </button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

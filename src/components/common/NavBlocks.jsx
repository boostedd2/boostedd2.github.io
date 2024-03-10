import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { IconForklift } from '@tabler/icons-react';
import { IconAt } from '@tabler/icons-react';


export default function NavBlocks() {
  return (
    <div className="grid grid-cols-2 gap-5 mt-[20px] w-full">
      <Card className="hover-text-effect-nolift cursor-pointer">
        <CardContent className="p-5 flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center h-40">
            <IconForklift size={64} stroke={1.2} />
          </div>
          <span className="text-2xl font-thin">Experience</span>
        </CardContent>
      </Card>
      <Card className="hover-text-effect-nolift cursor-pointer">
        <CardContent className="p-5 flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center h-40">
            <IconAt size={64} stroke={1.2} />
          </div>
          <span className="text-2xl font-thin">Contact</span>
        </CardContent>
      </Card>
    </div>
  );
}

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function SkillItem({ image, title }) {
  return (
    <Card className="xs:w-[100%]">
      <CardContent className="p-5 flex flex-col items-center justify-between">
        <div className="flex flex-col items-center justify-center h-40">
          <img src={image} className="object-contain h-full" alt={title} />
        </div>
        <span className="mt-3 text-2xl">{title}</span>
      </CardContent>
    </Card>
  );
}

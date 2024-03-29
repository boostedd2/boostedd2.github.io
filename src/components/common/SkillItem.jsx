import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function SkillItem({ image, title }) {
  return (
    <Card className="xs:w-[100%] hover-text-effect">
      <CardContent className="p-5 flex flex-col items-center justify-between">
        <div className="flex flex-col items-center justify-center h-[80px] sm:h-[120px] md:h-40">
          <img src={image} loading="lazy" className="object-contain h-full" alt={title} />
        </div>
        <span className="mt-3 text-2xl font-thin hidden md:block">{title}</span>
      </CardContent>
    </Card>
  );
}

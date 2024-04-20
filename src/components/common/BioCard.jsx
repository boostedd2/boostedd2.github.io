import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BioCard() {
  return (
    <div id="bio-content-wrapper">
      <Card className="xs:w-[100%] mt-[10px] sm:mt-[20px] sm:p-0 md:p-5">
        <CardHeader className="pb-2 sm:pb-6">
          <CardTitle className="text-3xl text-teal-400">Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-normal sm:leading-relaxed">
          I'm Luke, a full-stack software developer located in Bonita Springs, Florida. I have years of professional experience building custom web applications and years of previous experience working in the I.T. field, supporting small businesses. My two favorite programming languages to use are Python and JavaScript, as both of these languages are extremely versatile when it comes to building custom software.
          </p>
          <p className="leading-normal sm:leading-relaxed mt-4">
            I possess a wide range of experience in developing software, where I've taken on the tasks of designing software architecture, DevOps implementation, ongoing maintenance of existing systems, scripting, and consulting.
          </p>
          <p className="leading-normal sm:leading-relaxed mt-4">
            I really enjoy building software and spend a lot of my time either
            writing software or studying software architecture, and I strive to create great products and user experiences.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

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
      <Card className="xs:w-[100%] sm:px-0 md:px-5 sm:py-0 md:py-10">
        <CardHeader className="pb-2 sm:pb-6">
          <CardTitle className="text-3xl text-teal-400">Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-normal sm:leading-relaxed">
            I'm Luke, a full stack software
            developer located in Bonita Springs, Florida. I have years of
            professional experience building custom web applications, and years of previous experience working in
            I.T., supporting small businesses. My two favorite programming
            languages of use are Python and JavaScript, both of these languages
            have great community support, and they're both extremely versatile.
          </p>
          <p className="leading-normal sm:leading-relaxed mt-4">
            My experience includes building a wide range of applications, and taking on the tasks of: application architecture, devops, maintaining existing applications, scripting, and consulting.
          </p>
          <p className="leading-normal sm:leading-relaxed mt-4">
            I really enjoy building software and spend a lot of my time either
            writing software or reading books about software, and my goal is to create great products and user experiences.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

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
        <CardHeader>
          <CardTitle className="text-3xl text-teal-400">Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed">
            Welcome to my porfolio site. I'm Luke, a full stack software
            developer located in Bonita Springs, Florida. I have years of
            professional experience building completely custom web applications
            from the ground up, and also years of previous experience working in
            I.T., supporting small businesses. My two favorite programming
            languages of use are Python and JavaScript, both of these languages
            have great community support, and have proven to be extremely
            versatile across many different domains.
          </p>
          <p className="leading-relaxed mt-4">
            My experience includes building a wide range of applications, and
            the tasks of: architecture and design, DevOps and underlying server
            configuration, maintaining existing applications, scripting and
            automation, and consulting.
          </p>
          <p className="leading-relaxed mt-4">
            I really enjoy building software and spend a lot of my time either
            writing software or reading books about software architecture and
            best practices. Most of all, I am dedicated to learning as much as I
            can about software, and strive to create great products and
            experiences as a team.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

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
import SkillItem from "./SkillItem";

export default function SkillsCard() {
  return (
    <div className="h-screen">
    <Card className="xs:w-[100%] sm:p-0 md:p-5">
      <CardHeader>
        <CardTitle className="text-3xl">Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mt-10">
          <h3 className="text-2xl">Backend</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-5">
            <SkillItem
              image={"/images/Ansible-Community-Mark-Black.svg"}
              title={"Ansible"}
            />
            <SkillItem
              image={"/images/Terraform_PrimaryLogo_Color_RGB.svg"}
              title={"Terraform"}
            />
            <SkillItem
              image={"/images/cloud-init-orange.svg"}
              title={"Cloud-Init"}
            />
            <SkillItem
              image={"/images/docker-mark-blue.svg"}
              title={"Docker"}
            />
            <SkillItem
              image={"/images/Linux_Logo_in_Linux_Libertine_Font.svg"}
              title={"Linux"}
            />
            <SkillItem
              image={"/images/Nginx_logo.svg"}
              title={"NGINX"}
            />
            <SkillItem
              image={"/images/Postgresql_elephant.svg"}
              title={"PostGreSQL"}
            />
            <SkillItem
              image={"/images/MongoDB_Logomark_ForestGreen.svg"}
              title={"MongoDB"}
            />
            <SkillItem
              image={"/images/python-logo-only.svg"}
              title={"Python"}
            />
            <SkillItem
              image={"/images/Node.js_logo.svg"}
              title={"NodeJS"}
            />
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl">Frontend</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-5">
            <SkillItem
              image={"/images/HTML5_logo_and_wordmark.svg"}
              title={"HTML"}
            />
            <SkillItem
              image={"/images/CSS3_logo_and_wordmark.svg"}
              title={"CSS"}
            />
            <SkillItem
              image={"/images/Unofficial_JavaScript_logo_2.svg"}
              title={"JavaScript"}
            />
            <SkillItem
              image={"/images/React-icon.svg"}
              title={"ReactJS"}
            />
            <SkillItem
              image={"/images/Nextjs-logo.svg"}
              title={"NextJS"}
            />
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  );
}

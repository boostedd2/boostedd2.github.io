import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BioCard() {
  return (
    <div id="bio-content-wrapper">
      <Card className="xs:w-[100%] mt-[10px] sm:mt-[20px] sm:p-0 md:p-5">
        <CardHeader className="pb-2 sm:pb-6">
          <CardTitle className="text-3xl text-teal-400">About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-normal sm:leading-relaxed">
            Based in Bonita Springs, Florida. I’m a full-stack software
            developer with a strong background in I.T. and extensive experience
            in building custom web applications. My work focuses on utilizing
            Python and JavaScript to create versatile and robust software
            solutions.
          </p>
          <p className="leading-normal sm:leading-relaxed mt-4">
            Key Skills:
          </p>
          <ul className="mt-3 pl-[25px] list-disc">
            <li className="mt-2">Building RESTful APIs using Django and NodeJS</li>
            <li className="mt-2">Building dynamic frontend applications</li>
            <li className="mt-2">Creating seamless integrations with 3rd party APIs</li>
            <li className="mt-2">Software architecture and design</li>
            <li className="mt-2">DevOps implementation</li>
            <li className="mt-2">Ongoing system maintenance</li>
            <li className="mt-2">Scripting and automation</li>
            <li className="mt-2">Consulting and technical support</li>
          </ul>
          <p className="leading-normal sm:leading-relaxed mt-4">
            I’m passionate about creating great products and user experiences,
            dedicating much of my time to developing software and continuously
            improving my knowledge of software architecture.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

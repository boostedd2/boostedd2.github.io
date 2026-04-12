import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BioCard() {
  return (
    <div id="bio-content-wrapper">
      <Card className="xs:w-[100%] mt-[10px] sm:mt-[20px] sm:p-0 md:p-5 border-none shadow-none">
        <CardHeader className="pb-2 sm:pb-6">
          <CardTitle className="text-3xl text-slate-700">About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-normal sm:leading-relaxed">
            Based in Bonita Springs, Florida, I’m a full-stack software
            developer with a strong background in IT and extensive experience
            building custom web applications. My work focuses on utilizing
            Python and JavaScript to create versatile and robust software
            solutions.
          </p>
          <p className="leading-normal font-semibold text-slate-600 sm:leading-relaxed mt-4">
            Key skills include:
          </p>
          <ul className="mt-3 pl-[25px] list-disc">
            <li className="mt-2">Designing scalable application architecture</li>
            <li className="mt-2">Developing modern full-stack web applications</li>
            <li className="mt-2">Cloud infrastructure and DevOps tooling</li>
            <li className="mt-2">Automation, scripting, and internal tool development</li>
            <li className="mt-2">Proficiency with Python and JavaScript frameworks</li>
            <li className="mt-2">Experience leading targeted initiatives or MVPs</li>
            <li className="mt-2">Cross-team collaboration</li>
            <li className="mt-2">Writing technical documentation</li>
            <li className="mt-2">Partnering with stakeholders and product teams</li>
          </ul>
          <p>&nbsp;</p>
          <p className="leading-normal sm:leading-relaxed mt-4">
            I’m passionate about creating great products and user experiences,
            dedicating much of my time to developing software and continuously
            improving my knowledge of software development practices.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

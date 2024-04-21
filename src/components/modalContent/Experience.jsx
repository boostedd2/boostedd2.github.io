export default function Experience() {
  return (
    <div class="w-full py-5 pb-10 sm:pb-20 sm:pb-0 mb-[50px] sm:mb-0">
      <div>
        <span className="font-semibold italic text-sm text-slate-500 relative top-[5px]">
          Doc4 (2021 - present)
        </span>
        <h5 className="font-medium text-lg">Full-stack Software Developer</h5>
        <h6 className="font-thin text-slate-400 relative top-[-4px]">
          Remote (Full-time)
        </h6>
        <hr className="w-[275px] mt-2 opacity-[50%]" />

        <ul className="mt-5 pl-[25px] list-disc">
          <li className="mt-1">
            Build SaaS applications used by small to medium sized businesses.
          </li>
          <li className="mt-1">
            Responsible for defining the software stack as well as the
            architecture and design used to structure our applications.
          </li>
          <li className="mt-1">
            Build custom APIs using Django or Strapi as a headless CMS, and if
            needed, embed custom UIs into the default Django or Strapi admin
            interface.
          </li>
          <li className="mt-1">
            Convert Adobe XD or Figma designs into complete frontend
            applications.
          </li>
          <li className="mt-1">Scripting and automation.</li>
          <li className="mt-1">
            Deploy and maintain servers, applications, and databases.
          </li>
        </ul>

        <h6 className="text-md text-slate-700 font-semibold mt-[30px]">
          Highlights:
        </h6>
        <p className="mt-1">
          Manage all of the technical details for building applications,
          gathering requirements, choosing the correct software stack for our
          needs, and preparing the production environment for deploying
          applications.
        </p>
        <p className="mt-4">
          Created a city management application that pulls large sets of data
          from an ArcGIS API, stores the data in a database with added spatial
          support using GIS extensions, and allows displaying and manipulating
          the GIS data on a map. This took several different techniques to
          ensure that accessing thousands of layer features, processing and
          merging separate user managable layers, and rendering them on the
          client side was performant enough to be usable.
        </p>
      </div>

      <div className="mt-[100px] sm:mt-[125px]">
        <span className="font-semibold italic text-sm text-slate-500 relative top-[5px]">
          Adaptive Computing Inc. (7/2023 - 4/2024)
        </span>
        <h5 className="font-medium text-lg">Full-stack Software Developer</h5>
        <h6 className="font-thin text-slate-400 relative top-[-4px]">
          Remote (Contract)
        </h6>
        <hr className="w-[275px] mt-2 opacity-[50%]" />

        <ul className="mt-5 pl-[25px] list-disc">
          <li className="mt-1">
            Add and maintain features for an application called On-demand Data
            Center (NodeJS, ReactJS, Go), used for creating, deploying, and
            managing High Performance Computing clusters in the cloud for our
            customers supercomputing needs.
          </li>
          <li className="mt-1">
            Experience working with major cloud providers: AWS, Azure, GCP,
            Oracle, and Open Telekom Communications.
          </li>
          <li className="mt-1">
            Build cloud images that contained the neccessary software for
            operating HPC clusters in the cloud using Ansible and Cloud-Init.
          </li>
          <li className="mt-1">
            Deploy HPC clusters created from custom cloud images to the cloud
            using Terraform and Cloud-Init.
          </li>
          <li className="mt-1">
            Add features to support running the Extreme-scale Scientific
            Software Stack (E4S) on our HPC clusters.
          </li>
        </ul>

        <h6 className="text-md text-slate-700 font-semibold mt-[30px]">
          Highlights:
        </h6>
        <p className="mt-1">
          Created a VNC session management system that is used to allow remote
          GUI access with accelerated graphics to the head node of a
          multi-instance GPU cluster in the cloud. The feature was demoed at{" "}
          <a
            className="text-teal-400"
            href="https://sc23.supercomputing.org/"
            target="_blank"
          >
            SC23
          </a>{" "}
          in Denver, CO as a significant feature of ODDC.
        </p>
        <p className="mt-4">
          This required me to create the OS configuration and install required
          software for Ubuntu, Rocky8, and SLES15 by leveraging Ansible from
          within our nodeJS application.
        </p>
        <p className="mt-4">
          I configured the server to allow users that exist within the On-demand
          Data Center application to create a VNC session from the application
          UI via a button. The button would fire off a request to a custom API
          endpoint to create VNC sessions based on unique tokens to allow
          multiple users to use the same VNC service with separate sessions.
          Once the session was created, the application displays a popup window
          with the login screen for the VNC connection, where the user could log
          in with their username and password. After logging in, the user is
          given full GUI access to their head node of the cluster with
          accelerated graphics.
        </p>
      </div>

      <div className="mt-[100px] sm:mt-[125px]">
        <span className="font-semibold italic text-sm text-slate-500 relative top-[5px]">
          Altiview Technology Group (2020 - 2021)
        </span>
        <h5 className="font-medium text-lg">Software Developer</h5>
        <h6 className="font-thin text-slate-400 relative top-[-4px]">
          Remote (Contract)
        </h6>
        <hr className="w-[275px] mt-2 opacity-[50%]" />

        <ul className="mt-5 pl-[25px] list-disc">
          <li className="mt-1">
            Build several ReactJS pages and components for various web
            applications while referencing Photoshop design files.
          </li>
          <li className="mt-1">
            Push a project built with NodeJS and ReactJS to production.
          </li>
          <li className="mt-1">Add new features to a Django application.</li>
          <li className="mt-1">
            Work with the lead developer and the team to deliver completed
            projects.
          </li>
        </ul>

        <h6 className="text-md text-slate-700 font-semibold mt-[30px]">
          Highlights:
        </h6>
        <p className="mt-1">
          Although I already deployed a few of my own personal projects before I
          got into this role, this was the first role where I was tasked with
          finishing an application, and deploying the project for production.
        </p>
      </div>
    </div>
  );
}

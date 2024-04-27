export default function Experience() {
  return (
    <div class="w-full py-5 pb-0 sm:pb-20 mb-[50px] sm:mb-0">
      <div>
        <span className="font-semibold italic text-sm text-slate-500 relative left-[1px] top-[2px]">
          Doc4 (2021 - present)
        </span>
        <h5 className="font-medium text-xl">Full-stack Software Developer</h5>
        <h6 className="font-thin text-sm text-slate-400 relative top-[-2px]">
          Remote (Full-time)
        </h6>
        <hr className="w-full sm:w-[300px] mt-2 opacity-[50%]" />

        <ul className="mt-7 pl-[25px] list-disc">
          <li className="mt-2">
            Build SaaS applications used by small businesses and startups.
          </li>
          <li className="mt-2">
            Responsible for defining the software stack as well as the
            architecture and design used to structure our applications.
          </li>
          <li className="mt-2">
            Build REST APIs and custom CMS solutions with Django.
          </li>
          <li className="mt-2">
            Convert Adobe XD, Adobe PS, and Figma designs into complete frontend
            applications built with React.
          </li>
          <li className="mt-2">Scripting and automation.</li>
          <li className="mt-2">
            Deploy and maintain servers, applications, and databases.
          </li>
        </ul>

        <h6 className="text-md text-slate-700 font-semibold mt-[50px]">
          Highlights:
        </h6>
        <p className="mt-1">
          Created a city permitting application that pulls large sets of data
          from various city hosted ArcGIS API Server instances. The application
          allows cities to display their own hosted GIS data on a map, and add
          or edit additional layers. This took several different techniques to
          ensure that fetching thousands of layer features, processing separate
          user manageable layers, and rendering them on the client side remained performant.
        </p>
        <p className="mt-4">
          Working together with city management, we created an application that
          helps organize and visualize GIS data into an easy to use platform,
          where architects can provide high quality building designs, and the
          city can streamline the permitting process for future city development.
        </p>
      </div>

      <div className="mt-[100px] sm:mt-[125px]">
        <span className="font-semibold italic text-sm text-slate-500 relative left-[1px] top-[2px]">
          Adaptive Computing Inc. (7/2023 - 4/2024)
        </span>
        <h5 className="font-medium text-xl">Full-stack Software Developer</h5>
        <h6 className="font-thin text-sm text-slate-400 relative top-[-2px]">
          Remote (Contract)
        </h6>
        <hr className="w-full sm:w-[300px] mt-2 opacity-[50%]" />

        <ul className="mt-7 pl-[25px] list-disc">
          <li className="mt-2">
            Add and maintain features for an application called On-demand Data
            Center, used for creating, deploying, and managing High Performance
            Computing clusters in the cloud for our customers supercomputing
            needs.
          </li>
          <li className="mt-2">
            Linux system administration for Debian, Red Hat, SUSE, and other Red Hat based distros.
          </li>
          <li className="mt-2">
            Experience working with major cloud providers: AWS, Azure, GCP,
            Oracle, and Open Telekom Communications.
          </li>
          <li className="mt-2">
            Build cloud images that contained the necessary software for
            operating HPC clusters in the cloud using Ansible and Cloud-Init.
          </li>
          <li className="mt-2">
            Deploy private cloud HPC clusters created from custom cloud images to the cloud
            using Terraform and Cloud-Init.
          </li>
          <li className="mt-2">
            Add features to support and enhance running the Extreme-scale
            Scientific Software Stack (E4S) on private cloud HPC clusters.
          </li>
        </ul>

        <h6 className="text-md text-slate-700 font-semibold mt-[50px]">
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
          UI via a button. The button sends off a request to a custom API
          endpoint to create VNC sessions based on unique tokens to allow
          multiple users to use the same VNC service with separate sessions.
          Once the session was created, the application displays a popup window
          with the login screen for the VNC connection, where the user could log
          in with their username and password. After logging in, the user is
          given full GUI access to the head node of their HPC cluster.
        </p>
      </div>

      <div className="mt-[100px] sm:mt-[125px]">
        <span className="font-semibold italic text-sm text-slate-500 relative left-[1px] top-[2px]">
          Altiview Technology Group (2020 - 2021)
        </span>
        <h5 className="font-medium text-xl">Software Developer</h5>
        <h6 className="font-thin text-sm text-slate-400 relative top-[-2px]">
          Remote (Contract)
        </h6>
        <hr className="w-full sm:w-[300px] mt-2 opacity-[50%]" />

        <ul className="mt-7 pl-[25px] list-disc">
          <li className="mt-2">
            Build several ReactJS pages and components for various web
            applications while referencing Photoshop design files.
          </li>
          <li className="mt-2">
            Push a project built with NodeJS and ReactJS to production.
          </li>
          <li className="mt-2">Add new features to a Django application.</li>
          <li className="mt-2">
            Work with the lead developer and the team to deliver completed
            projects.
          </li>
        </ul>

        <h6 className="text-md text-slate-700 font-semibold mt-[50px]">
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

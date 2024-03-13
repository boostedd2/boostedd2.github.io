export default function Experience() {
  return (
    <div class="w-full py-20">

      <div>
        <span className="font-semibold italic text-sm text-slate-500 relative top-[5px]">
          Doc4 (2021 - present)
        </span>
        <h5 className="font-medium text-lg">Full-stack Software Developer</h5>
        <h6 className="font-thin text-slate-400 relative top-[-4px]">Remote (Full-time)</h6>
        <hr className="w-[275px] mt-2 opacity-[50%]" />

        <ul className="mt-5 pl-[20px] list-disc">
            <li>Exp1</li>
            <li>Exp2</li>
            <li>Exp3</li>
            <li>Exp4</li>
            <li>Exp5</li>
        </ul>
      </div>

      <div className="mt-20">
        <span className="font-semibold italic text-sm text-slate-500 relative top-[5px]">
          Adaptive Computing Inc. (7/2023 - 4/2024)
        </span>
        <h5 className="font-medium text-lg">Full-stack Software Developer</h5>
        <h6 className="font-thin text-slate-400 relative top-[-4px]">Remote (Contract)</h6>
        <hr className="w-[275px] mt-2 opacity-[50%]" />

        <ul className="mt-5 pl-[20px] list-disc">
            <li>Add and maintain features for an application called On-demand Datacenter (NodeJS, ReactJS, Go), used for creating, deploying, and managing HPC clusters in the cloud for our customers supercomputing needs.</li>
            <li>Experience working with major cloud providers: AWS, Azure, GCP, Oracle, and Open Telekom.</li>
            <li>Build cloud images that contained the neccessary software for operating HPC clusters in the cloud using Ansible and Cloud-Init.</li>
            <li>Deploy HPC clusters created from custom cloud images to the cloud using Terraform and Cloud-Init.</li>
            <li>Add features to support running the Extreme-scale Scientific Software Stack (E4S) on our HPC clusters.</li>
        </ul>
      </div>

      <div className="mt-20">
        <span className="font-semibold italic text-sm text-slate-500 relative top-[5px]">
          Altiview Technology Group (2020 - 2021)
        </span>
        <h5 className="font-medium text-lg">Software Developer</h5>
        <h6 className="font-thin text-slate-400 relative top-[-4px]">Remote (Contract)</h6>
        <hr className="w-[275px] mt-2 opacity-[50%]" />

        <ul className="mt-5 pl-[20px] list-disc">
            <li>Build several ReactJS pages and components for various web applications while referencing Photoshop design files.</li>
            <li>Push a project built with NodeJS and ReactJS to completion.</li>
            <li>Add new features to a Django application.</li>
            <li>Work with the lead developer and the team to deliver completed projects.</li>
        </ul>
      </div>
      
    </div>
  );
}

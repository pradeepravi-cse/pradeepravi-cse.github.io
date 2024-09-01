import IconCloud from "@/components/magicui/icon-cloud";
import PageBreak from "./PageBreak";

import Next from "@/app/assets/svg/next.svg";
import Azure from "@/app/assets/svg/azure.svg";
import Docker from "@/app/assets/svg/docker.svg";
import Kuberenetes from "@/app/assets/svg/kubernetes.svg";
import React from "@/app/assets/svg/react.svg";
import NodeJs from "@/app/assets/svg/nodejs.svg";
import Image from "next/image";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "express",
  "firebase",
  "nginx",
  "testinglibrary",
  "jest",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "sonarqube",
  "figma",
  "kuberenetes",
  "nodejs",
  "jenkins",
  "sass",
  "keycloak",
  "azuredevops",
  "kibana",
  "prometheus",
  "grafana",
  "sendgrid",
  "webpack",
  "elasticsearch",
  "mongodb",
  "beats",
  "prometheus",
  "storybook",
  "openid",
  "adobexd",
  "adobeillustrator",
  "adobephotoshop",
  "adobelightroom",
  "canva",
];


const top: { [key in string]: any }[] = [
  {
    title: "Azure Cloud",
    image: Azure,
  },
  {
    title: "Kubernetes",
    image: Kuberenetes,
  },
  {
    title: "Docker",
    image: Docker,
  },
  {
    title: "Next.js",
    image: Next,
  },
  {
    title: "React",
    image: React,
  },
  {
    title: "Node.js",
    image: NodeJs,
  },
];

const Skills = () => {
  return (
    <div className=" h-fit md:h-screen w-full pt-40 px-8 pb-40">
                  <PageBreak />
      <div className="container flex justify-center mx-auto flex-col items-center">
        <h1 className="text-center font-bold text-2xl border-4 border-boston-blue-950 py-2 px-8 w-[300px] uppercase">
          Skills
        </h1>
        <h2 className="text-center font-bold text-xl px-8 w-[300px] uppercase my-[40px]">
          Top Skills
        </h2>
        <div className="container grid grid-cols-2 gap-20 md:grid-cols-6  md:max-w-[80%] justify-between">
          {top.slice(0,6).map((skill) => (
            <div
              key={skill.title}
              className="flex flex-col justify-center align-start"
            >
              <div className="h-[25px] w-[100px] flex relative justify-center">
                <Image
                  src={skill.image}
                 fill
                 style={{objectFit: 'contain'}}
                  alt={skill.title}
                />
              </div>
              <p className="text-md font-thin mt-5 text-center w-full">
                {skill.title}
              </p>
            </div>
          ))}
        </div>
        <div className="h-full">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </div>
  );
};

export default Skills;

import PageBreak from "./PageBreak";
import Next from "@/app/assets/svg/next.svg";
import Azure from "@/app/assets/svg/azure.svg";
import Docker from "@/app/assets/svg/docker.svg";
import Kuberenetes from "@/app/assets/svg/kubernetes.svg";
import React from "@/app/assets/svg/react.svg";
import NodeJs from "@/app/assets/svg/nodejs.svg";
import Jenkins from "@/app/assets/svg/jenkins.svg";
import HTML from "@/app/assets/svg/html5.svg";
import CSS from "@/app/assets/svg/css3.svg";
import SASS from "@/app/assets/svg/sass.svg";
import Javascript from "@/app/assets/svg/javascript.svg";
import Typescript from "@/app/assets/svg/typescript.svg";
import AzureDevops from "@/app/assets/svg/azuredevops.svg";
import Keycloak from "@/app/assets/svg/keycloak.svg";
import SonarQube from "@/app/assets/svg/sonarqube.svg";
import Figma from "@/app/assets/svg/figma.svg";
import MongoDB from "@/app/assets/svg/mongodb.svg";
import Oidc from "@/app/assets/svg/oidc.svg";
import Jest from "@/app/assets/svg/jest.svg";
import Jira from "@/app/assets/svg/jira.svg";
import Taiga from "@/app/assets/svg/taiga.svg";
import Storybook from "@/app/assets/svg/storybook.svg";
import Firebase from "@/app/assets/svg/firebase.svg";
import Rtl from "@/app/assets/svg/rtl.png";
import ElasticSearch from "@/app/assets/svg/elasticsearch.svg";
import Beats from "@/app/assets/svg/beats.svg";
import Kibana from "@/app/assets/svg/kibana.svg";
import Prometheus from "@/app/assets/svg/prometheus.svg";
import Grafana from "@/app/assets/svg/grafana.svg";
import SendGrid from "@/app/assets/svg/sendgrid.svg";
import WebPack from "@/app/assets/svg/webpack.svg";

import Image from "next/image";

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
  {
    title: "Jenkins",
    image: Jenkins,
  },
  {
    title: "HTML",
    image: HTML,
  },
  {
    title: "CSS",
    image: CSS,
  },
  {
    title: "SASS/SCSS",
    image: SASS,
  },
  {
    title: "JavaScript",
    image: Javascript,
  },
  {
    title: "Typescript",
    image: Typescript,
  },
  {
    title: "Firebase",
    image: Firebase,
  },
  {
    title: "Keycloak",
    image: Keycloak,
  },
  {
    title: "SonarQube",
    image: SonarQube,
  },
  {
    title: "Azure DevOps",
    image: AzureDevops,
  },
  {
    title: "Jira",
    image: Jira,
  },
  {
    title: "Taiga",
    image: Taiga,
  },
  {
    title: "MongoDB",
    image: MongoDB,
  },
  {
    title: "Elasticsearch",
    image: ElasticSearch,
  },
  {
    title: "Beats",
    image: Beats,
  },
  {
    title: "Kibana",
    image: Kibana,
  },
  {
    title: "Prometheus",
    image: Prometheus,
  },
  {
    title: "Grafana",
    image: Grafana,
  },
  {
    title: "SendGrid",
    image: SendGrid,
  },
  {
    title: "Open Id Connect",
    image: Oidc,
  },
  {
    title: "Jest",
    image: Jest,
  },
  {
    title: "React Testing Library",
    image: Rtl,
  },
  {
    title: "Webpack",
    image: WebPack,
  },
  {
    title: "StoryBook",
    image: Storybook,
  },
  {
    title: "Figma",
    image: Figma,
  },
];


const Skills = () => {
  return (
    <div className=" w-full pt-40 px-8 pb-40">
      <div className="container flex justify-center mx-auto flex-col items-center">
        <h1 className="text-center font-bold text-2xl border-4 border-boston-blue-950 py-2 px-8 w-[300px] uppercase">
          Skills
        </h1>
        <h2 className="text-center font-bold text-xl  py-2 px-8 w-[300px] uppercase my-[40px]">
          Top Skills
        </h2>
        <div className="container grid grid-cols-2 gap-20 md:grid-cols-6  md:max-w-[80%] justify-between">
          {top.slice(0,6).map((skill) => (
            <div
              key={skill.title}
              className="flex flex-col justify-center align-start"
            >
              <div className="h-[50px] w-[150px] flex relative justify-center">
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
        <PageBreak/>
        <h2 className="text-center font-bold text-xl  py-2 px-8 w-[450px] uppercase my-[40px]">
         Tools &amp; Technologies
        </h2>
        <div className="container md:max-w-[80%] grid grid-cols-2 gap-20 md:grid-cols-6 justify-between">
          {top.map((skill) => (
            <div
              key={skill.title}
              className="flex flex-col justify-center align-start"
            >
              <div className="h-[50px] w-full flex relative justify-center">
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
        {/* <PageBreak/> */}
      </div>
    </div>
  );
};

export default Skills;

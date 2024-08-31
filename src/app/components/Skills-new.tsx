import IconCloud from "@/components/magicui/icon-cloud";

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

const Skills = () => {
  return (
    <div className=" w-full pt-40 px-8 pb-40">
      <div className="container flex justify-center mx-auto flex-col items-center">
        <h1 className="text-center font-bold text-2xl border-4 border-boston-blue-950 py-2 px-8 w-[300px] uppercase">
          Skills
        </h1>

        <div className=" h-full ">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </div>
  );
};

export default Skills;

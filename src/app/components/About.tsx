import PageBreak from "./PageBreak";

const mySkils = [
  {
    title: "FULL-STACK DEVELOPMENT",
    content:
      "I can develop full-stack web applications, building dynamic frontends with React and robust backends with Node.js",
  },
  {
    title: "Cloud Computing & DevOps",
    content:
      "I can design and implement scalable cloud infrastructures, manage CI/CD pipelines, and optimize resource usage on platforms like Azure",
  },
  {
    title: "Security",
    content:
      "I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.",
  },
  {
    title: "Containerization & Orchestration",
    content:
      "I can manage containerized applications using Kubernetes and Docker for streamlined deployment and orchestration.",
  },
  {
    title: "UI/UX Design",
    content:
      "I can design intuitive user interfaces, create prototypes, and deliver responsive designs that improve user experience.",
  },
  {
    title: "Testing",
    content:
      "I can ensure code quality by developing and running comprehensive test cases and performing functional testing.",
  },
];

const AboutMe = () => {
  return (
    <div className="h-full md:h-screen w-full pt-20 px-8">
      <div className="container flex justify-center mx-auto flex-col items-center">
        <h1 className="text-center font-bold text-2xl border-4 border-boston-blue-950 py-2 px-8 w-[300px]">
          ABOUT ME
        </h1>
        <p className="pt-10 md:max-w-[60%] text-center">
          I am Pradeepkumar R, a dedicated Associate Solution Designer with a
          passion for solving complex technical challenges. With extensive
          experience in full-stack development and cloud infrastructure, I have
          a proven track record of designing high-performing, scalable, and
          secure applications. My expertise spans across various technologies,
          including Kubernetes, Docker, and React, combined with a deep
          understanding of cloud platforms like Azure. I thrive in environments
          that require innovative problem-solving and am committed to driving
          impactful results.
        </p>
        <PageBreak />

        <div className="grid gap-20 md:grid-cols-2 md:max-w-[70%] mx-auto text-center md:text-left">
          {mySkils.map((skills) => (
            <div>
              <h2 className="text-xl font-bold uppercase mb-2">{skills.title}</h2>
              <p className="text-md font-thin">{skills.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

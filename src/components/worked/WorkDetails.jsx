import React from "react";

const WorkDetails = () => {
  return (
    <div className="flex flex-col text-gray-400 flex-wrap">
      <div className="max-w-[450px]">
        <h1 className="text-blue-400">
          Web Development intern :
          <span className="text-blue-400 hover:text-gray-400 ml-2">
            <a href="https://www.linkedin.com/company/codsoft/posts/?feedView=all" target="_blanck">Codesoft</a>
          </span>
        </h1>
        <p className="text-[14px] mt-1 leading-relaxed">
          "During my virtual internship at CodeSoft, I gained hands-on
          experience in web development by working on multiple projects
          utilizing HTML, CSS, and JavaScript. This opportunity allowed me to
          enhance my technical skills and apply them in real-world scenarios,
          preparing me for future challenges in the field."
        </p>
      </div>
      <div className="max-w-[450px]">
        <h1 className="text-blue-400 mt-2">
          React JS Inter :
          <span className="text-blue-400 hover:text-gray-400 ml-2 text-md">
            <a href="https://www.linkedin.com/company/web-evolution-company/mycompany/" target="_blank">Web Evolution </a>
          </span>
        </h1>
        <p className="text-[14px] mt-1 leading-relaxed">
          "I am currently completing a React JS internship at Web Evolution,
          where I am working on several projects and gaining valuable experience
          in frontend technologies such as HTML, CSS, JavaScript, React JS,
          Tailwind CSS, React Router, and Redux
        </p>
      </div>
    </div>
  );
};

export default WorkDetails;

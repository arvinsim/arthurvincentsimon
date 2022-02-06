import React from "react";
import ProfilePicture from "./profile-picture.jpeg";

function App() {
  return (
    <div className="bg-black h-screen text-white">
      <div className="flex flex-col space-y-12 container mx-sm pt-12 m-auto max-w-prose">
        <img
          src={ProfilePicture}
          className="block object-contain rounded-full m-auto"
          alt={"Profile Picture"}
          width={200}
        />
        <div>
          <h1 className="text-center text-3xl font-bold mb-8">Hi, I am Arthur.</h1>
          <h2 className="text-center text-1xl">
            Web software developer. Loves reading books.
          </h2>
          <h2 className="text-center text-1xl">
            Music enthusiast. Exercises for health.
          </h2>
        </div>
        <div className="text-center text-2xl">Projects</div>
        <div className="grid grid-cols-4 gap-4 underline text-center">
          {projects.map(project => {
            return <div>
              <a
                href={project.link}
              >
                {project.name}
              </a>
            </div>
          })}
        </div>
        <div className="text-center text-2xl">Social Media</div>
        <div className="grid grid-cols-4 gap-4 underline text-center">
          {socialMedia.map(socialMedia => {
            return <div className={"my-4"}>
              <a
                href={socialMedia.link}
              >
                {socialMedia.name}
              </a>
            </div>
          })}
        </div>
      </div>
    </div>
  );
}

const projects = [
  { name: "Chord Tools", link: "https://chord-tools.netlify.app" },
]

const socialMedia = [
  { name: "LinkdIn", link: "https://www.linkedin.com/in/arthur-vincent-simon-b1307b40/" },
  { name: "Github", link: "https://github.com/arvinsim" },
  { name: "Stack Overflow", link: "https://stackoverflow.com/users/469921/developarvin?tab=profile" },
  { name: "Dev.to", link: "https://dev.to/developarvin" }
]


export default App;

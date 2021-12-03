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
        <div className="text-center underline">
          <div className={"my-4"}>
            <a
              href={
                "https://www.linkedin.com/in/arthur-vincent-simon-b1307b40/"
              }
            >
              LinkedIn
            </a>
          </div>
          <div className={"my-4"}>
            <a
                href={"https://github.com/arvinsim"}
            >
              Github
            </a>
          </div>
          <div className={"my-4"}>
            <a
                href={
                  "https://stackoverflow.com/users/469921/developarvin?tab=profile"
                }
            >
              Stack Overflow
            </a>
          </div>
          <div className={"my-4"}>
            <a
                href={
                  "https://dev.to/developarvin"
                }
            >
              Dev.to
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import ProfilePicture from "./profile-picture.jpeg";

function App() {
  return (
    <div>
      <div className="flex flex-col space-y-12 container mx-sm pt-12 m-auto max-w-prose">
        <img
          src={ProfilePicture}
          className="block object-contain rounded-full m-auto"
          alt={"Profile Picture"}
          width={200}
        />
        <div>
          <h1 className="text-center text-3xl font-bold">Hi, I am Arthur.</h1>
          <h2 className="text-center text-2xl">
            Software developer working in Singapore focusing on web user
            interface and experience. I am currently working at Rakuten
            Singapore. I love music, reading and ideas
          </h2>
        </div>
        <div className="text-center">
          <div>
            <a
              href={
                "https://www.linkedin.com/in/arthur-vincent-simon-b1307b40/"
              }
            >
              LinkedIn
            </a>
          </div>
          {/*<div>SoundCloud</div>*/}
          {/*<div>Code Sandbox</div>*/}
          {/*<div>Mini Projects</div>*/}
        </div>
      </div>
    </div>
  );
}

export default App;

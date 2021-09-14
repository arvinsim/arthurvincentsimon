import React from 'react'
import ProfilePicture from './profile-picture.jpeg'

function App() {
  return <div className="container mx-auto">
    <img src={ProfilePicture} className="block object-contain rounded-full" alt={"Profile Picture"} width={200}/>
    <div>Hi, I am Arthur. I am a Software developer working in Singapore.  I am interested in tech and music.</div>
    <div>
      <div>LinkedIn</div>
      <div>SoundCloud</div>
      <div>Code Sandbox</div>
      <div>Mini Projects</div>
    </div>
  </div>
}

export default App

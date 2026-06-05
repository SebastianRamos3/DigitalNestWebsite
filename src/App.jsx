import AvatarImage from './Assets/Avatar.jpg'
import Resume from './Assets/SebRam14.pdf'

import './Styling/App.css'
import './Styling/back.css'

function Background() {
  return (
    <div className="background">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="ball" />
      ))}
    </div>
  )
}

function Profile() {
  return (
    <div className="profile">
      <Avatar />

      <h1 className="name"> Sebastian Ramos</h1>
      <p className="description">I am a software engineer</p>
    </div>
  )
}
function Avatar() {
  return (
    <img className="avatar" src={AvatarImage} alt="Avatar" />
  )
}

function Links({label, url}) {
  return (
    <div >
      <a href={url} target="_blank" rel="noreferrer">{label}</a>
    </div>
  )
}

export default function App() {

  return (
    <>
      <Background />
      <div className="app">
        <Profile />
          <div className="links">
            <Links label="LinkedIn" url="https://www.linkedin.com/in/sebastianvramos/" />
            <Links label="GitHub" url="https://github.com/SebastianRamos3" />
            <Links label="Resume" url={Resume} />
          </div>
      </div>
    </>
  )
}

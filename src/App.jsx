import AvatarImage from './Assets/Avatar.jpg'
import Resume from './Assets/SebRam14.pdf'
import { useState } from 'react'
import './Styling/App.css'
import './Styling/back.css'

function Background() {
  return (
    <div className="background">
      <div key={0} className="ball" />
      <div key={1} className="ball" />
      <div key={2} className="ball" />
      <div key={3} className="ball" />
      <div key={4} className="ball" />
      <div key={5} className="ball" />
      <div key={6} className="ball" />
      <div key={7} className="ball" />
    </div>
  )
}

function Profile() {
  return (
    <div className="profile">
      <Avatar />
      <h1 className="name"> Sebastian Ramos</h1>
      <p className="description">Hello, I am a Software Engineer.<br />I love to read, golf, and play CSGO. </p>
    </div>
  )
}
function Avatar() {
  return (
    <img className="avatar" src={AvatarImage} alt="Avatar" />
  )
}

function Links({label, url,showDownload, showCopy}) {
  const [copied,setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='link-list'>
      <div className='link-row'>
        {showDownload && 
          (
            <a href={url} download>
              <button className='actionButton'>⬇</button>
            </a>
          )
        }
        {showCopy && 
          <button className='actionButton' onClick={handleCopy}>
            {copied ? '✓' : '⎘'}             
          </button>
        }
        <a className="link" href={url} target="_blank" rel="noreferrer" >
          {label}
        </a>
      </div>
    </div>
  )
}

export default function App() {

  return (
    <>
      <Background />
      <div className="app">
        <Profile />
          <div>
            <Links label="LinkedIn" url="https://www.linkedin.com/in/sebastianvramos/"  showCopy={true}/>
            <Links label="GitHub" url="https://github.com/SebastianRamos3" showCopy={true}/>
            <Links label="Resume" url={Resume} showDownload={true}  />
          </div>
      </div>
    </>
  )
}

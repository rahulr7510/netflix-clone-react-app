import './NavBar.css'

export default function NavBar({black}) {
  return (
   <header className={black ? "black" : ""} >
    <div className="netflix">
<img className="netflix-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="netflix-logo" />
    </div>
    <div className="user">
<img className="user-logo" src="https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png" alt="user-logo" />
    </div>
   </header>
  )
}



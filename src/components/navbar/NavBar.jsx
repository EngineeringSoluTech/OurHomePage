import "./navbar.scss"

const NavBar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <div className="wrapper">
        <span>EngineeringSoluTech</span>
        <div className="social">
          <a href="#"><img src="/facebook.png"alt=""/></a>
          <a href="#"><img src="/instagram.png"alt=""/></a>
          <a href="#"><img src="/youtube.png"alt=""/></a>
          <a href="#"><img src="/driblle.png"alt=""/></a>
        </div>
      </div>
    </div>
  )
}

export default NavBar

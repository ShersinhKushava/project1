import '../App.css'

const Navigation = () => {

    return(
        <>
             <div>
      <nav className="container">
        <div className="Logo">
          <img src="/images/brand_logo.png" alt="logo"></img>
          </div>
          <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
          </ul>

          <button>Login</button>
        
      </nav>
      </div>
        </>
    )
}
export default Navigation;
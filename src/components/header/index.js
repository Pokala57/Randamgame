import './Header.css'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#Home" id="navItem1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh_b50exMThYi6lbJX6RCRxJfQ4i_h4Xa_AYGFcsyuyKjw4PRaecaqPENuf6F2z-zqHUY&usqp=CAU"
            className="food-munch-logo"
            alt="randomgame"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a className="nav-link active" id="navItem1" href="#Whatisthegame">
              What is the game?
              <span className="sr-only">(current)</span>
            </a>
            <a className="nav-link" href="#GameRules" id="navItem2">
              Game Rules
            </a>
            <a className="nav-link" href="#Instructions" id="navItem3">
              Instructions
            </a>
            <a className="nav-link" href="#contacts" id="navItem4">
              contacts
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header

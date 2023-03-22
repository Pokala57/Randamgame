import './Header.css'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container">
        <a className="navbar-brand" href="www.com">
          <img
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png"
            className="food-munch-logo"
            alt="helo"
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
            <a className="nav-link active" id="navItem1" href="#wcuSection">
              Why Choose Us?
              <span className="sr-only">(current)</span>
            </a>
            <a className="nav-link" href="#exploreMenuSection" id="navItem2">
              Explore Menu
            </a>
            <a
              className="nav-link"
              href="#deliveryPaymentSection"
              id="navItem3"
            >
              Delivery & Payment
            </a>
            <a className="nav-link" href="#followUsSection" id="navItem4">
              Follow Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header

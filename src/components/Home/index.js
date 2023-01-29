import './index.css'
// Write your code here
const Home = () => (
  <div className="home-container">
    <div className="home-image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="mobile-home-image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="desktop-home-image"
      />
    </div>
  </div>
)

export default Home

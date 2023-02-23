import {Link} from 'react-router-dom'
import Image from '../images/main__header.png'

const Header = () => {
  return (
    <header className="main__header">
      <div className="container main__header=container">
        <div className="main__header-left">
          <h4>#100DaysofWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nisi eum, autem explicabo distinctio molestias enim perferendis vitae minus ad temporibus vero beatae atque ex praesentium, in rem, aspernatur perspiciatis.
          </p>
          <Link to="/plans" className='btn lg'>Get Started</Link>

        </div>
        <div className="main__header-right">
        <div className="main__header-circle"></div>
        <div className="main__header-images">
          <img src={Image} alt="Main Header Image" />
        </div>
        </div>
      </div>
    </header>
  )
}

export default Header
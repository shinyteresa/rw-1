import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'




const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className='logo'>
                    <img src="{Logo}" alt="Footer Logo" />
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque odit explicabo doloribus molestiae necessitatibus natus minus quam beatae nihil iure in, id, cumque atque tempora similique, nemo provident vel nisi.
                </p>
                <div className="footer__socials">
                    <a href="http://linkedin.com" target="_blank" rel='noreferrer noopener'><FaLinkedin/></a>
                    <a href="http://facebook.com" target="_blank" rel='noreferrer noopener'><FaFacebookF/></a>
                    <a href="http://twitter.com" target="_blank" rel='noreferrer noopener'><AiOutlineTwitter/></a>
                    <a href="http://instagram.com" target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainer">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/Contact">Contact</Link>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainer">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/Contact">Contact</Link>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainer">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/Contact">Contact</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2022 EGATOR TUTORIALS &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer
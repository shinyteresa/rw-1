import Header from '../../Components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import { trainers } from '../../data'
import {BsInstagram} from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import Trainer from '../../Components/Trainer'

import './trainers.css'


const Trainers = () => {
  return (
    <>
    <Header title="Our Trainers" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sed doloremque blanditiis pariatur voluptatum fuga, facilis dicta quae autem eos placeat aut temporibus eaque laborum, provident earum ad accusantium similique.
    </Header>
    <section className="trainers">
      <div className="trainers__container container">
        {
          trainers.map(({id, image, name, job, socials}) => {
            return <Trainer key={id} image={image} name={name} job={job} socials={
              [
                {icon: <BsInstagram/>, link: socials[0]},
                {icon: <AiOutlineTwitter/>, link: socials[1]},
                {icon: <FaFacebookF/>, link: socials[2]},
                {icon: <FaLinkedinIn/>, link: socials[3]}
              ]
            }/>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Trainers
import Header from '../../Components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'



const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" imge={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate possimus provident facilis vel expedita maiores, hic corporis veniam a culpa pariatur odio illum ad dolore ea rerum. Error, officiis nihil?
    </Header>
     <section className="contact">
     <div className="container contact__container">
       <div className="container__wrapper">
         <a href="mailto:support@egattor.com" target="blank" rel="noreferrer noopener"><MdEmail/></a>
         <a href="https://m.me/ernest_achiver" target="blank" rel="noreferrer noopener"><BsMessenger/></a>
         <a href="https://wa.me/+233557097546" target="blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
       </div>
     </div>
   </section>
   </>
  )
}

export default Contact
import Header from '../../Components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'



const About = () => {
  return (
   <>
   <Header title="About Us" image={HeaderImage}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, rerum excepturi. Consequuntur voluptatem aperiam modi explicabo placeat minus soluta cumque.  
   </Header>

   <section className="about__story">
     <div className="container about__story-container">
      <div className="about__section-image">
        <img src={StoryImage} alt="Our Story Image" />
      </div>
      <div className="about__section-content">
        <h1>Our Story</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores possimus fugiat soluta labore, delectus incidunt ducimus unde! Eaque reiciendis incidunt quos iusto maiores doloribus veritatis odit, quidem laudantium fugiat dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto sunt magni ab? Dolor recusandae deserunt alias aut aliquid ducimus deleniti, possimus totam repellendus amet nobis necessitatibus quis nemo praesentium?
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus numquam quidem, voluptatum nihil id aperiam, pariatur, sit ipsam provident quae repellat laudantium mollitia reprehenderit quia. Laborum est sunt ullam eveniet.</p>
      </div>
       </div>
   </section>

   <section className="about__Vision">
     <div className="container about__Vision-container">
     <div className="about__section-content">
        <h1>Our Vision</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores possimus fugiat soluta labore, delectus incidunt ducimus unde! Eaque reiciendis incidunt quos iusto maiores doloribus veritatis odit, quidem laudantium fugiat dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto sunt magni ab? Dolor recusandae deserunt alias aut aliquid ducimus deleniti, possimus totam repellendus amet nobis necessitatibus quis nemo praesentium?
        </p>
        </div>
        <div className="about__section-image">
        <img src={VisionImage} alt="Our Vision Image" />
      </div>

       </div>
   </section>

   <section className="about__mission">
     <div className="container about__mission-container">
      <div className="about__section-image">
        <img src={MissionImage} alt="Our Mission Image" />
      </div>
      <div className="about__section-content">
        <h1>Our Mission</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores possimus fugiat soluta labore, delectus incidunt ducimus unde! Eaque reiciendis incidunt quos iusto maiores doloribus veritatis odit, quidem laudantium fugiat dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto sunt magni ab? Dolor recusandae deserunt alias aut aliquid ducimus deleniti, possimus totam repellendus amet nobis necessitatibus quis nemo praesentium?
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus numquam quidem, voluptatum nihil id aperiam, pariatur, sit ipsam provident quae repellat laudantium mollitia reprehenderit quia. Laborum est sunt ullam eveniet.</p>
      </div>
       </div>
   </section>
   </>
  )
}

export default About
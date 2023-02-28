import Header from '../../Components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'





import './gallary.css'

const Gallary = () => {
  const gallaryLength = 15;
  const images = []

  for(let i = 1; i < gallaryLength; i++) {
    images.push(required('../../images/gallery${i}.jpg'))
  }


  return (
    <>
    <Header title="Our Gllery" image={HeaderImage}>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore odio maiores adipisci quaerat maxime quam nostrum voluptas molestias inventore molestiae asperiores nesciunt odit ipsam impedit in temporibus recusandae, fugiat iste?
    </Header>

    <section className="gallery">
      <div className="container gallery__container">
        {
          images.map((image, index) => {
            return <articel key={index}>
              <img src="{image}" alt={'Gallery Image ${index + 1}'} />
            </articel>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Gallary
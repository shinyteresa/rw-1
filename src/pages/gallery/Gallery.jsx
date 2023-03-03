import Header from '../../Components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import './gallery.css'

const Gallery = () => {
  const galleryLength = 15;
  const images = []

  for(let i = 0; i <= galleryLength; i++) {
      images.push(require(`../../images/gallery${i}.jpg`))
  }


  return (
    <>
    <Header title="Our Gallery" image={HeaderImage}>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore odio maiores adipisci quaerat maxime quam nostrum voluptas molestias inventore molestiae asperiores nesciunt odit ipsam impedit in temporibus recusandae, fugiat iste?
    </Header>

    <section className="gallery">
      <div className="container gallery__container">
        {
          images.map((index, _image) => {
            return <articel key={index}>
              <img src={Image} alt={'Gallery Image ${index + 1}'} />
            </articel>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Gallery
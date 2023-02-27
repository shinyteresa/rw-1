import SectionHead from "./SectionHead"
import {ImQuotesLeft} from 'react-icons/im'
import Card from "../UI/Card"
import {IoIosArrowDropleftCircle, IoIoArrowDroprightCircle} from 'react-icons/io'
import { testimonials } from "../data"
import { useState } from "react"






const Testimonials = () => {
    const [index, setIndex] = useState(0)
    const {name, quote, job, avtar} = testimonials[index];
    const prevTestimonialHandler = () => {
        setIndex(prev => prev - 1);

        if(index <= 0) {
            setIndex(testimonials.length - 1)
        }


    }
    const nextTestimonialHandler = () => {
        setIndex(prev => prev + 1);

        if(index >= testimonials.length - 1) {
            setIndex(0);
        }

    }


  return (
    <section className="testimonials">
        <div className="container tesimonials__container">
            <SectionHead icon={<ImQuotesLeft/>} title="Testimonials" className="testimonials__head"/>
            <Card className="testimonials">
                <div className="testimonials__avtar">
                    <img src="{avtar}" alt="name" />
                </div>
                <p className="testimonials__quote">{'"${quote}"'}</p>
                <h5>{name}</h5>
                <small className="tesimonials__title">{job}</small>
            </Card>
            <div className="testimonials__btn-container">
                <button className="testimonials__btn" onClick={prevTestimonialHandler}>IoIosArrowDropleftCircle</button>
                <button className="testimonials__btn" onClick={nextTestimonialHandler}>IoIosArrowDroprightCircle</button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials
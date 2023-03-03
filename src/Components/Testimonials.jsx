import SectionHead from "./SectionHead"
import {ImQuotesLeft} from 'react-icons/im'
import Card from "../UI/Card"
import { testimonials } from "../data"
import { useState } from "react"






const Testimonials = () => {
    const [index] = useState(0)
    const {name, job} = testimonials[index];


  return (
    <section className="testimonials">
        <div className="container tesimonials__container">
            <SectionHead icon={<ImQuotesLeft/>} title="Testimonials"/>
            <Card className="testimonials">
                <div className="testimonials__avtar">
                    <img src="{avtar}" alt="name" />
                </div>
                <p className="testimonials__quote">{'"${quote}"'}</p>
                <h5>{name}</h5>
                <small className="tesimonials__title">{job}</small>
            </Card>
        </div>
    </section>
  )
}

export default Testimonials
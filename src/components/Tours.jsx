import { Title } from './Title.jsx'
import { tours } from '../constants/tours.js'
import { Tour } from './Tour.jsx'

const Tours = () => {
  return (
    <>
        <section className="section" id="tours">
            <Title title='featured' subTitle='tours' />

            <div className="section-center featured-center">
                {tours.map((props) => {
                    return(
                        <Tour key={props.id} {...props}/>
                    )
                })}
            </div>
        </section>
    </>
  )
}

export default Tours
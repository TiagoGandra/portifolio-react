import { Title } from './Title.jsx'
import { services } from '../constants/services.js'
import { Service } from './Service.jsx'

const Services = () => {
    return (
        <>
            <section className="section services" id="services">
                <Title title='technologies' subTitle='' />
                <div className="section-center services-center">
                    {services.map((props) => {
                        return(
                            <Service key={props.id} {...props} />
                        )
                    })}
                </div>
            </section>
        </>
    )
}
export default Services
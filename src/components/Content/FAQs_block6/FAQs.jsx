import './FAQs.css';
import arrow from '../../../assests/icons/arrow_faqs.svg';

export default function FAQs({ data }) {
    return (
        <div className='faqs-block'>
            <h3>FAQs</h3>
            <div className='list-faqs'>
                {data.map((item) =>
                    <div className='list-item-faqs'>
                        <div className='visible-question'>
                            <p>{item.question}</p>
                        </div>
                        <img className='arrow-question' src={arrow} alt='#' />
                        <div className='hidden-answer'>
                            <p>{item.answer}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
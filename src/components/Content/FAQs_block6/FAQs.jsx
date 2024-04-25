import './FAQs.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import arrow from '../../../assests/icons/arrow_faqs.svg';


export default function FAQs({ data }) {
    const [activeIndices, setActiveIndices] = useState([]);

    const toggleAnswer = (index) => {
        const currentIndex = activeIndices.indexOf(index);
        let newIndices = [];

        if (currentIndex === -1) {
            newIndices = [...activeIndices, index];
        } else {
            newIndices = activeIndices.filter((idx) => idx !== index);
        }

        setActiveIndices(newIndices);
    }

    const getArrowDirection = (index) => {
        return activeIndices.includes(index) ? 'down' : 'up';
    }

    return (
        <div className='faqs-block'>
            <h3>FAQs</h3>
            <div className='list-faqs'>
                {data.map((item, idx) => (
                    <div className='list-item-faqs' key={`faqs${idx}`}>
                        <div className='visible-question'>
                            <p>{item.question}</p>
                            <img
                                className={`arrow-question ${getArrowDirection(idx)}`}
                                src={arrow}
                                alt='#'
                                onClick={() => toggleAnswer(idx)}
                            />
                        </div>
                        {activeIndices.includes(idx) && (
                            <div className='hidden-answer'>
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export const FAQsProptype = PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
}).isRequired;

FAQs.propTypes = { data: PropTypes.arrayOf(FAQsProptype) };
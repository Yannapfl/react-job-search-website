import './Skills.css';
import '../Cards_block3/Cards.css';


export default function Skiils({ data }) {
    return (
        <div className='section'>
            <div className='text__block'>
                <h3>Find your culture</h3>
            </div>
            <div className='btn-group-skills'>
                {data.map((textButton) => <button type='button' className='button-skill'>{textButton}</button>)}
            </div>
        </div>
    )
}
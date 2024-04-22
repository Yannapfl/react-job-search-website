import './CardCollection.css';

export default function CardCollection({ data }) {
    return (
        <div className='card-collection' style={{ 
            backgroundImage: `url(${data.img})`, 
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 66%' 
            }}>
            <div className='content-collection'>
                <h1>{data.name}</h1>
                <p>{data.countCompanies} Companies · {data.countJobs} Jobs</p>
            </div>
            <view className='square-with-plus'>+</view>
        </div>
    )
}
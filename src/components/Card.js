import star from '../images/star.png'

export default function Card(props) {
    // console.log(props)
    return (
        // We will be using .props as we pass props
        // in out Card() parameter or we can use anyother
        // name but props"also called propersties" is a
        // better approach
        <div className='card'>
            {props.openSpots === 0 && <div className='card-badge'>SOLD OUT</div>}
            <img src={`./images/${props.img}`} className='card-image'
                alt='Katie' />
            <div className='card-stats'>
                <img src={star} className='card-star'
                    alt='star' />
                <span>{props.rating}</span>
                <span className='gray'> ({props.reviewCount}) • </span>
                <span className='gray'>{props.location}</span>
            </div>
            <p className='card-title'>{props.title}</p>
            <p className='card-price'><span className='bold'>From ${props.price} </span>/ person</p>
        </div>
    )
}
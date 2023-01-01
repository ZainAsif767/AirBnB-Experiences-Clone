import star from '../images/star.png'

export default function Card(props) {
    // console.log(props)
    let bagdeText
    if (props.item.openSpots === 0) {
        bagdeText = "SOLD OUT"
    }
    else if (props.item.location === "Online") {
        bagdeText = "ONLINE"
    }
    return (
        // We will be using .props as we pass props
        // in out Card() parameter or we can use anyother
        // name but props"also called propersties" is a
        // better approach
        <div className='card'>
            {bagdeText && <div className='card-badge'>{bagdeText}</div>}
            <img src={`./images/${props.item.coverImg}`} className='card-image'
                alt='Katie' />
            <div className='card-stats'>
                <img src={star} className='card-star'
                    alt='star' />
                <span>{props.item.stats.rating}</span>
                <span className='gray'> ({props.item.stats.reviewCount}) • </span>
                <span className='gray'>{props.item.location}</span>
            </div>
            <p className='card-title'>{props.item.title}</p>
            <p className='card-price'><span className='bold'>From ${props.item.price} </span>/ person</p>
        </div>
    )
}
import './Card.css'

const Card = (props) => {
    return (
        <div className='card'>
            <div className='star'>
                <img src="./image/star.png" alt="" />
                <img src="./image/star.png" alt="" />
                <img src="./image/star.png" alt="" />
                <img src="./image/star.png" alt="" />
                <img src="./image/star.png" alt="" />
            </div>
            <div className='comments'>
                <p>Love the ease and efficiency. Awesome <br /> app. Very informative and insightful if<br /> wanting to know more about your device.<br /> The added breach check.is a great bonus.<br /> Check any email of they’ve ever been<br /> named in a data breach from years ago.<br /> Sweet tool. Love it highly recommend.</p>
                <h2>{props.name}</h2>
            </div>
        </div>
    )
}

export default Card
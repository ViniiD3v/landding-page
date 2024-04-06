import './insights.css'

const Insights = () => {
    return (
        <section className='insights'>
            <h1>Latest insights</h1>
            <div className='insights-infos'>
                <div className='collun'>
                    <img src="../assets/insight-img/woman.png" alt="" />
                    <h2>Signs Your Ex Is Spying On You</h2>
                    <p>In an ideal world, after a relationship ends both you and your ex will move on. But what if they can’t let go, and start spying on your...</p>
                </div>
                <div className='collun'>
                    <img src="../assets/insight-img/sansung.png" alt="" />
                    <h2>How to Remove a Hacker from Your Samsung Phone</h2>
                    <p>Samsung is the second most popular manufacturer of smartphones in the world, with a market share of 28.19% compared to Apple’s 28.43% as...</p>
                </div>
                <div className='collun'>
                    <img src="../assets/insight-img/cam.png" alt="" />
                    <h2>Is Your Cell Phone Under Surveillance?</h2>
                    <p>In today’s surveillance state, it can feel like your every move is being watched. Although your mind may be conjuring up images of CCTV...</p>
                </div>
            </div>
            <div className='btn'>
                <button>View all insights <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </section>
    )
}

export default Insights
import './phone.css'

const YourPhone = () => {
    return (
        <section className='yourPhone'>
            <div className='phone'>
                <h1>Is someone spying on your phone?</h1>
                <p>Find out with Certo</p>
                <div className='buttons'>
                    <button id='yellow'>Get Certo for iPhone <i class="fa-solid fa-arrow-right"></i></button>
                    <button id='white'>Get Certo for Android</button>
                </div>
            </div>
        </section>
    )
}

export default YourPhone
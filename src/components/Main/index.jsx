import './Main.css'

const Main = () => {
    return (
        <main className='Main'>
             <div className='main-infos'>
                <div className ='tittle'>
                    <h1>Your mobile privacy <br/> is our mission</h1>
                    <p>Think your phone has been hacked? Our trusted apps make it <br/> easy for you to scan, detect and remove threats from your <br/> iPhone and Android devices.</p>

                    <div className='btns'>
                        <button id='btn-yellow'>Get Certo for iPhone <i class="fa-solid fa-arrow-right"></i></button>
                        <button id='btn-white'>Get Certo for Android</button>    
                    </div>
                </div>
                <div className='img-main'>
                    <img src="./image/figure.png" alt=""/>
                </div>
                
            </div>
            
        </main>
       

    )
}

export default Main
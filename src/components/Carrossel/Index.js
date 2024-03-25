import '../Card/Index'

const Carrossel = ({ Card }) => {
    return (
        <div className='carrossel'>
            {cards.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    )
}

export default Carrossel
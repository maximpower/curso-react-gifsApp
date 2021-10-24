

const GifGridItem = ( {id, title, url} ) => {
    return (
        <div className='card'>
            <img src={url} alt={title} className="animate__animated animate__fadeIn" />
            <p> {title} </p>
        </div>
    )
}

export default GifGridItem
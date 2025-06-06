import markerIcon from '../assets/marker.png'

function Entry(props) {
  console.log(props)
  return (
    <article className='journal-entry'>
        <div className='main-image-container'>
            <img className='main-image' src={props.img.src} 
            alt={props.img.alt} />
        </div>
        <div className='info-container'>
            <img src={markerIcon} className='marker' alt="map marker icon" />
            <span className='country'>{props.country}</span>
            <a href={props.googleMapsLink} className='map-link'>View on Google Maps</a>
            <h2 className='entry-title'>{props.title}</h2>
            <p className='trip-dates'>{props.dates}</p>
            <p className='entry-text'>{props.text}</p>
        </div>
    </article>
  )
}

export default Entry
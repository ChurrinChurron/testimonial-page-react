import './styles/Rating.css'

const Rating = ({imgEmp, logoEmp, rating, user, review}) => {
  return (
    <div className="box">
        <div className="box__stars">
            <img src={imgEmp} className='box__logo' alt={logoEmp} />
            <img src={rating} alt="stars" />
        </div>
        <h3>{user}</h3>
        <p>{review}</p>
    </div>
  )
}

export default Rating
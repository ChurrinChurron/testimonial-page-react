import Rating from "./Rating";

const Ratings = () => {

const ratingDesc = [
    
    {
        id: 1,
        imgEmp: '../../public/google-testimonial.png',
        logoEmp: 'Google',
        imgStars: '../../public/stars-one.png',
        user: 'Samantha Lee',
        review: 'The checklist ensures that the review process is thorough'
    },

    {
        id: 2,
        imgEmp: '../../public/meta-testimonial.png',
        logoEmp: 'Meta',
        imgStars: '../../public/stars-two.png',
        user: 'Rachel Patel',
        review: 'I highly recommend the Writecream Business Description'
    }
];

  return (
    <div>
        {
            ratingDesc.map(ratings => {

                return <Rating 
                        key={ratings.id}
                        imgEmp={ratings.imgEmp}
                        logoEmp={ratings.logoEmp}
                        rating={ratings.imgStars}
                        user={ratings.user}
                        review={ratings.review}/>
            })
        }
    </div>
  )
}

export default Ratings
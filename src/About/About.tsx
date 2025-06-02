import Hours from '../Hours/Hours'
import Location from '../Location/Location'
import Plate3 from '/plate3.jpg';
import Plate1 from '/plate1.jpg';

function About() {

  return (
    <>
      {/* title card */}
      <div className='
        flex
        flex-col
        justify-center
        items-center
        min-h-[200px]

      '>
        <h1 className='
          text-4xl
          font-semibold
          tracking-tight
          text-balance
          text-white
          sm:text-7xl
        '>
          Our Story
        </h1>
      </div>
      {/* Content */}
      <div className='
        flex
        flex-col
        flex-grow
        gap-4
        bg-white/70
        lg:rounded-t-3xl
        p-8
        lg:p-16
      '>
        <div className='
          flex
          flex-col
          gap-32
          py-8
          items-center
          w-full
          mb-8
        '>
          <div className='
            flex
            flex-col
            md:flex-row
            gap-4
          '>
            <div className='
              flex
              flex-col
              flex-grow
              md:w-1/4
              gap-4
            '>
              <h3 className='
                text-3xl
                font-semibold
                text-gray-800
                text-center
              '>
                Danforth's Comfort Food for Over 4 Years
              </h3>
              <p className='
                text-center
                text-gray-600
                text-lg
                leading-relaxed
                flex-grow
              '>
                At Taste of Danforth, we started small—with a passion for great food, honest ingredients, and a dream to bring authentic South Asian flavors to our local community. What began as a humble kitchen has grown into a beloved spot on Danforth Avenue, where every dish is crafted with care, culture, and a whole lot of heart. Thanks to the support of our amazing customers and the dedication of our team, we've become more than just a restaurant—we're a destination for flavor, tradition, and warm hospitality. Each plate tells a tale of where we came from—and where we're headed, so come be part of our story!
              </p>
            </div>
            <img 
              src={Plate3} 
              className='
                object-cover
                rounded-lg
                shadow-2xl
                md:w-1/4
                flex-grow
              '
            />
          </div>

          <div className='
            flex
            flex-col-reverse
            md:flex-row
            gap-4
          '>
            <img 
              src={Plate1} 
              className='
                object-cover
                rounded-lg
                shadow-2xl
                md:w-1/4
                flex-grow
              '
            />
            <div className='
              flex
              flex-col
              flex-grow
              md:w-1/4
              gap-4
            '>
              <h3 className='
                text-3xl
                font-semibold
                text-gray-800
                text-center
              '>
                A Generous Sprinkle of Authentic
              </h3>
              <p className='
                text-center
                text-gray-600
                text-lg
                leading-relaxed
                flex-grow
              '>
                we believe great food starts with fresh ingredients and a love for tradition. Every dish on our menu is made using time-honored recipes and bold, classic spices that capture the true essence of South Asian cuisine. From the first sizzle in the pan to the final garnish, we take pride in delivering food that's not just delicious—but genuinely authentic. Our meats are halal and marinated in-house, our vegetables are hand-selected, and every bite is a reflection of our commitment to quality and culture.
              </p>
            </div>
          </div>

          {/* Hours */}
          <Hours />
          {/* Location */}
          <Location />
        </div>
      </div>
    </>
  )
}

export default About

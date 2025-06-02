import Hours from '../Hours/Hours'
import Location from '../Location/Location'
import Vibe from '/vibe.jpg';
import Sweets from '/sweets.jpg';

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
                A Small Eatery brought Birchmount Comfort Food
              </h3>
              <p className='
                text-center
                text-gray-600
                text-lg
                leading-relaxed
                flex-grow
              '>
                Tazij Shawarma and Pizza started as a small, family-run kitchen with a big dream — to bring fresh, flavorful halal food to the heart of Birchmount. What began with a simple grill, a few cherished family recipes, and a passion for good food quickly grew into a beloved local spot known for generous portions, homemade taste, and warm hospitality. Every dish we serve still carries the same care and tradition that started it all.
              </p>
            </div>
            <img 
              src={Vibe} 
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
              src={Sweets} 
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
                A Community Worth Cooking For
              </h3>
              <p className='
                text-center
                text-gray-600
                text-lg
                leading-relaxed
                flex-grow
              '>
                At Tazij, our kitchen is powered by more than just skill — it's driven by passion and a deep love for the community we serve. Our cooks come in each day with one goal: to make every meal feel like home. Whether they're grilling up a juicy shawarma plate, flipping burgers to perfection, or frying a fresh batch of crispy fries, every dish is crafted with care and flavor you can taste. What truly sets us apart is our pride in blending cultures through food. Alongside Birchmount's favorite comfort foods, our team delights in preparing traditional Bengali sweets — like nimki, samosas, and other homemade treats — a nod to their roots and a way to share a little sweetness with every guest.
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

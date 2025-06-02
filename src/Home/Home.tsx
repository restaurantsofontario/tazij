import Hours from '../Hours/Hours'
import StoreFront from '/front.jpg'
import Plate1 from '/plate1.jpg'

function Home() {
  return (
    <>
      {/* title card */}
      <div className='
        flex
        flex-col
        justify-center
        items-center
        min-h-[300px]

      '>
        <h1 className='
          text-4xl
          font-semibold
          tracking-tight
          text-balance
          text-white
          sm:text-7xl
        '>
          TAZIJ SHAWARMA AND PIZZA
        </h1>
        <p className='
          mt-8
          text-lg
          font-medium
          text-pretty
          text-red-200
          font-mono
          text-center
          px-4
        '>
          Scarborough's Shawarma and Pizzeria since 2020
        </p>
      </div>
      {/* Content */}
      <div className='
        flex
        flex-col
        flex-grow
        gap-4
        bg-white/80
        lg:rounded-t-3xl
        p-8
        lg:p-16
      '>
        {/* Synopsis Section */}
        <div className='
          flex
          flex-col
          gap-6
          items-center
          mb-8
        '>
          <h2 className='
            text-2xl
            font-semibold
            text-gray-800
            mb-4
          '>
            A Scarborough Classic Eatery
          </h2>
          <p className='
            text-center
            text-gray-600
            text-lg
            leading-relaxed
            mb-6
          '>
            At Tazij, we believe great food starts with fresh ingredients and ends with a satisfied smile. Whether you're craving a juicy shawarma wrap, a cheesy slice of pizza, or a hearty burger hot off the grill, we've got something for everyone. Our menu blends classic Middle Eastern flavors with local favorites, offering everything from crispy samosas to handcrafted Bengali sweets.
            Proudly serving the Birchmount community with generous portions, affordable prices, and friendly service, we're more than just a restaurant — we're a neighborhood staple.
          </p>
          <div className='
            flex
          '>
            <img 
              src={StoreFront} 
              className='
                object-cover
                w-1/4
                flex-grow
                rounded-lg
                shadow-2xl
                -mr-4
                -mb-4
              '
            />
            <img 
              src={Plate1} 
              className='
                object-cover
                w-1/4
                flex-grow
                rounded-lg
                shadow-2xl
                -mt-4
              '
            />
          </div>
        </div>

        {/* Hours Section */}
        <Hours />

        {/* Reviews Section */}
        <div className='
          flex
          flex-col
          items-center
        '>
          <h2 className='
            text-2xl
            font-semibold
            text-gray-800
            mb-4
          '>
            Reviews
          </h2>
          <div className='
            flex
            flex-col
            gap-4
            text-gray-600
            text-lg
            leading-relaxed
          '>
            <div className='
              bg-gray-100
              p-4
              rounded-lg
              shadow-sm
            '>
              <p>"Everything was fresh and good portions. Fast service and friendly staff."</p>
              <span className='
                text-sm
                text-gray-500
              '>– Chris via Google</span>
            </div>
            <div className='
              bg-gray-100
              p-4
              rounded-lg
              shadow-sm
            '>
              <p>"They clearly care about their customers and want to offer a great experience. I would be back in a heartbeat."</p>
              <span className='
                text-sm
                text-gray-500
              '>– Alyssa via Google</span>
            </div>
            <div className='
              bg-gray-100
              p-4
              rounded-lg
              shadow-sm
            '>
              <p>"I visited the store, staff was so friendly and kind. The food was so delicious especially the tea was outstanding. I wish to visit this store again and again."</p>
              <span className='
                text-sm
                text-gray-500
              '>– Monika via Google</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

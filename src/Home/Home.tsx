import Hours from '../Hours/Hours'
import StoreFront from '/front.jpg'
import Plate5 from '/plate5.jpg'

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
          TASTE OF DANFORTH
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
          THE TRUE COMFORT (FOOD) OF DANFORTH
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
            The Heart of Danforth since 2019
          </h2>
          <p className='
            text-center
            text-gray-600
            text-lg
            leading-relaxed
            mb-6
          '>
            Taste of Danforth is praised as the stand-out, must-visit spot in Scarborough for those craving authentic South Asian cuisine. With its delicious offerings, friendly service, and inviting ambiance, it's a culinary gem that continues to delight both locals and visitors alike.
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
              src={Plate5} 
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
              <p>"[Taste of Danforth] was an incredible experience!"</p>
              <span className='
                text-sm
                text-gray-500
              '>– Anisa via Google</span>
            </div>
            <div className='
              bg-gray-100
              p-4
              rounded-lg
              shadow-sm
            '>
              <p>"The snacks they offer are quite tasty, making it one of the top choices in the neighborhood."</p>
              <span className='
                text-sm
                text-gray-500
              '>– Stephen via Google</span>
            </div>
            <div className='
              bg-gray-100
              p-4
              rounded-lg
              shadow-sm
            '>
              <p>"Best samosa I've ever had in my life! Stopped to pick up more on my way home."</p>
              <span className='
                text-sm
                text-gray-500
              '>– Leslie via Google</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

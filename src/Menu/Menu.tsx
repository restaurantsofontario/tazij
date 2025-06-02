import ChickenBiryani from '/chickenbiryani.jpg';
import RiceChana from '/whitericechana.jpg';
import Menu1 from '/menu1.png';

function Menu() {

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
          Our Menu
        </h1>
      </div>
      {/* Content */}
      <div className='
        flex
        flex-col
        flex-grow
        gap-16
        bg-white/80
        lg:rounded-t-3xl
        p-8
        lg:p-16
      '>
        {/* Featured Section */}
        <div className='
          flex
          flex-col
          items-center
          gap-6
        '>
          <h2 className='
            text-4xl
            font-semibold
            text-gray-800
            text-center
          '>
            Danforth's Picks
          </h2>
          <div className='
            flex
            flex-col
            md:flex-row
            gap-4
          '>
            <h3 className='
              text-3xl
              font-semibold
              text-gray-800
              min-w-[200px]
            '>
              ▼ Chicken Biryani - $10.99
            </h3>
            <p className='
              text-gray-600
              text-lg
              leading-relaxed
            '>
              Fragrant basmati rice layered with tender, marinated chicken, slow-cooked with aromatic spices and herbs. Each bite delivers bold flavor, rich texture, and that perfect touch of heat. Served hot and fresh
            </p>
          </div>
          <div className='
            flex
            w-full
            flex-col
            md:flex-row
            gap-4
            md:my-8
          '>
            <img 
              src={ChickenBiryani} 
              className='
                object-cover
                h-80
                rounded-lg
                shadow-2xl
                w-full
                md:-mt-8
                md:w-1/4
                flex-grow
              '
            />
            <img 
              src={RiceChana} 
              className='
                object-cover
                h-80
                w-full
                rounded-lg
                shadow-2xl
                md:-mb-8
                md:w-1/4
                flex-grow
              '
            />
          </div>
          <div className='
            flex
            gap-4
            flex-col-reverse
            md:flex-row
          '>
            <p className='
              text-gray-600
              text-lg
              leading-relaxed
              text-right
            '>
              Fluffy basmati rice paired with slow-cooked chickpeas in a rich, spiced gravy—it's wholesome, hearty, and full of flavor. Perfect for a quick lunch or a cozy classic dinner.
            </p>
            <h3 className='
              text-3xl
              font-semibold
              text-gray-800
              min-w-[200px]
            '>
              ▲ White Rice with Chana - $8.99
            </h3>
          </div>
        </div>

        {/* Reviews Section */}
        <div className='
          flex
          flex-col
          items-center
          gap-8
        '>
          <h2 className='
            text-4xl
            font-semibold
            text-gray-800
          '>
            Full Menu (Click to Expand)
          </h2>
          <a href="https://restaurantsofontario.github.io/tasteofdanforth/menu1.png" target="_blank" rel="noopener noreferrer">
            <img src={Menu1} />
          </a>
        </div>
      </div>
    </>
  )
}

export default Menu

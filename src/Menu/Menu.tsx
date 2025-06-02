import BeefShawarmaPlate from '/beefshawarma.jpg';
import Burger from '/burger.jpg';
import Menu1 from '/menu1.jpg';
import Menu2 from '/menu2.jpg';

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
            Birchmount's Picks
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
              ▼ Beef Shawarma Plate - $13.99
            </h3>
            <p className='
              text-gray-600
              text-lg
              leading-relaxed
            '>
              Tender, marinated strips of halal beef, slow-roasted to perfection and served over a bed of fragrant basmati rice — our Beef Shawarma Plate is a fan favorite for a reason. Paired with crisp salad, warm pita, and our house-made garlic and tahini sauces, every bite is a delicious balance of bold spices and fresh ingredients.
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
              src={BeefShawarmaPlate} 
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
              src={Burger} 
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
              Sink your teeth into our juicy, flame-grilled beef burger — seasoned just right and stacked with fresh toppings on a soft, toasted bun. Served with a generous side of golden, crispy fries, this combo is comfort food done right.
            </p>
            <h3 className='
              text-3xl
              font-semibold
              text-gray-800
              min-w-[200px]
            '>
              ▲ Beef Burger Combo - $7.99
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
          <a href="https://restaurantsofontario.github.io/tasteofdanforth/menu1.png" target="_blank" rel="noopener noreferrer">
            <img src={Menu2} />
          </a>
        </div>
      </div>
    </>
  )
}

export default Menu

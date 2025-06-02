export default function Location() {

  return (
    <>
      <div className='
        flex
        flex-col
        items-center
        gap-4
        w-full
      '>
        <h3 className='
          text-3xl
          font-semibold
          text-gray-800
          text-center
        '>
          Location
        </h3>
        <iframe src="
        https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.1700321856933!2d-79.2693806896821!3d43.70701539219816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cfa13bf7cd81%3A0x835fb7e64fb6ab5d!2sTAZIJ%20SHAWARMA%20AND%20PIZZA!5e0!3m2!1sen!2sca!4v1748899573943!5m2!1sen!2sca
        " loading="lazy" className='
          rounded-lg
          w-full
          h-[400px]
        '></iframe>
      </div>
    </>
  )
}
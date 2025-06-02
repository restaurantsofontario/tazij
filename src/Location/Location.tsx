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
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1442.4252921917362!2d-79.2816723!3d43.692869599999995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cf565b0101c9%3A0x892ca4a1f3737888!2sTaste%20of%20Danforth!5e0!3m2!1sen!2sca!4v1748301723765!5m2!1sen!2sca" loading="lazy" className='
          rounded-lg
          w-full
          h-[400px]
        '></iframe>
      </div>
    </>
  )
}
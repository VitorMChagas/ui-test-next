import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <div className="relative mx-5 mt-6 text-center bg-cover">
        <Image
          src="/img/bg-people.png"
          alt="Picture of crowded place"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="relative z-10">
          <div className="px-8 py-4 bg-white bg-opacity-75 md:items-center md:flex md:h-28 lg:justify-between">
            <p className="mb-3 text-2xl leading-7 text-[--color-dark-gray] md:mr-4 md:text-xl lg:text-2xl">
              Is there anyone else you would want us to add?
            </p>
            <button className="w-full py-2 text-lg border-2 border-gray-700 md:py-3 md:flex-1 text-[--color-dark-gray] md:text-xl lg:text-2xl lg:max-w-[360px]">
              Submit a name
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[18px] mb-4 border-b-2 border-gray-700 border-dashed lg:my-9"></div>
      <footer className="flex items-center justify-between mb-8 mx-5 text-[--color-dark-gray] md:mb-11 md:mt-10">
        <ul className="space-y-4 text-sm cursor-pointer md:text-lg md:flex md:space-y-0 md:space-x-4">
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>Contact Us</li>
        </ul>
        <div className="self-end cursor-pointer md:flex">
          <span className="md:text-lg">Follow us</span>
          <div className="flex md:ml-3">
            <img
              width="24"
              height="24"
              src="img/facebook.svg"
              alt="facebook logo"
              className="mr-4"
            />
            <img
              src="img/twitter.svg"
              alt="twitter logo"
              width="26"
              height="23"
            />
          </div>
        </div>
      </footer>{' '}
    </>
  )
}

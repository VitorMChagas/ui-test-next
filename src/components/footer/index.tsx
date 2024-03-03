export default function Footer() {
  return (
    <>
      <div
        className="relative justify-between py-4 px-4 mt-6 mx-2 bg-[--color-light-gray] flex flex-col items-center"
        role="doc-tip"
        aria-label="Submit a name"
      >
        <img
          srcSet="/img/bg-people.png 750w, assets/img/bg-people.@2x.png 1440w"
          sizes="(min-width: 750px) 1440px, 100vw"
          className="absolute top-0 left-0 object-cover w-full pointer-events-none opacity-20"
          src="assets/img/bg-people.png"
          alt="Background Image with People at Street"
          role="none"
        />
        <div className="block">
          <h2 className="relative mb-4 text-[--color-dark-gray] text-[24px] font-normal text-center block">
            Is there anyone else you would want us to add?
          </h2>
        </div>
        <div className="w-full">
          <button className="relative block w-full py-4 border-2 border-[--color-darker-background] bg-transparent text-[--color-dark-gray] text-[18px]">
            Submit a name
          </button>
        </div>
      </div>
      <hr className="mx-4 my-6 border-0 border-b-2 border-dotted border-[--color-darker-background]" />
      <footer className="flex items-end justify-between mx-4 mb-12">
        <div className="block no-underline text-[--color-dark-gray]">
          <ul className="p-0 m-0 list-none">
            <li className="pt-2 text-[15px] list-item">
              <a href="#">Terms and Conditions</a>
            </li>
            <li className="pt-2 text-[15px] list-item">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="pt-2 text-[15px] list-item">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="block">
          <span className="text-[15px] text-right text-[--color-dark-gray]">
            Follow us
          </span>
          <ul className="flex mt-4">
            <li className="mr-4">
              <a href="#" className="">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24 1.325v21.35c0 .732-.593 1.325-1.325 1.325H16.56v-9.294h3.12l.467-3.622H16.56V8.771c0-1.048.292-1.763 1.796-1.763h1.918v-3.24a25.663 25.663 0 00-2.795-.143c-2.766 0-4.659 1.688-4.659 4.788v2.671H9.691v3.622h3.128V24H1.325A1.325 1.325 0 010 22.676V1.325A1.325 1.325 0 011.325 0h21.35A1.325 1.325 0 0124 1.325z"
                    fill="#262626"
                    fill-rule="nonzero"
                  />
                </svg>
              </a>
            </li>
            <li className="mr-4">
              <a href="#">
                <svg width="26" height="23" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M23.329 6.204c.01.23.01.458.01.687A15.182 15.182 0 01-.008 19.688c.421.05.845.075 1.27.073a10.7 10.7 0 006.627-2.289 5.335 5.335 0 01-4.984-3.704c.798.151 1.62.12 2.404-.094a5.346 5.346 0 01-4.276-5.233v-.073a5.396 5.396 0 002.413.666 5.357 5.357 0 01-1.654-7.127A15.15 15.15 0 0012.79 7.484a5.898 5.898 0 01-.135-1.217 5.336 5.336 0 019.228-3.652 10.612 10.612 0 003.392-1.29 5.368 5.368 0 01-2.351 2.955 10.811 10.811 0 003.07-.843 10.868 10.868 0 01-2.664 2.767z"
                    fill="#262626"
                    fill-rule="nonzero"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

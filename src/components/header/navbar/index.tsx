import useDeviceSize from '@hooks/useDeviceSize'

export default function NavBar() {
  const { isDesktop } = useDeviceSize()

  return (
    <div className="fixed z-20 min-h-[6rem] bg-gradient-to-b from-dark-nav pt-0 top-0 flex items-center justify-between w-full px-3 text-white md:pt-0 md:px-5 lg:mx-auto lg:px-[14%] lg:w-screen lg:min-w-[1100px]">
      <p className="text-[24px] font-normal lg:text-[2rem]">Rule of Thumb.</p>
      {!isDesktop ? (
        <button className="bg-[url('/img/hamburger.svg')] bg-no-repeat bg-contain h-[25px] w-[35px]" />
      ) : (
        <div className="w-[410px] text-[18px] font-light justify-between flex items-center translate-x-0 bg-transparent top-12">
          <button>Past Trials</button>
          <button>How It Works</button>
          <button>Log In/Sign Up</button>
          <button className="bg-[url('/img/search.svg')] bg-no-repeat center w-8 h-8 py-5" />
        </div>
      )}
    </div>
  )
}

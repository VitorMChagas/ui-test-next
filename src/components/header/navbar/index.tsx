import useDeviceSize from '@hooks/useDeviceSize'

export default function NavBar() {
  const { isDesktop } = useDeviceSize()

  return (
    <div className="fixed z-[2] flex w-full min-h-[10rem] justify-between bg-gradient-to-b from-dark-nav py-0 top-0 lg:px-28  md:px-8">
      <div className="flex items-center justify-between w-full text-white px-44 md:px-0">
        <p className="text-[2rem] font-normal">Rule of Thumb.</p>
        {isDesktop ? (
          <ul className="w-[410px] text-[18px] font-light justify-between flex items-center translate-x-0 bg-transparent top-12">
            <button>Past Trials</button>
            <button>How It Works</button>
            <button>Log In/Sign Up</button>
            <button className="bg-[url('/img/search.svg')] bg-no-repeat center w-8 h-8 py-5"></button>
          </ul>
        ) : (
          <button className="bg-[url('/img/hamburger.svg')] bg-no-repeat bg-contain h-[25px] w-[35px]"></button>
        )}
      </div>
    </div>
  )
}

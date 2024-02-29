export default function NavBar() {
  return (
    <div className="fixed z-[2] flex w-full min-h-[10rem] justify-between px-28 py-0 top-0 bg-gradient-to-b from-dark-nav">
      <div className="flex items-center justify-between w-full text-white px-44">
        <p className="text-[2rem] font-normal">Rule of Thumb.</p>
        <ul className="w-[410px] text-[18px] font-light justify-between flex items-center translate-x-0 bg-transparent top-12">
          <button>Past Trials</button>
          <button>How It Works</button>
          <button>Log In/Sign Up</button>
          <button className="bg-[url('/img/search.svg')] bg-no-repeat center w-8 h-8 py-5"></button>
        </ul>
      </div>
    </div>
  )
}
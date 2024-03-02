export default function ClosingInBar() {
  return (
    <div className="absolute bottom-0 flex w-full h-12 bg-light-bg md:h-[42px]">
      <div className="relative flex w-[30%] items-center justify-end p-0 font-light uppercase bg-dark-bg ">
        <span className="pr-3 text-white text-[22px] md:text-[14px]">
          closing in
        </span>
      </div>
      <div
        className="
        z-10 w-0 h-0 self-center border-l-8 border-l-[rgba(0,0,0,0.48)] border-y-8 border-y-transparent border-solid"
      />
      <div className="self-center pl-3">
        <span className="text-[2rem] font-normal text-dark-gray md:text-[18px]">
          22
        </span>
        <span className="text-[2rem] font-light md:text-[18px]">days</span>
      </div>
    </div>
  )
}

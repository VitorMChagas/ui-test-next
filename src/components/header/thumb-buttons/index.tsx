export default function ThumbButtons() {
  return (
    <div className="flex justify-between w-[204px] h-[32px] z-10 absolute bottom-0 md:w-[368px] md:h-[38.5px] lg:w-[552px] lg:h-[85px]">
      <button
        className="w-1/2 bg-thumbsbg-green hover:bg-thumbsbg-green-hover"
        aria-label="thumbs up"
      >
        <img
          className="m-auto md:h-5 lg:h-8 lg:max-w-8"
          src="/img/thumbs-up.svg"
          alt="thumbs up"
        />
      </button>
      <button
        className="w-1/2 h-auto bg-thumbsbg-yellow hover:bg-thumbsbg-yellow-hover"
        aria-label="thumbs down"
      >
        <img
          className="m-auto md:h-5 lg:h-8 lg:max-w-8"
          src="/img/thumbs-down.svg"
          alt="thumbs down"
        />
      </button>
    </div>
  )
}

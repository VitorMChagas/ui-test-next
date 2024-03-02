export default function ThumbButtons() {
  return (
    <div className="flex justify-between h-[85px] w-full z-10 md:max-w-[368px] md:h-[38.5px]">
      <button
        className="w-1/2 h-auto bg-thumbsbg-green hover:bg-thumbsbg-green-hover"
        aria-label="thumbs up"
      >
        <img
          className="h-8 m-auto max-w-8 md:h-5"
          src="/img/thumbs-up.svg"
          alt="thumbs up"
        />
      </button>
      <button
        className="w-1/2 h-auto bg-thumbsbg-yellow hover:bg-thumbsbg-yellow-hover"
        aria-label="thumbs down"
      >
        <img
          className="h-8 m-auto max-w-8 md:h-5"
          src="/img/thumbs-down.svg"
          alt="thumbs down"
        />
      </button>
    </div>
  )
}

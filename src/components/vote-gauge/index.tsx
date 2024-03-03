import ThumbsDown from '@components/thumbs-down'
import ThumbsUp from '@components/thumbs-up'

interface VoteTypes {
  positiveVotes: number
  negativeVotes: number
  isListView?: boolean
  thumbStyle?: string
}

export default function VoteGauge({
  positiveVotes,
  negativeVotes,
  isListView,
  thumbStyle,
}: VoteTypes) {
  const totalVotes = positiveVotes + negativeVotes
  const positivePercentage =
    totalVotes > 0 ? (positiveVotes / totalVotes) * 100 : 0
  const negativePercentage = 100 - positivePercentage

  const defaultStyle = {
    'min-width': '100%',
    width: `${positivePercentage}%`,
    background: `linear-gradient(to right, rgb(60 187 180 / 0.6) ${positivePercentage}%, rgb(249 173 29 / 0.6) ${positivePercentage}%)`,
  }

  return (
    <>
      <div
        className={
          isListView ? 'absolute bottom-0 lg:h-[54px] h-[32px]' : 'h-[35px]'
        }
        style={defaultStyle}
      ></div>
      <div className="relative flex items-end">
        <div
          className={`justify-between flex absolute px-1 ${isListView ? 'lg:w-[1100px] lg:text-[27px] lg:-bottom-[55px] w-[723px] text-[18px] -bottom-[40px]' : 'w-[350px]'}`}
        >
          <div
            className={`flex items-baseline justify-between ${isListView ? 'lg:w-[110px] lg:ml-[10px] w-[80px] ml-[5px] ' : ''} `}
          >
            <ThumbsUp thumbStyle={thumbStyle} isListView={isListView} />
            {positivePercentage.toFixed(1)}%
          </div>
          <div
            className={`flex items-baseline justify-between ${isListView ? 'lg:w-[110px] lg:ml-[10px] w-[80px] ml-[5px]' : ''}`}
          >
            {negativePercentage.toFixed(1)}%
            <ThumbsDown thumbStyle={thumbStyle} isListView={isListView} />
          </div>
        </div>
      </div>
    </>
  )
}

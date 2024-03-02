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
        className={isListView ? 'absolute bottom-0 h-[54px]' : 'h-[35px]'}
        style={defaultStyle}
      ></div>
      <div className="relative flex items-end">
        <div
          className={`justify-between flex absolute px-1 ${isListView ? 'w-[1100px] text-[27px] -bottom-[55px]' : 'w-[350px]'}`}
        >
          <div
            className={`flex items-baseline justify-between ${isListView ? 'w-[110px] ml-[10px]' : ''} `}
          >
            <ThumbsUp style={thumbStyle} isListView={isListView} />
            {positivePercentage.toFixed(1)}%
          </div>
          <div
            className={`flex items-baseline justify-between ${isListView ? 'w-[110px] ml-[10px]' : ''}`}
          >
            {negativePercentage.toFixed(1)}%
            <ThumbsDown style={thumbStyle} isListView={isListView} />
          </div>
        </div>
      </div>
    </>
  )
}

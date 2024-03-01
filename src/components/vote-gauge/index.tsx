import ThumbsDown from '@components/thumbs-down'
import ThumbsUp from '@components/thumbs-up'

interface VoteTypes {
  positiveVotes: number
  negativeVotes: number
}
const VoteGauge = ({ positiveVotes, negativeVotes }: VoteTypes) => {
  const totalVotes = positiveVotes + negativeVotes
  const positivePercentage =
    totalVotes > 0 ? (positiveVotes / totalVotes) * 100 : 0
  const negativePercentage = 100 - positivePercentage

  const barStyle = {
    'min-width': '100%',
    width: `${positivePercentage}%`,
    background: `linear-gradient(to right, rgb(60 187 180 / 0.6) ${positivePercentage}%, rgb(249 173 29 / 0.6) ${positivePercentage}%)`,
    height: '35px',
  }

  return (
    <>
      <div style={barStyle}></div>
      <div className="relative flex items-end">
        <div className="w-[350px] justify-between flex absolute  px-1">
          <div className="flex items-baseline">
            <ThumbsUp />
            {positivePercentage.toFixed(1)}%
          </div>
          <div className="flex items-baseline">
            {negativePercentage.toFixed(1)}%
            <ThumbsDown />
          </div>
        </div>
      </div>
    </>
  )
}

export default VoteGauge

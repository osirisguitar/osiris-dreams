'use client'
import ReactCountdown, { zeroPad } from 'react-countdown'
import { Heading } from './heading'

export const Countdown = ({ text, date }: { text: string; date: string }) => {
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: number
    hours: number
    minutes: number
    seconds: number
    completed: boolean
  }) => {
    if (completed) {
      // Render a completed state
      return <></>
    } else {
      // Render a countdown
      const countdown = `${days} : ${zeroPad(hours)} : ${zeroPad(
        minutes,
      )} : ${zeroPad(seconds)}`
      return (
        <>
          <Heading text={text} style='h1' />
          <Heading text={countdown} style='h1-pink' />
        </>
      )
    }
  }

  return <ReactCountdown date={date} renderer={renderer}></ReactCountdown>
}

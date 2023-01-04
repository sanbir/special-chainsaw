/** @jsx jsx */
import { jsx } from "theme-ui"
import {useEffect, useRef, useState} from "react";

const Countdown = ({period, tag}: {period: number, tag: string}) => {
    const [startTimestamp, setStartTimestamp] = useState<number>(0)

    const [daysLeft, setDaysLeft] = useState<number>(0)
    const [hoursLeft, setHoursLeft] = useState<number>(0)
    const [minutesLeft, setMinutesLeft] = useState<number>(0)
    const [secondsLeft, setSecondsLeft] = useState<number>(0)

    useEffect(() => {
        const currentTimestamp = new Date().getTime()
        const savedStartTimestamp = localStorage.getItem(tag)

        if (!savedStartTimestamp) {
            localStorage.setItem(tag, currentTimestamp.toString())
        }

        setStartTimestamp(currentTimestamp)
    }, [tag])

    const interval = useRef<NodeJS.Timer>();

    useEffect(() => {
        interval.current = setInterval(() => {
            const passedPeriod = new Date().getTime() - startTimestamp
            const periodLeft = Math.floor((period - passedPeriod % period) / 1000)
            const _daysLeft = Math.floor(periodLeft / (24 * 60 * 60))
            const _hoursLeft = Math.floor((periodLeft - _daysLeft * (24 * 60 * 60)) / (60 * 60))
            const _minutesLeft = Math.floor((periodLeft - _daysLeft * (24 * 60 * 60) - _hoursLeft * (60 * 60)) / 60)
            const _secondsLeft = (periodLeft - _daysLeft * (24 * 60 * 60) - _hoursLeft * (60 * 60) - _minutesLeft * 60)

            setDaysLeft(_daysLeft)
            setHoursLeft(_hoursLeft)
            setMinutesLeft(_minutesLeft)
            setSecondsLeft(_secondsLeft)
        }, 1000)

        return () => {
            clearInterval(interval.current)
        }
    }, [])

    return (
        <div>
            <span>{daysLeft}</span>
            <span>D&nbsp;</span>

            <span>{appendZero(hoursLeft)}</span>
            <span>:</span>

            <span>{appendZero(minutesLeft)}</span>
            <span>:</span>

            <span>{appendZero(secondsLeft)}</span>
        </div>
    )
}

function appendZero(left: number) {
    return left.toString().length === 1 ? '0' + left : left
}

export default Countdown

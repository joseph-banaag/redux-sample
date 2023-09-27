import React from 'react'
import { useAppSelector } from "@/app/redux/hooks"

export default function ReduxStateReceiver() {

    const message = useAppSelector(state => state.counter.message)

    return (
        <p className='text-white'>This is the message that comes from a variable: {message}</p>
    )
}

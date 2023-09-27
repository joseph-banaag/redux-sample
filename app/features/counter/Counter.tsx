import React from 'react'
import { useAppSelector, useAppDispatch } from "@/app/redux/hooks"
import { increment, decrement, sampleText } from "@/app/features/counter/counterSlice"
import ReduxStateReceiver from '@/app/components/ReduxStateReceiver'


export default function Counter() {
    const count = useAppSelector(state => state.counter.count)
    const dispatch = useAppDispatch()

    return (
        <>
            <h1 className="text-9xl text-white text-center">{count}</h1>
            <ReduxStateReceiver />

            <button onClick={() => dispatch(sampleText())}
                className="px-4 py-2 rounded-2xl bg-indigo-500 ">
                <p className="text-xl text-white flex justify-center items-center">
                    Press
                </p>
            </button>

            <div className="gap-3 flex">
                <button onClick={() => dispatch(increment())} className="px-4 py-2 rounded-2xl bg-indigo-500 w-[5em]"><p className="text-6xl text-white flex justify-center items-center">+</p></button>
                <button onClick={() => dispatch(decrement())} className="px-4 py-2 rounded-2xl bg-indigo-500 w-[5em]"><p className="text-6xl text-white flex justify-center items-center">-</p></button>
            </div>
        </>
    )
}

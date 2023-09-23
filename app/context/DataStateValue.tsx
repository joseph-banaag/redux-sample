import React from 'react'
import { UseData } from "@/app/context/DataContext"


export default function DataStateValue() {
    const { setData, data } = UseData()


    const handleSubmit = (e: any) => {
        e?.preventDefault()
        if (!data) {
            alert("No new data was added to the state")
        }
        return
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    onChange={(e) => setData(e.target.value)}
                    value={data}
                    className="px-2 py-3 rounded-md"
                    placeholder="change this text"
                />
                <button type="submit" className="bg-indigo-500 p-3 rounded-2xl text-white font-semibold">Submit</button>
            </form>
        </>
    )
}

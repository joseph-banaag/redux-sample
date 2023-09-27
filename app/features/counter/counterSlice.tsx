import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from "@/app/redux/store"

export interface CounterState {
    count: number
    message: string
}

const initialState: CounterState = {
    count: 0,
    message: ""
}

const message = "sample text" as string
export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        // add reducers here...
        // count is the initial state declared at line 8
        // inside reducers, the defined function are called actions.

        increment: state => {
            state.count += 1
        },
        decrement: state => {
            state.count -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.count += action.payload
        },
        sampleText: state => {
            state.message = message
        }
    }
})

export const { increment, decrement, incrementByAmount, sampleText } = counterSlice.actions

export const selectCount = (state: RootState) => state.counter.count


export default counterSlice.reducer
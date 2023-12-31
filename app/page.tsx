"use client"
import Counter from "@/app/features/counter/Counter"
import { store } from "@/app/redux/store"
import { Provider } from "react-redux"
import { UseData } from "@/app/context/DataContext"
import DataStateValue from "@/app/context/DataStateValue"

export default function Home() {
    const { 
        data,
    } = UseData()
    return (
        <main className="w-full flex-col flex justify-center items-center min-h-screen gap-11">
            <Provider store={store}>
                <h1 className="text-3xl text-white">Below is for the Redux state management</h1>
                <Counter />
                <h1 className="text-3xl text-white">Below is for the React hook useContext</h1>
                <div className="text-white flex justify-center items-center p-1 ">
                    <p>
                        Here is the value of the data state from the receiver component:
                    </p>
                    <p className="border w-[10em] h-auto px-5 py-5 flex justify-center items-center ms-2 overflow-clip">
                        {data}
                    </p>
                </div>
                <DataStateValue />
            </Provider>
        </main>
    )
}

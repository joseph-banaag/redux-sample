"use client"
import Counter from "@/app/features/counter/Counter"
import { store } from "@/app/redux/store"
import { Provider } from "react-redux"
import { UseData } from "@/app/context/DataContext"
import DataStateValue from "@/app/context/DataStateValue"

export default function Home() {
  const { data } = UseData()
  return (
    <main className="w-full flex-col flex justify-center items-center min-h-screen gap-11">
      <Provider store={store}>
        <Counter />
        <h1 className="text-3xl text-white">Below is for the React hook useContext</h1>
        <p className="text-white">Here is the value of the data state: {data}</p>
        <DataStateValue />
      </Provider>
    </main>
  )
}

"use client"
import Counter from "@/app/features/counter/Counter"
import { store } from "./redux/store"
import { Provider } from "react-redux"

export default function Home() {
  return (
    <main className="w-full flex-col flex justify-center items-center min-h-screen gap-11">
      <Provider store={store}>
        <Counter />
      </Provider>
    </main>
  )
}

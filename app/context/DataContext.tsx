"use client"
import { createContext, useContext, useState } from 'react';

interface DataContextType {
    data: string
    setData: (data: string) => void
    newSwitch: string,
    updateSwitch: (updatedSwitch: string) => void
}

const DataContext = createContext<DataContextType | undefined>(undefined)

export const DataContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState<string>("")
    const [newSwitch, setNewSwitch] = useState<string>("")

    const updateSwitch = (updatedSwitch: string) => {
        setNewSwitch(updatedSwitch)
    }

    return (
        <DataContext.Provider value={{
            data, setData,
            newSwitch, updateSwitch
        }}>
            {children}
        </DataContext.Provider>
    )
}

export const UseData = () => {
    const context = useContext(DataContext)
    if (context === undefined) {
        throw new Error("UseData must be used within the DataProvider")
    }
    return context
}


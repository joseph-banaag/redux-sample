"use client"
import { createContext, useContext, useState } from 'react';

interface DataContextType {
    data: string
    setData: (data: string) => void
}

const DataContext = createContext<DataContextType | undefined>(undefined)

export const DataContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState<string>("")

    return (
        <DataContext.Provider value={{
            data,
            setData
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


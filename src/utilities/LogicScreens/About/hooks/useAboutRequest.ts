import React, { useEffect } from 'react'
import useRequest from '../../../infastructure/Hooks/useRequest'
import About from '../../../infastructure/apis/About&Terms'
// import ProfileEventProps from '../interfaces/index.interface'
const {
    fetchAboutData
} = About

const {
    useState,
    useCallback
} = React

const useFetchProfileEventRequest = (url: string) => {
    const [data, setData] = useState<any>({})
    const [loading, setLoading] = useState<boolean>(false)


    const fetchData = useCallback(async () => {
        setLoading(true)
        if (typeof fetch === "function") {
            const data = await fetchAboutData(url)
            // console.log("res =>", data)
            setData(data)
            setLoading(false)
        } else {
            setData(undefined)
            setLoading(false)
        }
    }, [
        setLoading,
        setData,
        // required
    ])


    useEffect(() => { fetchData() }, [fetchData])
    return {
        data,
        loading
    }

}

export default useFetchProfileEventRequest
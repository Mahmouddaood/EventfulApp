import React from 'react'
const {
    useCallback,
    useEffect,
    useState
} = React


const useRequest = <T = Promise<any>>(fetch: T, required?: any) => {

    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(false)


    const fetchData = useCallback(async () => {
        setLoading(true)
        if (typeof fetch === "function") {
            const { data } = await fetch()
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
        required
    ])



    useEffect(() => {
        fetchData()
    }, [fetchData, required])

    return {
        data,
        loading,
        setData

    }


}


export default useRequest
import { useCallback, useEffect, useContext, useMemo, useState } from 'react'
import useRequest from '../../../infastructure/Hooks/useRequest'
import Home from '../../../infastructure/apis/Home'
import {
    EventfulDataProps,
    SearchValProps,
    SearchNameProps,
    EventItem,
    SearchStateProps
} from '../interfaces/index.interface'
import useInput from '../../../infastructure/Hooks/useInput'
import MainContext from '../../../Context/context'
import usePrevious from '../../../infastructure/Hooks/usePrevious'
const { fetchAllEvents, searchForEvents } = Home

const useFetchEventsRequest = (isRtl?: boolean, searchParam?: string | any): EventfulDataProps | any => {
    const { state, setContext } = useContext(MainContext)
    const { eventDeleted } = useMemo(() => state, [state])
    // const [eventDeleted, setEventDeleted] = useState(false)
    const prevEventDeleted = usePrevious(eventDeleted)
    const eventDeletedChanged = eventDeleted !== prevEventDeleted
    const [data, setData] = useInput<EventfulDataProps[] | any>([])
    const [loading, setLoading] = useInput<boolean>(false)
    const [
        searchStates, setSearchStates
    ] = useInput<SearchStateProps>({
        searchData: undefined,
        searchDone: false,
        searchValue: "",
        modalSearch: false,
        searchValues: {
            category: undefined,
            city: undefined,
            event_when: undefined
        },
        searchNames: {
            category: undefined,
            city: undefined,
            day: undefined
        }

    })
    const {
        searchValues,
        searchNames
    } = searchStates
    const [searchValue, setValue] = useInput<string>("")
    const [modalSearch, setModalSearch] = useInput(false)
    const [searchDone, setSearchDone] = useInput(false)
    const [searchData, setSearchData] = useInput<EventItem | any>(undefined)
    // const [searchValues, setSearchValues] = useInput<SearchValProps | any>({
    //     category: undefined,
    //     city: undefined,
    //     event_when: undefined
    // })
    // const [searchNames, setSearchNames] = useInput<SearchNameProps | any>({
    //     category: undefined,
    //     city: undefined,
    //     day: undefined
    // })
    const [singleModalVisible, setSingleModal] = useInput<string>("")

    // const { data, loading }: EventfulDataProps = useRequest(fetchAllEvents)

    const arbSortArray = [
        "لقائات",
        "أنشطة",
        "دورات تدريبية",
        "الأعمال",
        "ترفيه",
        "أخرى"
    ]
    const engSortArray = [
        "Meetup",
        "Activities",
        "Training courses",
        "Business",
        "ENTERTAINMENT",
        "Others"
    ]

    const fetchData = useCallback(async () => {
        // console.log("seachParam => ", searchParam)
        setLoading(true)
        const res = await fetchAllEvents(searchParam)
        // console.log("res =>", res)
        setData(isRtl ? (
            arbSortArray.map((a: string) => {
                return res.data.find((item: EventfulDataProps) => item.name_ar === a)
            }
            )) : (engSortArray.map((a: string) => {
                return res.data.find((item: EventfulDataProps) => item.name_en === a)
            }
            )))
        setLoading(false)
    }, [
        setLoading,
        setData,
        eventDeletedChanged

    ])

    const filterData = useCallback(async (val: string) => {
        setValue(val)
        const res = await fetchAllEvents(searchParam)
        const dataFiltered = res.data.filter((item: EventfulDataProps) => (isRtl ? item.name_ar : item.name_en) === val)
        setData(dataFiltered)

    }
        , [
            data,
            setData,
            setValue
        ])

    // console.log("data", data)

    const searchEvents = useCallback(async () => {
        const response = await searchForEvents(searchValues)
        // console.log("filteredFiltered=>", response.data.data)
        setSearchStates({
            ...searchStates,
            searchData: response.data.data,
            modalSearch: false,
            searchDone: true
        })

        // setModalSearch(false)
        // setSearchDone(true)
    }
        , [
            // setData,
            searchValues,
            setSearchStates,
            searchStates
            // setModalSearch,
            // setSearchDone,
            // setSearchData
        ])

    // console.log("searchStates", searchStates)
    useEffect(() => {
        fetchData()
    }, [fetchData])

    return {
        loading,
        data,
        filterData,
        searchValue,
        setValue,
        modalSearch,
        setModalSearch,
        searchValues,
        // setSearchValues,
        searchEvents,
        singleModalVisible,
        setSingleModal,
        // setSearchNames,
        // searchNames,
        // searchData,
        // searchDone,
        searchStates,
        setSearchStates
    }
}

export default useFetchEventsRequest
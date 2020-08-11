import React from 'react'

const { useEffect, useRef } = React


export default <T>(val: T): T => {
    const ref = useRef<T>()
    useEffect(() => {
        ref.current = val
    })
    return ref.current as T
}
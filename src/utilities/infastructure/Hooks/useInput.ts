import React from 'react'
const { useState } = React

type Returned<T> = [T, React.Dispatch<React.SetStateAction<T>>]

export default <T>(initialValue: T): Returned<T> => useState<T>(initialValue)

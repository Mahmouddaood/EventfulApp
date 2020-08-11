import React from 'react'
import Context, { initialState } from "./context";
import { ChildrenProps, StateProps } from './index.interface'
const { memo, useState } = React


const Store: React.FC<ChildrenProps> = ({ children }): JSX.Element => {
    const [state, setContext] = useState<StateProps>(initialState)

    return <Context.Provider
        value={{
            state,
            setContext
        }}
    >
        {children}
    </Context.Provider>

}

export default memo(Store)

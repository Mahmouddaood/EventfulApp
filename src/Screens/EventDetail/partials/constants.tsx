
export const firstCondition = (idx: number | any, third?: boolean) => third ?
    (!idx ?
        idx : idx === 1 ?
            idx + 2 : idx === 2 ?
                idx + 4 : idx === 3 ?
                    idx + 6 : idx === 4 &&
                    idx + 8
    ) : (
        !idx ?
            idx : idx === 1 ?
                idx + 1 : idx === 2 ?
                    idx + 2 : idx === 3 ?
                        idx + 3 : idx === 4 ?
                            idx + 4 : idx === 5 ?
                                idx + 5 : idx === 6 ?
                                    idx + 6 : idx === 7 &&
                                    idx + 7
    )

export const secondCondition = (idx: number | any, third?: boolean) =>
    third ? (
        !idx ? idx + 1 :
            idx === 1 ? idx + 3 :
                idx === 2 ? idx + 5 :
                    idx === 3 ? idx + 7 :
                        idx === 4 &&
                        idx + 9
    ) : (
            !idx ? idx + 1 :
                idx === 1 ? idx + 2 :
                    idx === 2 ? idx + 3 :
                        idx === 3 ? idx + 4 :
                            idx === 4 ?
                                idx + 5 : idx === 5 ?
                                    idx + 6 : idx === 6 ?
                                        idx + 7 : idx === 7 &&
                                        idx + 8
        )


export const thirdCondition = (idx: number | any) => !idx ? idx + 2 :
    idx === 1 ? idx + 4 :
        idx === 2 ? idx + 6 :
            idx === 3 ? idx + 8 :
                idx === 4 &&
                idx + 10 

export type Data = {
    list: {
            amount: number,
            date: Date
    }[]
}

export type Month = {
    props: {
        month: string,
        amount: number
    }[]
}

export type Year = {
    props: {
        year: number,
        amount: number
    }[]
}
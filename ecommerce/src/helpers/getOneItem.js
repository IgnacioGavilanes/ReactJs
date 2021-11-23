import {data} from "../data/data"

export const getOneItem = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(data[0])
        } , 3000)
    })
}

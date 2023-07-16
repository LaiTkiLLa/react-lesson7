import {configuration} from "../configuration";

export const getFetch = async () => {
    const data = await fetch(configuration['url'], {method: 'GET'})
    return data.json()
}
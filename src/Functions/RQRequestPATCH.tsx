import { tokenStorage } from "../exports"

export default function (link: string, body: any, file: boolean = false) {
    const body_ = file ? (body) : JSON.stringify(body)
    const headers: any = file ?
        { 'Authorization': `JWT ${JSON.parse(localStorage.getItem(tokenStorage) as any).access}` }
        :
        {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${JSON.parse(localStorage.getItem(tokenStorage) as any).access}`
        }

    return fetch(link, {
        method: 'PATCH',
        headers: headers,
        body: body_
    })
}
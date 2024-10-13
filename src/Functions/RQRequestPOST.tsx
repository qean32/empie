import { tokenStorage } from "../services/USERServices"

export default function (link: string, body: any, Auth: boolean = true) {
    const headers: any = Auth ? { 'Content-Type': 'application/json', 'Authorization': `JWT ${JSON.parse(localStorage.getItem(tokenStorage) as any).access}` } : { 'Content-Type': 'application/json', }
    return fetch(link, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    }).then(results => results.json())
}
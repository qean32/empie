export default function (link: string, body: any, Auth: boolean = true) {
    const headers: any = Auth ? { 'Content-Type': 'application/json', 'Autorization': `JWT ${localStorage.getItem('token')}` } : { 'Content-Type': 'application/json', }
    return fetch(link, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    }).then(results => results.json()).then(results => console.log(results))
}
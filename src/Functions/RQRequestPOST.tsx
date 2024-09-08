export default function (link: string, body: any) {
    return fetch(link, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Autorization': `JWT ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(body)
    }).then(results => results.json())
}
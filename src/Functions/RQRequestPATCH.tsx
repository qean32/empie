export default function (body: any, link: string) {
    return fetch(link, {
        method: 'PATCH',
        headers: {
            // 'Content-Type': 'application/json',
            'Autorization': `JWT ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(body)
    })
}
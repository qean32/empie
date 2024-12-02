export default function (link: string) {
    return fetch(link).then(results => results.json())
        .catch(() => console.log('ошибка запроса!'))
}
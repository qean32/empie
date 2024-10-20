export default function (name: string) {
    return (name.trim().length < 1 || name.match(/[a-z]/i) || name.match(/[0-9]/))
}
export default function (password: string) {
    return (password.trim().length > 6 && password.match(/[0-9]/) && password.match(/[a-z]/))
}
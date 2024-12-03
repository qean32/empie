export default (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = Math.floor(Math.random() * 1000000)
    const nameProject = 'space_gallery'
    const input = e.currentTarget

    if (!input.files) return
    const previousFile = input.files[0]
    const newFile = new File([previousFile], `${nameProject}_${newName}.png`)
    const dT = new DataTransfer()
    dT.items.add(newFile)
    input.files = dT.files

    return input.files.item(0)
}
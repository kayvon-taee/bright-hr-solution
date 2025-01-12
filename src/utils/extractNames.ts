import {DocumentInterface} from "../../utils/types/types";

const extractNames = (data: DocumentInterface) => {
    const names : string[] = []
    data.forEach(entry => {
        if ('files' in entry) {
            names.push(entry.name)
            entry.files.forEach(file => {
                names.push(file.name)
            })
        } else {
            names.push(entry.name)
        }
    })
    return names
}

export default extractNames
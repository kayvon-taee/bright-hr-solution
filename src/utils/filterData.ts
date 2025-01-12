import {DocumentInterface} from "../../utils/types/types";

const filterData = (data: DocumentInterface, fileName: string) => {
    if (fileName === '') {
        return data
    }
    return data.flatMap(entry => {
        if ("files" in entry) {
            return entry.files.filter(file => file.name === fileName)
        }
        if (entry.name === fileName) {
            return entry
        }
        return []
    })
}

export default filterData
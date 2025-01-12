export interface FileInterface {
    type: string,
    name: string,
    added: string
    size: number // In KB
}

export interface FolderInterface {
    type : "folder"
    name: string,
    files: FileInterface[]
}

export type DocumentInterface = (FileInterface | FolderInterface)[]
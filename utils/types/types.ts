export interface FileInterface {
    type: string,
    name: string,
    added: string
}

export interface FolderInterface {
    type: string
    name: string,
    files?: FileInterface[]
}

export type DocumentInterface = (FileInterface | FolderInterface)[]
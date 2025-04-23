export type carosoulItem = {
    id: number,
    image: string,
    title: string,
    description: string,
    link: string
}

export interface carosoulProps {
    items: carosoulItem[],
    title: string
}
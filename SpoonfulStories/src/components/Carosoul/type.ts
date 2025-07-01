import React from "react"

export type carosoulItem = {
    id: number,
    image: string,
    title: string,
    description: string,
    link: string
}

export interface carosoulProps {
    items: React.JSX.Element[],
}
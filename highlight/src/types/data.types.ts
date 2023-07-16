import React from "react";

export type Children = {
    children: React.ReactNode
}

export type Articles = {
    title: string,
    views: number
}

export type Videos = {
    url: string,
    views: number
}

export type Lists = {
    list: {
        url?: string,
        views: number
        type: string
        title?: string
    }[]
}
import React from 'react'

export const host: string = 'http://127.0.0.1:8000'
export const techwork: boolean = false

export enum colors {
    maincolor = '#E74343',
    greencolor = 'asd',
    backgroundcolor = ''
}

export enum direction {
    bascketball = 'bascketball',
    cs = 'cs',
    dota = 'dota'
}

export const positioncenterbyabsolute:  React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}
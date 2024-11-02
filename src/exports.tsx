import React from 'react'

export const host: string = 'http://127.0.0.1:8000/api/'
// export const host: string = 'http://127.0.0.1:8000/api/'
export const techwork: boolean = false

export const tokenStorage: any = 'tokenStorage'
export const userwashereStorage = 'userwashereStorage'

export enum colors {
    maincolor = '#E74343',
    greencolor = '#0d9e0d',
    backgroundcolor = '#242424',
    backgroundcolor_l = '#292929'
}

export enum direction {
    bascketball = 'bascketball',
    cs = 'cs',
    dota = 'dota'
}

export enum idDirection {
    bascketball = 3,
    cs = 1,
    dota = 2
}

export const positioncenterbyabsolute: React.CSSProperties = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}

export const positioncenterbyflex: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
}

export const arrey = [{}, {}, {}, {}]
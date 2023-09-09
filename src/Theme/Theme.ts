import { DefaultTheme } from "styled-components"


const theme: DefaultTheme = {
    colors: {
        primary: '#8F00FF',
        secondary: '#ADD8E6',
        dark: ' #323441',
        error: '#D2122E',
        light: '#F5F5F5',
        muted: '#DCDCDC',
        success: '#01796F',
        warning: '#FF5E0E'
    },
    fonts: {
        family: {
            heading: 'Big Shoulders Inline Text',
            body: 'Karma',
            title: 'Klee One',
            subTitle: 'Poppins'
        },
        sizes: {
            heading: '18px',
            title: '16px',
            subTitle: '14px',
            body: '12px'
        },
        weights: {
            light: 300,
            medium: 400,
            bold: 500,
            bolder: 600
        }

    }
}


export default theme
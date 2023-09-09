
import 'styled-components'

declare module 'styled-components' {


    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            dark: string;
            light: string;
            muted: string;
            success: string;
            error: string;
            warning: string;
        },
        fonts: {
            family: {
                body: string;
                heading: string;
                title: string;
                subTitle: string;
            },
            sizes: {
                body: string;
                heading: string;
                title: string;
                subTitle: string;
            },
            weights: {
                light: number;
                medium: number;
                bold: number;
                bolder: number;
            }

        }
    }
}
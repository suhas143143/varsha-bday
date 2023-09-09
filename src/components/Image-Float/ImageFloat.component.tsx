import { Grid } from "@mui/material"


export interface IImageFloat {
    primary: React.ReactNode;
    secondary: React.ReactNode
}

type ImageFloatProps = {
    props: IImageFloat
}

export const GridStyle: React.CSSProperties = {
    height: '50vh',
    padding: '30px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: "white",
    margin: '0px'
}

const ImageFloat = ({ props }: ImageFloatProps) => {

    const { primary, secondary } = props



    return (
        <>

            <Grid item md={6} sx={GridStyle}>
                {primary}
            </Grid>

            <Grid item md={6} sx={GridStyle} >
                {secondary}
            </Grid>


        </>
    )
}


export default ImageFloat
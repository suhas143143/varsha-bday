import { Grid } from "@mui/material"
import { GridStyle } from "../../components/Image-Float/ImageFloat.component"
import { Generosity, Mesmerizing } from "./Data"



const About = () => {
    return (
        <>




            <Grid container columnSpacing={4} rowSpacing={10} sx={{ margin: '0px' }} >
                <Grid item md={6} sx={{ ...GridStyle, height: '70vh' }} >
                    {Mesmerizing.primary}
                </Grid>
                <Grid item md={6} sx={{ ...GridStyle, height: '70vh' }} >
                    {Mesmerizing.secondary}
                </Grid>

                <Grid item md={6} sx={{ ...GridStyle, height: '60vh' }}>
                    {Generosity.primary}
                </Grid>
                <Grid item md={6} sx={{ ...GridStyle, height: '60vh' }}>
                    {Generosity.secondary}
                </Grid>

                {/* <Grid item md={6} sx={{ ...GridStyle, height: '78vh' }} >
                    {Forgiveness.primary}
                </Grid>
                <Grid item md={6} sx={{ ...GridStyle, height: '78vh' }}>
                    {Forgiveness.secondary}
                </Grid>

                <Grid item md={6} sx={{ ...GridStyle, height: '70vh' }}>
                    {Respect.primary}
                </Grid>
                <Grid item md={6} sx={{ ...GridStyle, height: '70vh' }} >
                    {Respect.secondary}
                </Grid> */}
            </Grid>

        </>
    )
}


export default About
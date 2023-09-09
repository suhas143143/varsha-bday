import { IImageFloat } from "../../components/Image-Float/ImageFloat.component"
import { ImageStyle, ParagraphStyle } from "./About.styles"
import image1 from '../../assets/images/image1.jpg'
import image2 from '../../assets/images/image2.jpg'




export const Mesmerizing: IImageFloat = {
    primary: <ImageStyle src={image1} alt="image" style={{ height: '100%', width: '60%' }} />,
    secondary: <ParagraphStyle> I want to celebrate the incredible friendship we've built over the past four years. You've been my confidant, partner in crime, and the source of countless cherished memories. May your birthday be as bright and beautiful as the bond we share, and may the next four years be even more amazing. Happy Birthday, my dear friend!". </ParagraphStyle>
}

export const Generosity: IImageFloat = {
    primary: <ParagraphStyle> Your presence in my life has brought endless joy, unwavering support, and countless cherished memories. You've been there through thick and thin, and I couldn't imagine this journey without you. As we look forward to the future, may your life be filled with even more love, laughter, and happiness.Happy Birthday to the one who means the world to me. Cheers to many more years of our wonderful friendship!" 🎂🎉🥂 </ParagraphStyle>,
    secondary: <ImageStyle src={image2} alt="image" style={{ height: '100%', width: '60%' }} />
}

import { Meta, StoryObj } from "@storybook/react";
import ImageFloat from "./ImageFloat.component";
import { Mesmerizing } from "../../pages/About/Data";


const meta: Meta<typeof ImageFloat> = {
    title: 'Custom / ImageFloat',
    component: ImageFloat
}


export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
    args: {
        props: Mesmerizing
    }
}
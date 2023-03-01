import { Meta, Story } from "@storybook/react";
import Button from "../components/CarService/Button";
import { decorators } from "../../.storybook/preview";
import { action } from "@storybook/addon-actions";
import { IButtonProps } from "../types/types";

export default {
  title: "버튼",
  component: Button,
  decorators,
  // argTypes: { onClick: { action: "clicked" } },
} as Meta;

const Template = (args) => <Button {...args} />;
export const Basic: Story<IButtonProps> = Template.bind({});
export const Primary: Story<IButtonProps> = Template.bind({});

Basic.args = {
  label: "Click 📝",
};

Primary.args = {
  label: "Press 📝",
};

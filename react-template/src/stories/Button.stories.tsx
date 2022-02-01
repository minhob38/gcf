import { Meta, Story } from "@storybook/react";
import Button from "../components/Button";
import { decorators } from "../../.storybook/preview";
import { IButtonProps } from "../types/types";

export default {
  title: "버튼",
  component: Button,
  decorators,
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

import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button/Filled',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

};
const Template = (args) => <Button {...args} />;
export const PrimaryFilled = Template.bind({});
export const SecondaryFilled = Template.bind({});
export const WarningFilled = Template.bind({});
export const DangerFilled = Template.bind({});
export const SuccessFilled = Template.bind({});
export const InfoFilled = Template.bind({});
PrimaryFilled.args = {
  color:"primary",
  variant: "filled",
  btnType:"button",
  label:"Primary Filled"
};
SecondaryFilled.args = {
  color:"secondary",
  variant: "filled",
  btnType:"button",
  label:"Secondary Filled"
};
WarningFilled.args = {
  color:"warning",
  variant: "filled",
  btnType:"button",
  label:"Warning Filled"
};
DangerFilled.args = {
  color:"danger",
  variant: "filled",
  btnType:"button",
  label:"Danger Filled"
};
SuccessFilled.args = {
  color:"success",
  variant: "filled",
  btnType:"button",
  label:"Success Filled"
};
InfoFilled.args = {
  color:"info",
  variant: "filled",
  btnType:"button",
  label:"Info Filled"
};


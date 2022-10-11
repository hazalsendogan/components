import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button/Outlined',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

};
const Template = (args) => <Button {...args} />;
export const PrimaryOutlined = Template.bind({});
export const SecondaryOutlined = Template.bind({});
export const WarningOutlined = Template.bind({});
export const DangerOutlined = Template.bind({});
export const SuccessOutlined = Template.bind({});
export const InfoOutlined = Template.bind({});
PrimaryOutlined.args = {
  color:"primary",
  variant: "outlined",
  btnType:"button",
  label:"Primary Filled"
};
SecondaryOutlined.args = {
  color:"secondary",
  variant: "outlined",
  btnType:"button",
  label:"Secondary Filled"
};
WarningOutlined.args = {
  color:"warning",
  variant: "outlined",
  btnType:"button",
  label:"Warning Filled"
};
DangerOutlined.args = {
  color:"danger",
  variant: "outlined",
  btnType:"button",
  label:"Danger Filled"
};
SuccessOutlined.args = {
  color:"success",
  variant: "outlined",
  btnType:"button",
  label:"Success Filled"
};
InfoOutlined.args = {
  color:"info",
  variant: "outlined",
  btnType:"button",
  label:"Info Filled"
};

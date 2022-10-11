import React from 'react';

import { Dropdown } from './Dropdown';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Dropdowns',
  component: Dropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

};
const Drop = (args) => <Dropdown {...args} />;
export const PrimaryDropdown= Drop.bind({});
PrimaryDropdown.args = {
    color:"primary",
    variant: "filled",
    btnType:"button",
    label:"Dropdown Button",
    dropdownItems: [
        {to:"#",label: "Link1"},
        {to:"#",label: "Link2"},
        {to:"#",label: "Link3"},
        
    ],

}

PrimaryDropdown.storyName = "Dropdown Button";
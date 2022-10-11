import React, {useState} from 'react';
import PropTypes from 'prop-types';
import "./styles/index.scss";
import { Button } from './Button';
import { DropdownMenu } from './DropdownMenu';
import { Link } from 'react-router-dom';

export const Dropdown = ({btnType,color, variant, label,dropdownItems, ...props}) => {
    const handleClick = (e) => {
        const wrapper = e.target.parentElement;
        wrapper.classList.toggle("open");
    }
    return(
        <div className='dropdown-wrapper'>
            <Button btnType={btnType} color={color} variant={variant} label={label} onClick={handleClick}/>
            <DropdownMenu dropdownItems={dropdownItems} />
        </div>
    )
}
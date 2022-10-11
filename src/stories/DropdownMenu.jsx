import React, {useState} from 'react';
import PropTypes from 'prop-types';
import "./styles/index.scss";
import { Button } from './Button';
import { Link } from 'react-router-dom';

export const DropdownMenu = ({dropdownItems, ...props}) => {
    const [items, setItems] = useState(dropdownItems);
    return(
        <div className='dropdown-menu'>
            <ul>
                {
                    dropdownItems.map((item,key) => (
                    <li key={key}>
                        <a href={item.to}>{item.label}</a>
                    </li>
                    ))
                }
            </ul>
        </div>
    )
}

DropdownMenu.propTypes = {
    dropdownItems: PropTypes.array.isRequired
}
import styled from 'styled-components';
import {theme} from '../../../styles/theme';

const Button = styled.button`
    align-items: center;
    appearance: none;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    padding: 8px 16px;
    margin: 0 16px 0 0;
    user-select: none;
    transition: all 0.2s ease-in-out;
    text-align: center;

    &:hover,
    &:active {
    text-decoration: none;
    }

    &:focus {
    outline: none;
    }

    &:disabled,
    &.isDisabled {
    color: #EDEDED;
    cursor: not-allowed;
    background-image: none !important;
    background: #EDEDED;
    border-color: transparent;
    }

    &.secondary {
        border: 1px solid ${theme.colors.grey_40};
        color: ${theme.colors.grey_60} !important;
        background-color: transparent;
        &:hover,
        &:active {
          border: 1px solid ${theme.colors.grey_60};
        }
    }
`

export default Button;
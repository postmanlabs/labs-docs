import styled from 'styled-components';


export const ButtonStyles = styled.div`
// Base button styles
.btn {
  appearance: none; // Corrects inability to style clickable "input" types in iOS.
  border: 1px solid transparent;
  border-radius: ${(props) => props.theme.borderRadius.small};
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.Inter};
  font-weight: 600 !important;
  line-height: 1.5;
  margin: 0 0 16px 0;
  position: relative;
  transition: 0.2s ease-in-out;
  user-select: none;
}
  // Primary Hollow Button
  .btn.primary-hollow {
    color: ${(props) => props.theme.colors.grey_70};
    background-color: transparent !important;
    border: 1px solid ${(props) => props.theme.colors.grey_40};
    padding: 8px 16px;
    text-align: center;
    white-space: nowrap;
    :hover {
      border: 1px solid ${(props) => props.theme.colors.grey_60};
      text-decoration: none !important;
    }
  

    :disabled,
    .isDisabled {
      color: #666666 !important;
      cursor: not-allowed;
      background-image: none !important;
      background: #F4F4F4 !important;
      border-color: transparent;
    }
  }

  // Primary Button
  &.btn__primary {
    color: ${(props) => props.theme.colors.grey_00};
    background-color: ${(props) => props.theme.colors.orange_50};
    border-color: ${(props) => props.theme.colors.orange_50};
    padding: 13px 32px;
    text-align: center;
    white-space: nowrap;
    &:hover,
    &.hover {
      opacity: 0.7;
    }

    &:disabled,
    &.isDisabled {
      color: #666666 !important;
      cursor: not-allowed;
      background-image: none !important;
      background: #F4F4F4 !important;
      border-color: transparent;
    }
  }

  // Secondary Button (Light)
  &.btn__secondary-light {
    color: #1C272B;
    background-color: ${(props) => props.theme.colors.grey_00};
    background-image: none;
    border: 1px solid ${(props) => props.theme.colors.grey_00};
    border-radius: ${(props) => props.theme.borderRadius.small};
    outline: 0;
    padding: 13px 24px;
    text-align: center;

    &:hover,
    &:active,
    &.selected {
      border-color: #F4F4F4;
      color: #1C272B;
      background-color: #F4F4F4;
    }

    &:focus {
      border-color: #1C272B;
      box-shadow: 0 0 0 0.2em rgba(#1C272B, 0.3);
    }

    &:disabled,
    &.isDisabled {
      background-color: #F4F4F4;
      border-color: #F4F4F4;
      color: #666666;
      cursor: not-allowed;
    }
  }

  &.btn__small {
    font-size: 14px;
    padding: 12px 16px;
    text-align: center;
  }

  &:hover {
    background-repeat: repeat-x;
    text-decoration: none;
  }

  &:focus {
    outline: 0;
  }

  &:disabled,
  &.isDisabled {
    cursor: default;
    // Repeat background-position because :hover
    background-position: 0 0;
  }

  &:active,
  &.selected {
    background-image: none;
  }

  // ICONS
  // class starting with "pm-icon-" get styled by _pm-icons.scss file.
  // class .glyphicon gets styled by bootstrap.css file.
  i {
    margin-right: 8px;
    // gets rid of weird background bug with our icons. We need to redo these.
    background: 0 0;
  }

`
export const LinkStyle = styled.a`
    height: 24px;
    color: ${(props) => props.theme.colors.blue_60};
    text-decoration: none;

    &:hover {
      text-decoration: none;
      border-bottom: 1px solid ${(props) => props.theme.colors.blue_60};
    }

`


import React from 'react';
import classnames from 'classnames';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      ${props =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `;
  }}
`;

const sizes = {
  large: {
    height: '2.6rem',
    fontSize: '1.12rem'
  },
  medium: {
    height: '2.2rem',
    fontSize: '1rem'
  },
  small: {
    height: '1.95rem',
    fontSize: '0.875rem'
  }
};

const sizeStyles = css`
${({ size }) => css`
height: ${sizes[size].height};
font-size: ${sizes[size].fontSize};
`}
`;

const fullWidthStyle = css`
  ${props =>
    props.fullWidth ?
    css`
      width: 100%;
      justify-content: center;
      & + button {
        margin-left: 0;
        margin-top: 1rem;
      }
    ` :
    css`
      & + button {
        margin-left: 1rem;
      }
    `
  }
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
  ${colorStyles}

  /* 기타 */
  ${fullWidthStyle}
`;

function Button({ children, color, size, outline, fullWidth, ...rest }) {
  return (
    <StyledButton
      className={classnames({ fullWidth })}
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: 'blue',
  size: 'medium'
};

export default Button;
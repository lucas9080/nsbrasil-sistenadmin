import React from 'react';
import styled from 'styled-components';

const Button = ({children}) => {

    const Button = styled.button`
        margin: 0 auto;
        width: 200px;
        height: 40px;
        background: #000;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
    `;
    return (

        <Button>{children}</Button>
      
    )
}
export default Button;
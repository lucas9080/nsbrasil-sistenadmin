import React from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import {Div, DivContent} from './style.js';

export default function Login(){
    return (
        <Div>
          
               <Input placeholder="digite seu Email"/>
               <Button children={"acessar"} />
              
        </Div>
    )
}     
import styled from 'styled-components/native';

import Input from '../../components/Input'
import Button from '../../components/Button';


export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    background: papayawhip;
`;

export const Form = styled.View`
    align-self: stretch;
    margin-bottom: 50px;
`

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
`;
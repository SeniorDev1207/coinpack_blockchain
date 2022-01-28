import React, { useState } from 'react';
import styled from 'styled-components';

const Transfer = () => {
    const [amount, setAmount] = React.useState('');
  return (
    <Wrapper>
        <Amount>
            <FlexInputContainer>
                <FlexInput 
                    placeholder='0'
                    type='number'
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    />
                <span>ETH</span>
            </FlexInputContainer>
            <Warning style={{ color: amount && '#0a0b0d'}}>Amount is required</Warning>
        </Amount>
    </Wrapper>
  );
};

export default Transfer;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1;
`

const Amount = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`
const FlexInputContainer = styled.div`
    flex: 1;
    display: flex;
    alignn-items: flex-end;

    & > span {
        font-size: 3rem;
        margin-bottom: 0.5rem;
        color: #3773f5;
    } 
`

const FlexInput = styled.input`
    border: none;
    background: none;
    outline: none;
    color: white;
    font-size: 2rem;
    text-wrap: none;
    text-align: right;
    max-width: 45%;
    marginn-right: 0.5rem;
    font-size: 2rem;
    color: #3773f5;

    &::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button{
        -webkit-appearance: none;
    }
`
const Warning = styled.div`
    padding: 1rem 0 2rem 0;
    text-align: center;
    color: #ff5a5f;
`
const Divider = styled.div`
    border-bottom: 1px solid #282b2f;
`
const Rows = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #8a919e;
    padding: 1rem 0;
    font-size: 1.2rem;
`
const FieldName = styled.div`
    width: 50%;
    text-align: left;
`
const Icon = styled.div`
    margin-right: 1rem;
    height: 1.8rem;
    width: 1.8rem;
    border-radius: 50%;
    overflow: hidden;
    display: grid;
    place-items: center;

    & > img {
        height: 120%;
        width: 120%;
        object-fit: cover;
    }
`



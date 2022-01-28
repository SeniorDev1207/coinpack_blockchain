import React, { useState } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import styled from 'styled-components';
import Transfer from './Transfer';

const TransferModal = () => {
    const [action, setAction] = React.useState('send');

    const selectedStyle = {
        color: '#3773f5',
    }
    const unselectedStyle = {
        border: '1px solid #282b2f',
    }

    const  selectedModel = (options) => {
        switch(options){
            case 'send':
                return <Transfer />
            case 'receive':
                return <h2>Receive</h2>
            case 'buy':
                return <h2>Buy</h2>
        }
    }
    return (<Wrapper>
        <Selector>
            <Option
                style={action === 'send' ? selectedStyle : unselectedStyle}
                onClick={()=> setAction('send')}
            >
                <p>Send</p>
            </Option>
            <Option
                style={action === 'receive' ? selectedStyle : unselectedStyle}
                onClick={()=> setAction('receive')}
            >
                <p>Receive</p>
            </Option>    
        </Selector>
        <ModalMain>
            {selectedModel(action)}
        </ModalMain>
    </Wrapper>);
};

export default TransferModal;

const Wrapper = styled.div`
    height: 35rem;
    color: white;
    width: 27rem;
    border: 1px solid #282b2f;
    display: flex;
    flex-direction: column;
`
const Selector = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
`
const Option = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    font-size: 1.3rem;
    font-weight: 600;

    &:hover {
        cursor: pointer;
        background-color: #111214;
    }
`
const ModalMain = styled.div`
    padding: 1rem;
    flex: 1;
`

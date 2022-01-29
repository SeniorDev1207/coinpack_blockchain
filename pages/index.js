import styled from 'styled-components'
import { useWeb3 } from '@3rdweb/hooks'
import Dashboard from './Dashboard'
import CoinBackpackLogo from '../assets/cb-logo.png';
import Image from 'next/image';


export default function Home() {
  const { address, connectWallet } = useWeb3()
  return (
    <Wrapper>
      {address ? (
        <Dashboard address={address} />  
      ) : (
        <div>
          <LogoContainer>
            <Logo><Image src={CoinBackpackLogo} alt='coinbase logo '></Image></Logo>
            <Headline>
              <p>Start you crypto journey with hands on experience</p>
            </Headline>
          </LogoContainer>

        <WalletConnect>
          <Button onClick={() => connectWallet('injected')}>Connect wallet</Button>
          <Details>
            You need Chrome to be
            <br /> able to use this app
          </Details>
        </WalletConnect>
        </div>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  background-color: #0a0b0c;
  color: white;
  display: grid;
  place-items: center;
`
const WalletConnect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Button = styled.button`
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.5rem;
  background-color: #F6AF48;
  color: black;

  &:hover {
    cursor: pointer;
  }
`

const Details = styled.div`
  font-size: 1.2rem;
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
  color: #282b2f;
`
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Logo = styled.div`
    width: 65%;
    object-fit: contain;
    margin-left: 1rem;
`
const Headline = styled.div`
  color: #F6AF48;
  font-size: 1.5rem;
  font-weight: 500;
`
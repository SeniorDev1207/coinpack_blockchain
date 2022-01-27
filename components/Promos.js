import React from 'react';
import styled from 'styled-components';

const Promos = () => {
  return (
    <Wrapper>
          <OfferCard>
              <Title>
                  Yield earned
              </Title>
              <Description>
                    Earn up to 10000% per year on your investments
              </Description>
              <Placeholder />
              <Additional>
                  That's about <span>a lot of crypto</span>...
              </Additional>
          </OfferCard>
          <OfferCard>
              <Title>
                  Learn and Earn
              </Title>
              <Description>
                    Learn how to trade crypto and earn up to 10000% per year!
              </Description>
              <Placeholder />
              <Additional style={{color: '#3773f5'}}>
                  Verify identity
              </Additional>
          </OfferCard>
      </Wrapper>
  )
};

export default Promos;

const Wrapper = styled.div`
    margin-top: 2rem;
    padding-right: 1rem;
`
const OfferCard = styled.div`
    width: 21rem;
    height: 12rem;
    border: 1px solid #282b2f;
    margin-bottom: 1rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
`
const Title = styled.div`
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 0.1rem;
`
const Description = styled.div`
    font-size: 1.1rem;
`
const Placeholder = styled.div`
    flex: 1;
`
const Additional = styled.div`
    font-size: 1.1rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > span {
        color: #8a919e;
        font-size: 1.1rem;
    }
` 
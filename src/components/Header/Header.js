import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <SubscribeGroup>
              <Button>
                SUBSCRIBE
              </Button>
              <SubscribeLink>
                Already a subscriber?
              </SubscribeLink>
            </SubscribeGroup>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    background: var(--color-gray-100);
    color: var(--color-gray-900);
    padding-top: 52px;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;

  @media ${QUERIES.laptopAndUp} {
    align-items: flex-start;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }

  &:nth-of-type(2n + 3) {
    display: none;
  }

  @media ${QUERIES.laptopAndUp} {
    &:first-of-type {
      padding-top: 8px;
    }
    
    &:nth-of-type(2n) {
      display: none;
    }

    &:nth-of-type(2n + 3) {
      display: flex;
    }
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    margin-top: -96px;
    margin-bottom: 82px;
  }
`;

const SubscribeGroup = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 8px 0;
`

const SubscribeLink = styled.a`
  color: var(--color-gray-900);
  font-size: ${14 / 16}rem;
  font-style: italic;
  text-decoration: underline;
`

export default Header;

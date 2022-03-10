import React, { useState } from "react";
import styled from "styled-components";
import styles from "../../styles/styles";
import { DropCircle, NewButton, ReactIcon, Typography } from "../";
import { ICategory } from "../../interfaces";
import { AddListModal, RegisterModal, LoginModal } from "../modals";
import { MdFavorite, MdSearch, MdSettings } from "react-icons/md";
import { IconButton, Button } from "../base";

interface SideNavProps {
  isLoggedIn?: boolean;
}

interface ListItemProps {
  selected?: boolean;
}

const StyledContainer = styled.div<SideNavProps>`
  background-color: ${styles.colors.white};
  width: 240px;
  z-index: 999;
  height: 100%;
  display: flex;
  flex-flow: column;
  border-right: 0.5px solid ${styles.colors.concrete};
  flex: 1 0 auto;
`;

const BottomWrapper = styled.div`
  background-color: ${styles.colors.white};
  width: 100%;
  z-index: 10;
  flex: 0 1 auto;
`;

const ProfileButton = styled.div`
  border: none;
  border-top: 0.5px solid ${styles.colors.concrete};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 48px;
  outline: none;
  background-color: ${styles.colors.white};
  color: ${styles.colors.text.secondary};
`;

const MiddleWrapper = styled.div`
  background-color: ${styles.colors.white};
  padding: ${styles.spacing[4]};
  padding-top: 0;
  position: relative;
  overflow-y: auto;
  width: 100%;
  flex: 1 1 auto;

  :after {
    position: fixed;
    top: 0;
    left: 0;
    height: 20px;
    right: 0;
    background: linear-gradient(
      to bottom,
      rgba(251, 251, 251, 1) 0%,
      rgba(251, 251, 251, 0) 100%
    );
  }
`;

const TopWrapper = styled.div`
  background-color: ${styles.colors.background};
  padding: ${styles.spacing[5]};
  padding-bottom: ${styles.spacing[8]};
  width: 100%;
  z-index: 10;
  position: relative;
  flex: 0 1 auto;
`;

const ListItem = styled.a<ListItemProps>`
  display: block;
  text-decoration: none;
  color: inherit;

  &:hover {
    color: ${styles.colors.text.accent};
  }
`;

const ButtonWrapper = styled.div`
  margin-left: -14px;
  bottom: -${styles.spacing[3]};
  position: absolute;
`;

const SettingsButton = styled(IconButton)`
  position: absolute;
  right: ${styles.spacing[3]};

  &:hover {
    cursor: pointer;
    color: ${styles.colors.text.accent};
  }
`;

const categories: ICategory[] = [
  {
    category_name: "desk setup",
    category_lists: [
      {
        list_name: "hello",
        list_items: [],
      },
      {
        list_name: "hello",
        list_items: [],
      },
      {
        list_name: "hello",
        list_items: [],
      },
    ],
  },
  {
    category_name: "christmas",
    category_lists: [
      {
        list_name: "hello",
        list_items: [],
      },
      {
        list_name: "hello",
        list_items: [],
      },
      {
        list_name: "hello",
        list_items: [],
      },
    ],
  },
  {
    category_name: "skincare",
    category_lists: [
      {
        list_name: "hello",
        list_items: [],
      },
      {
        list_name: "hello",
        list_items: [],
      },
      {
        list_name: "hello",
        list_items: [],
      },
    ],
  },
];

const SideNav = (props: SideNavProps) => {
  const [show, setShow] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <StyledContainer>
      <AddListModal show={show} setShow={setShow} />
      <RegisterModal show={showRegister} setShow={setShowRegister} />
      <LoginModal show={showLogin} setShow={setShowLogin} />
      <TopWrapper>
        <ButtonWrapper onClick={() => setShow(true)}>
          <NewButton />
        </ButtonWrapper>
      </TopWrapper>
      <MiddleWrapper>
        <DropCircle
          title="favourites"
          background={styles.colors.white}
          specialIcon={ReactIcon(MdFavorite, 18)}
          // todo: add action
          clickAction={() => {}}
          first
        />
        <DropCircle
          title="search"
          background={styles.colors.white}
          specialIcon={ReactIcon(MdSearch, 18)}
          // todo: add action
          clickAction={() => {}}
        />
        {categories.map(
          ({ category_name, category_lists }, category_i, { length }) => {
            return (
              <DropCircle
                title={category_name}
                background={styles.colors.white}
                key={category_i}
                last={length - 1 == category_i}
              >
                {category_lists
                  ? category_lists.map(({ list_name }, list_i) => {
                      return (
                        <ListItem href="" key={list_i}>
                          <Typography variant="body">{list_name}</Typography>
                        </ListItem>
                      );
                    })
                  : "nothing here yet!"}
              </DropCircle>
            );
          }
        )}
      </MiddleWrapper>
      <BottomWrapper>
        {props.isLoggedIn ? (
          <ProfileButton>
            <Typography variant="body">hello sarah</Typography>
            <SettingsButton icon={ReactIcon(MdSettings, 24)} />
          </ProfileButton>
        ) : (
          <>
            <Button
              primary
              className="w-100"
              onClick={() => setShowRegister(true)}
            >
              register
            </Button>
            <Button
              primary
              className="w-100"
              onClick={() => setShowLogin(true)}
            >
              login
            </Button>
          </>
        )}
      </BottomWrapper>
    </StyledContainer>
  );
};

export default SideNav;

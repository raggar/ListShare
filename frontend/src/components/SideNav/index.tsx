import React, { useState } from "react";
import Button from "../base/Button";
import styled from "styled-components";
import styles from "../../styles/styles";
import { Circle, DropCircle, NewButton, ReactIcon, Typography } from "../";
import { ICategory } from "../../interfaces";
import { AddListModal, RegisterModal } from "../modals";
import { Stack } from "react-bootstrap";
import { MdFavorite, MdSettings } from "react-icons/md";
import { IconButton, Spacer } from "../base";

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

  return (
    <StyledContainer>
      <AddListModal show={show} setShow={setShow} />
      <RegisterModal show={showRegister} setShow={setShowRegister} />
      <TopWrapper>
        {/* <NavTopItem name="home" icon={MdHomeFilled} link="/" />
        <Spacer height={24} />
        <NavTopItem name="search" icon={MdSearch} link="/search" />
        <Spacer height={24} />
        <NavTopItem name="your lists" icon={MdBookmark} link="/lists" /> */}
        <ButtonWrapper onClick={() => setShow(true)}>
          <NewButton />
        </ButtonWrapper>
      </TopWrapper>
      <MiddleWrapper>
        <Stack direction="horizontal">
          <Circle
            icon={ReactIcon(MdFavorite, 22)}
            background={styles.colors.white}
          />
          <Spacer width={styles.spacing[1]} />
          <Typography variant="body">favourites</Typography>
        </Stack>
        {categories.map(
          ({ category_name, category_lists }, category_i, { length }) => {
            return (
              <DropCircle
                title={category_name}
                background={styles.colors.white}
                key={category_i}
                last={length - 1 == category_i}
                first={category_i == 0}
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
          <Button
            primary
            className="w-100"
            onClick={() => setShowRegister(true)}
          >
            login or register
          </Button>
        )}
      </BottomWrapper>
    </StyledContainer>
  );
};

export default SideNav;

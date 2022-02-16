import React from "react";
import Button from "../base/Button";
import styled from "styled-components";
import styles from "../../styles/styles";
import DropCircle from "../base/DropCircle";
import { MdBookmark, MdHomeFilled, MdSearch } from "react-icons/md";
import NavTopItem from "./NavTopItem";
import Spacer from "../base/Spacer";
import { ICategory } from "../../data/ICategory";
import NewButton from "../base/Button/NewButton";

interface SideNavProps {
  isLoggedIn?: boolean;
}

interface ListItemProps {
  selected?: boolean;
}

const StyledContainer = styled.div<SideNavProps>`
  background-color: ${styles.colors.white};
  width: 300px;
  z-index: 999;
  height: 100%;
  display: flex;
  flex-flow: column;

  flex: 1 0 auto;
`;

const BottomWrapper = styled.div`
  background-color: ${styles.colors.white};
  padding: ${styles.spacing[5]};
  width: 100%;
  z-index: 10;
  flex: 0 1 auto;
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

  :hover {
    color: ${styles.colors.text.dark};
  }
`;

const ButtonWrapper = styled.div`
  margin-left: -14px;
  bottom: -${styles.spacing[3]};
  position: absolute;
`;

const SideNav = (props: SideNavProps) => {
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

  return (
    <StyledContainer>
      <TopWrapper>
        <NavTopItem name="home" icon={MdHomeFilled} link="/" />
        <Spacer height={24} />
        <NavTopItem name="search" icon={MdSearch} link="/search" />
        <Spacer height={24} />
        <NavTopItem name="your lists" icon={MdBookmark} link="/lists" />
        <ButtonWrapper>
          <NewButton />
        </ButtonWrapper>
      </TopWrapper>
      <MiddleWrapper>
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
                          {list_name}
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
          <Button primary className="w-100">
            your profile
          </Button>
        ) : (
          <Button primary className="w-100">
            login
          </Button>
        )}
      </BottomWrapper>
    </StyledContainer>
  );
};

export default SideNav;

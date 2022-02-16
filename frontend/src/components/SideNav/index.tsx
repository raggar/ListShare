import React from "react";
import Button from "../base/Button";
import styled from "styled-components";
import styles from "../../styles/styles";
import DropCircle from "../base/DropCircle";
import { MdBookmark, MdHomeFilled, MdSearch } from "react-icons/md";
import NavTopItem from "./NavTopItem";
import Spacer from "../base/Spacer";
import { ICategory } from "../../data/ICategory";
import NewListButton from "./NewListButton";

interface SideNavProps {
  isLoggedIn?: boolean;
}

interface ListItemProps {
  selected?: boolean;
}

const StyledContainer = styled.div<SideNavProps>`
  background-color: ${styles.colors.white};
  width: 300px;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  height: 100%;
`;

const BottomWrapper = styled.div`
  background-color: ${styles.colors.white};
  padding: ${styles.spacing[5]};
  width: 100%;
  position: absolute;
  flex-grow: 0;
  z-index: 10;
  left: 0;
  bottom: 0;
`;

const MiddleWrapper = styled.div`
  background-color: ${styles.colors.white};
  padding: ${styles.spacing[4]};
  padding-top: 0;
  position: relative;
  overflow-y: auto;
  flex-grow: 1;
  width: 100%;
  left: 0;
  top: -${styles.spacing[3]};

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
  position: sticky;
  z-index: 10;
  left: 0;
  top: 0;
`;

const ListItem = styled.a<ListItemProps>`
  display: block;
  text-decoration: none;
  color: inherit;

  :hover {
    color: ${styles.colors.text.dark};
  }
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
      </TopWrapper>
      <MiddleWrapper>
        <NewListButton />
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
            profile
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

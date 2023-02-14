"use client";
import { Drawer, Box, List, ListItemText, Divider } from "@mui/material";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Styles from "../styles/drawerMobile.module.scss";

export const MuiDrawer = ({}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const humberger = useRef<HTMLDivElement>(null!);

  let handleMenuClick = (linkValue: string) => {
    humberger.current.classList.toggle(Styles.isActive);

    setIsDrawerOpen(!isDrawerOpen);
  };

  let handleClose = () => {
    setIsDrawerOpen(!isDrawerOpen);
    humberger.current.classList.toggle(Styles.isActive);
  };

  return (
    <>
      <div
        ref={humberger}
        onClick={() => {
          handleMenuClick("");
        }}
        className={`${Styles.buttonsNav}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={handleClose}
        className={Styles.drawer}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <div className={Styles.header}>{`DataSoft Tanzania`}</div>
          <List>
            <Divider />
            <a
              href={"#top"}
              className={"Notes" == "Notes" ? Styles.active : Styles.setCenter}
              onClick={() => {
                handleMenuClick("");
              }}
            >
              Home
            </a>
            <Divider />
            <Link
              href={"#"}
              className={false ? Styles.active : Styles.setCenter}
              onClick={() => {
                handleMenuClick("");
              }}
            >
              About
            </Link>
            <Divider />
            <a
              href={"#projects"}
              className={false ? Styles.active : Styles.setCenter}
              onClick={() => {
                handleMenuClick("");
              }}
            >
              Projects
            </a>
            <Divider />
            <a
              href="#idea"
              className={false ? Styles.active : Styles.setCenter}
              onClick={() => {
                handleMenuClick("");
              }}
            >
              Contact Us
            </a>
            <Divider />
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;

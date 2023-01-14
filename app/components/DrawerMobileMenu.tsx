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

  const notes = useRef<HTMLDivElement>(null!);
  const review = useRef<HTMLDivElement>(null!);
  const exam = useRef<HTMLDivElement>(null!);
  const reference = useRef<HTMLDivElement>(null!);
  const admin = useRef<HTMLDivElement>(null!);

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
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleClose}>
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <ListItemText primary={`DataSoft Technologies`} />

          <List>
            <Divider />
            <Link
              href={"/"}
              className={"Notes" == "Notes" ? Styles.active : Styles.setCenter}
            >
              Home
            </Link>
            <Divider />
            <Link
              href={"/Review"}
              className={false ? Styles.active : Styles.setCenter}
            >
              About
            </Link>
            <Divider />
            <Link
              href={"/Exams"}
              className={false ? Styles.active : Styles.setCenter}
            >
              Projects
            </Link>
            <Divider />
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;

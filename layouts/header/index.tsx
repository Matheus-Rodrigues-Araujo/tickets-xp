"use client";
import {
  AppBar,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { StyledAppBar, StyledBrandLink, StyledList } from "./styles";
import { Sidebar } from "../sidebar";

import { navigationLinks } from "@/constants";

import Link from "next/link";
import { useState, useRef } from "react";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const containerRef = useRef(null)

  const handleSidebar = () => setSidebarOpen(!sidebarOpen)

  const handleClickOutside = (e: MouseEvent) => {
    if (!(e.target instanceof Element)) return;
    if (!e.target.closest("sidebar") && !e.target.closest(".content")) {
      setSidebarOpen(false);
    }
  };


  return (
    <StyledAppBar ref={containerRef}>
      <Toolbar>
        <StyledBrandLink href="/" passHref>
          TicketsXP
        </StyledBrandLink>
        <IconButton onClick={handleSidebar}  sx={{ display: { md: "none" } }}>
          <Menu sx={{ color: "white" }} />
        </IconButton>
        <StyledList>
          {navigationLinks.map((link) => (
            <ListItem key={link.label}>
              <Link href={link.path} passHref>
                {link.label}
              </Link>
            </ListItem>
          ))}
        </StyledList>
        <Sidebar isSidebarOpen={sidebarOpen} />
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import { Sidebar } from "../sidebar";

import { navigationLinks } from "@/constants";

import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";

import { StyledAppBar, StyledList } from "./styles";
import Menu from "@mui/icons-material/Menu";
import { Brand } from "@/components/brand";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const handleClickOutside = (e: MouseEvent) => {
    if (!(e.target instanceof Element)) return;
    if (e.target.closest(".overlay")) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.addEventListener("click", handleClickOutside);
  });

  return (
    <StyledAppBar>
      <Toolbar>
        <Brand/>
        <IconButton onClick={handleSidebar} sx={{ display: { md: "none" } }}>
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
      </Toolbar>
      <Sidebar isSidebarOpen={isSidebarOpen} />
    </StyledAppBar>
  );
};

export default Header;

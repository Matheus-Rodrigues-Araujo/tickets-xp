import { Box, ListItem } from "@mui/material";
import { StyledSidebar, StyledBrandLink, StyledList } from "./styles";

import Link from "next/link";

import { navigationLinks } from "@/constants";

export const Sidebar = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  return (
    <StyledSidebar
      className={`sidebar ${!isSidebarOpen ? "hidden" : ""}`}
      sx={{ display: isSidebarOpen ? "flex" : "none" }}
    >
      <StyledList>
        <StyledBrandLink sx={{ textAlign: "center" }} href="/" passHref>
          TicketsXP
        </StyledBrandLink>
        {navigationLinks.map((link) => (
          <ListItem key={link.label}>
            <Link href={link.path} passHref>
              {link.label}
            </Link>
          </ListItem>
        ))}
      </StyledList>
    </StyledSidebar>
  );
};

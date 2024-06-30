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

import { navigationLinks } from "@/constants";

import Link from "next/link";

const Header = () => {
  return (
    <StyledAppBar>
      <Toolbar>
        <StyledBrandLink href="/" passHref>TicketsXP</StyledBrandLink>
        <IconButton sx={{ display: { md: "none" } }}>
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
    </StyledAppBar>
  );
};

export default Header;

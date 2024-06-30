import { Typography, Container, Box, Stack, Grid } from "@mui/material";
import { StyledFooter, StyledFooterLinks } from "./styles";
import { footerContactLinks, footerLinks } from "@/constants";
import Link from "next/link";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Stack>
          <Stack
            direction="row"
            justifyContent="center"
            flexWrap="wrap"
            spacing={2}
          >
            {footerContactLinks.map((link) => (
              <Link href={link.path} key={link.label} passHref>
                {link.label}
              </Link>
            ))}
          </Stack>
          <Box>
            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <StyledFooterLinks>
                <Typography variant="body2" sx={{ fontSize: "14px" }}>
                  © TicketsXP 2024
                </Typography>

                {footerLinks.map((link) => (
                  <Link href={link.path} key={link.label} passHref>
                    {link.label}
                  </Link>
                ))}
              </StyledFooterLinks>
            </Container>
          </Box>
        </Stack>
      </Container>
    </StyledFooter>
  );
};

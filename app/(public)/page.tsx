"use server";
import { PageTitle } from "@/components/page-title/page-title";
import { StyledContent, StyledImageContainer } from "./styles";

import Image from "next/image";
import { Box } from "@mui/material";

const Page = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <StyledContent className="content">
        <PageTitle variant="h1">
          Desenvolvido para quem vai viver com emoção!
        </PageTitle>
        <StyledImageContainer>
          <Image
            src="/show.png"
            quality={80}
            width={3248}
            height={1429}
            priority
            alt="Festival in somewhere in the world"
          />
        </StyledImageContainer>
      </StyledContent>
    </Box>
  );
};

export default Page;

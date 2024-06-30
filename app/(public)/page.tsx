import { PageTitle } from "@/components/page-title/page-title";
import { StyledContent } from "./styles";

import Image from "next/image";
import { Box } from "@mui/material";

const Page = () => {
  return (
    <Box sx={{minHeight: '100vh'}} >
      <StyledContent className="content">
        <PageTitle variant="h1">
          Desenvolvido para quem realmente vai viver a vida com emoção!
        </PageTitle>
        <Image
          src="/show.png"
          height={550}
          width={700}
          style={{ width: '100%', maxWidth: "1370px", objectFit: "cover", backgroundPosition: 'center center' }}
          alt="Festival in somewhere in the world"
        />
      </StyledContent>

    </Box>
  );
};

export default Page;

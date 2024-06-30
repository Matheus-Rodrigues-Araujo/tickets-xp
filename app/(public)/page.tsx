import { ReactNode } from "react";
import { Box } from "@mui/material";

const Page = ({ children }: { children: ReactNode }) => {
  return <Box className="content"> {children}</Box>;
};

export default Page;

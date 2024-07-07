import { ReactNode } from "react";
import Button from "@mui/material/Button";
import { StyledLoading } from "./styles";

export const ButtonSubmit = ({
  isPending,
  loading,
  children,
}: {
  isPending: boolean;
  loading: boolean;
  children: ReactNode;
}) => {
  return (
    <Button variant="submit" disabled={loading}>
      {isPending && <StyledLoading />}
      {!isPending && children}
    </Button>
  );
};

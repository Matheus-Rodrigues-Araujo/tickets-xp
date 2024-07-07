"use client";

import { useState } from "react";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userDataSchema } from "@/models/schemas/user";

import { Brand } from "../../components/brand";

import {
  Box,
  Button,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

import { StyledAppBar, StyledStack, StyledForm, StyledFooter } from "./styles";
import { ButtonSubmit } from "@/components/button-submit";

const AuthForm = ({ type }: { type: string }) => {
  const formSchema = userDataSchema(type);
  // @ts-ignore
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh", color: "white" }}
    >
      <StyledStack direction="column" spacing={2}>
        <StyledAppBar>
          <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
            <Brand />
          </Toolbar>
        </StyledAppBar>
        <StyledForm onSubmit={onSubmit}>
          {type === "register" && (
            <>
              <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
                <Stack>
                  <TextField
                    variant="outlined"
                    type="text"
                    {...register("firstName")}
                    placeholder="ex: John"
                  />
                  <Typography sx={{ color: "red" }}>
                    {(errors.firstName?.message as string) || ""}
                  </Typography>
                </Stack>

                <Stack className="flex justify-between flex-col">
                  <TextField
                    variant="outlined"
                    type="text"
                    {...register("lastName")}
                    placeholder="ex: Doe"
                  />
                  <Typography sx={{ color: "red" }}>
                    {(errors.lastName?.message as string) || ""}
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction="column">
                <TextField
                  variant="outlined"
                  {...register("address")}
                  placeholder="Enter your address"
                />
                <Typography sx={{ color: "red" }}>
                  {(errors.address?.message as string) || ""}
                </Typography>
              </Stack>
              <Stack direction="column">
                <TextField
                  variant="outlined"
                  type="text"
                  {...register("city")}
                  placeholder="ex: São Paulo"
                />
                <Typography sx={{ color: "red" }}>
                  {(errors.city?.message as string) || ""}
                </Typography>
              </Stack>
              <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
                <Stack direction="column">
                  <TextField
                    variant="outlined"
                    type="text"
                    {...register("state")}
                    placeholder="ex: SP"
                  />
                  <Typography sx={{ color: "red" }}>
                    {(errors.state?.message as string) || ""}
                  </Typography>
                </Stack>

                <Stack direction="column">
                  <TextField
                    variant="outlined"
                    type="text"
                    {...register("postalCode")}
                    placeholder="ex: 1234"
                  />
                  <Typography sx={{ color: "red" }}>
                    {(errors.postalCode?.message as string) || ""}
                  </Typography>
                </Stack>
              </Stack>
            </>
          )}
          <Stack direction="column">
            <TextField
              variant="outlined"
              type="email"
              {...register("email")}
              placeholder="ex: johndoe@email.com"
            />
            <Typography sx={{ color: "red" }}>
              {(errors.email?.message as string) || ""}
            </Typography>
          </Stack>
          <Stack direction="column">
            <TextField
              variant="outlined"
              type="password"
              {...register("password")}
              placeholder="Enter your password"
            />
            <Typography sx={{ color: "red" }}>
              {(errors.password?.message as string) || ""}
            </Typography>
          </Stack>
          <ButtonSubmit isPending={false} loading={isLoading}>
            {isLoading
              ? "Loading..."
              : type === "login"
              ? "Sign In"
              : "Sign Up"}
          </ButtonSubmit>
        </StyledForm>
        <Stack direction="row" spacing={1} alignItems="center">
          <Box
            sx={{ height: "0.5px", width: "100%", backgroundColor: "white" }}
          ></Box>
          <Typography variant="body1" >or</Typography>
          <Box
            sx={{ height: "0.5px", width: "100%", backgroundColor: "white" }}
          ></Box>
        </Stack>
        <StyledFooter>
          <Typography className="text-md">
            {type === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
            <Link href={type === "login" ? "register" : "login"} passHref>
              {" "}
              {type === "login" ? "Register" : "Login"}
            </Link>
          </Typography>
        </StyledFooter>
      </StyledStack>
    </Stack>
  );
};

export default AuthForm;

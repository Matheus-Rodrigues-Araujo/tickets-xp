"use client";

import { useState } from "react";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userDataSchema } from "@/models/schemas/user";

import { Brand } from "../../components/brand";

import { Box, Button, Stack, TextField, Toolbar, Typography } from "@mui/material";
import { StyledAppBar, StyledForm, StyledFooter } from "./styles";

const AuthForm = ({ type }: { type: string }) => {
  const formSchema = userDataSchema(type);
  //@ts-ignore
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
      <Stack direction="column" spacing={2} className="p-5 md:p-2">
        <StyledAppBar>
          <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
            <Brand />
          </Toolbar>
        </StyledAppBar>
        <StyledForm onSubmit={onSubmit}>
          {type === "register" && (
            <>
              <Stack
                spacing={2}
                direction={{ xm: "column", md: "row" }}
                justifyContent="space-between"
              >
                <Stack>
                  <TextField
                    type="text"
                    {...register("firstName")}
                    placeholder="ex: John"
                  />
                  <Typography className="text-md text-red-500">
                    {(errors.firstName?.message as string) || ""}
                  </Typography>
                </Stack>

                <Stack className="flex justify-between flex-col">
                  <TextField
                    type="text"
                    {...register("lastName")}
                    placeholder="ex: Doe"
                  />
                  <Typography className="text-md text-red-500">
                    {(errors.lastName?.message as string) || ""}
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction="column">
                <TextField
                  {...register("address")}
                  placeholder="Enter your address"
                  
                />
                <Typography className="text-md text-red-500">
                  {(errors.address?.message as string) || ""}
                </Typography>
              </Stack>
              <Stack direction="column">
                <TextField
                  type="text"
                  {...register("city")}
                  placeholder="ex: São Paulo"
                />
                <Typography className="text-md text-red-500">
                  {(errors.city?.message as string) || ""}
                </Typography>
              </Stack>
              <Stack
                justifyContent="space-between"
                direction={{ xs: "column", md: "row" }}
                spacing={2}
              >
                <Stack direction="column">
                  <TextField
                    type="text"
                    {...register("state")}
                    placeholder="ex: SP"
                  />
                  <Typography className="text-md text-red-500">
                    {(errors.state?.message as string) || ""}
                  </Typography>
                </Stack>

                <Stack direction="column">
                  <TextField
                    type="text"
                    {...register("postalCode")}
                    placeholder="ex: 1234"
                  />
                  <Typography className="text-md text-red-500">
                    {(errors.postalCode?.message as string) || ""}
                  </Typography>
                </Stack>
              </Stack>
            </>
          )}
          <Stack direction="column">
            <TextField
              type="email"
              {...register("email")}
              placeholder="ex: johndoe@email.com"
            />
            <Typography className="text-md text-red-500">
              {(errors.email?.message as string) || ""}
            </Typography>
          </Stack>
          <Stack direction="column">
            <TextField
              type="password"
              {...register("password")}
              placeholder="Enter your password"
            />
            <Typography className="text-md text-red-500">
              {(errors.password?.message as string) || ""}
            </Typography>
          </Stack>
          <Button
            type="submit"
            disabled={isLoading}
            className="rounded-md font-bold p-2 bg-blue-600 hover:bg-blue-500"
          >
            {isLoading
              ? "Loading..."
              : type === "login"
              ? "Sign In"
              : "Sign Up"}
          </Button>
        </StyledForm>
        <Stack direction="row" spacing={1} alignItems="center">
          <Box sx={{height: "0.5px", width: '100%', backgroundColor: 'white'}} ></Box>
          <span>or</span>
          <Box sx={{height: "0.5px", width: '100%', backgroundColor: 'white'}}></Box>
        </Stack>
        <StyledFooter>
          {type === "login" ? (
            <Typography className="text-md">
              Don't have an account?
              <Link href="register" className="text-blue-400" passHref>
                {" "}
                Register
              </Link>
            </Typography>
          ) : (
            <Typography className="text-md">
              Already have an account?
              <Link href="login" className="text-blue-400" passHref>
                {" "}
                Login
              </Link>
            </Typography>
          )}
        </StyledFooter>
      </Stack>
    </Stack>
  );
};

export default AuthForm;

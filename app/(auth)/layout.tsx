import { ReactNode } from "react"
import { Container } from "@mui/material"

const AuthLayout = ({children}: {children: ReactNode}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default AuthLayout
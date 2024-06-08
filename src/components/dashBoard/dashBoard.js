import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import { Container } from "@mui/material";

const DashBoard = () => {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100vh",
        maxWidth: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#aedbed",
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ "& > :not(style)": { m: 1 } }}
      >
        <Fab
          onClick={() => navigate("/users")}
          variant="extended"
          color="primary"
        >
          <NavigationIcon sx={{ mr: 1 }} />
          Get User Details
        </Fab>
      </Box>
    </Container>
  );
};

export default DashBoard;

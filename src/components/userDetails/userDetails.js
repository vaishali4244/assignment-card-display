import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "../userCard/userCard";
import { RevolvingDot } from "react-loader-spinner";
import { Container, Box, Typography, TextField } from "@mui/material";

const UserDetails = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        const filteredData = res?.data?.filter((item) => {
          if (search === null) {
            return item;
          } else {
            return item?.name?.toLowerCase()?.includes(search?.toLowerCase());
          }
        });

        setData(filteredData?.sort((a, b) => a.name.localeCompare(b.name)));
        setLoading(false);
      })
      .catch((err) => {
        console.log("error", err);
        setLoading(false);
      });
  }, [search]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <RevolvingDot color="#00BFFF" height={80} width={80} />
      </Box>
    );
  }

  return (
    <Container
      maxWidth={false}
      sx={{
        width: "98.7vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#aedbed",
        padding: 0,
        margin: 0,
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: "rgb(98, 177, 208)",
          padding: "1vh 1.8vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: 1,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            width: "100%",
            margin: 0,
            padding: "1vh 1vw",
            textAlign: "center",
            fontSize: "2rem",
            color: "#fff",
          }}
        >
          User Information
        </Typography>
        <TextField
          id="filled-search"
          label="Search by Name"
          type="search"
          variant="filled"
          sx={{
            width: "50%",
            margin: "2vh 0",
            backgroundColor: "#fff",
            borderRadius: "5px",
          }}
          onChange={(e) => setSearch(e.target.value)}
          value={search !== null ? search : ""}
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "2vh",
        }}
      >
        {data?.map((item, index) => (
          <UserCard
            key={item?.id}
            name={item?.name}
            email={item?.email}
            phone={item?.phone}
            city={item?.address?.city}
            street={item?.address?.street}
            suite={item?.address?.suite}
            company={item?.company?.name}
          />
        ))}
      </Box>
    </Container>
  );
};

export default UserDetails;

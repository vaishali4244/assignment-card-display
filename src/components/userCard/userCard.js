import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const UserCard = ({ name, email, phone, city, street, suite, company }) => {
  return (
    <Card sx={{ minWidth: 275 , margin:'18px 2px',backgroundColor:'#daf1fa'}}>
      <CardContent sx={{ width: "80vw" ,}}>
        <Typography variant="h5" component="div">
          Name : {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <span>Company : </span>
          {company}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <span>Email : </span>
          {email}
        </Typography>
        <Typography variant="body2">
          <span>Location : </span>
          {street}, {suite}, {city}
        </Typography>
        <Typography variant="body2">
          <span>Phone : </span>
          {phone}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;

import { Avatar, Paper, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../App";
import { User as UserModel } from "../models/User";

export const User = () => {
  const { id } = useParams();
  const users = useContext(UserContext);

  const [user, setUser] = useState<UserModel | null>(null);

  useEffect(() => {
    const u = users.find((u) => u.id === id);
    u && setUser(u);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {user ? (
        <>
          <Avatar
            style={{
              width: 100,
              height: 100,
              marginBottom: 20,
              backgroundColor: "gray",
            }}
          >
            <Typography variant="h3">AG</Typography>
          </Avatar>
          <Typography
            variant="h4"
            gutterBottom
            style={{ color: "black", fontWeight: "bold" }}
          >
            {user.name}
          </Typography>

          <Paper style={{ padding: "20px" }}>
            <Typography variant="h6" gutterBottom>
              Information
            </Typography>
            <Typography>Email: {user.email}</Typography>
            <Typography>Phone: {user.phone}</Typography>
            <Typography>Address: {user.address}</Typography>
          </Paper>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

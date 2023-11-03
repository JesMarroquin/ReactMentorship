import { Avatar, Paper, Typography } from "@mui/material";

interface UserProps {
  name: string;
  email: string;
  phone: number;
  address: string;
}

export const User = () => {
  const userProfile: UserProps = {
    name: "Anaí Gonzalez",
    email: "anai@example.com",
    phone: 81123456789,
    address: "21 Main Street, Monterrey Nuevo Leon, CP65343",
  };

  // Get the initials
  const getInitials = (name: string) => {
    const words = name.split(" ");
    const initials = words.map((word) => word[0].toUpperCase());
    return initials.join("");
  };

  const initials = getInitials(userProfile.name);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar
        style={{
          width: 100,
          height: 100,
          marginBottom: 20,
          backgroundColor: "gray",
        }}
      >
        <Typography variant="h3">{initials}</Typography>
      </Avatar>
      <Typography
        variant="h4"
        gutterBottom
        style={{ color: "black", fontWeight: "bold" }}
      >
        {userProfile.name}
      </Typography>
      <Paper style={{ padding: "20px" }}>
        <Typography variant="h6" gutterBottom>
          Information
        </Typography>
        <Typography>Email: {userProfile.email}</Typography>
        <Typography>Phone: {userProfile.phone}</Typography>
        <Typography>Address: {userProfile.address}</Typography>
      </Paper>
    </div>
  );
};

import React from "react";
import Layout from "../Components/Layout/Layout";
import {
  Box,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  TableBody,
  Paper,
  Table,
  TextField,
  Link,
  Button

} from "@mui/material";
import { EditSharp, SupportAgent } from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";

function Contact() {

  
  return (

    <Layout>
      <Box
        sx={{
          my: 10,
          ml: 10,
          justifyContent: "center",
          "& h4": { fontWeight: "bold", mb: 2 },
          "@media (max-width:600px)": { m: "auto", my: 4, mx: 3 },
        }}
      >
        <Typography variant="h4">Contact My Hotel </Typography>
        <Typography>
          Lorem ipsum dolor Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Nobis laborum veritatis fugit illum aperiam atque
          delectus odit quos omnis sunt blanditiis sed expedita perferendis
          nihil voluptate, reiciendis sint voluptatum tempora? sit amet,
          consectetur adipisicing elit. Odit blanditiis delectus odio quidem
          ut, maxime culpa, fugit nostrum voluptatum, sint magni unde
          quibusdam atque? Maiores praesentium cum iste temporibus aliquid!
        </Typography>
      </Box>



      <Box sx={{ m: 3 }}>
        <Typography sx={{ fontSize: "30px", textAlign: "center", m: 2 }}>
          Loction Map
        </Typography>
        <Typography sx={{ display: "flex", justifyContent: "center", alignItems: "center",mb:5}}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.29980697882!2d72.4145873804201!3d23.02015772932385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1723148219762!5m2!1sen!2sin"
            title="Example iframe"
            width={"900px"}
            height={"400px"}
          />
        </Typography>
      </Box>


      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          width: '100%',
          maxWidth: '500px',
          mx: 'auto',
          border: "1px solid black",
          p: 5,
          borderRadius: "10px",
          background: "#1c1b1bf0",
          mb: 5
        }}
      >
        <Box>
          <Typography color={"white"} sx={{ fontWeight: "bold", fontSize: "30px", }}>
            Login
          </Typography>
        </Box>
        <TextField
          label="Email"
          type="email"
          name="email"
          fullWidth
          variant="outlined"
          sx={{
            bgcolor: 'rgba(156, 156, 156, 0.38)',
            borderRadius: '0.5rem',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#707070',
              },
              '&:hover fieldset': {
              borderColor: '#58bc82',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#58bc82',
              },
            },
          }}
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          fullWidth
          variant="outlined"
          sx={{
            bgcolor: 'rgba(156, 156, 156, 0.38)',
            borderRadius: '0.5rem',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#707070',
              },
              '&:hover fieldset': {
                borderColor: '#58bc82',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#58bc82',
              },
            },
          }}
        />
        <Link href="#" sx={{ alignSelf: 'flex-end', color: '#58bc82', textDecoration: 'none' }}>
          Forgot password?
        </Link>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            bgcolor: '#707070',
            color: '#efefef',
            borderRadius: '3rem',
            padding: '1rem 0.75rem',
            fontWeight: '600',
            fontSize: '0.9rem',
            '&:hover': {
              bgcolor: '#58bc82',
              color: '#707070',
            },
          }}
        >
          Log in
        </Button>
        <Typography variant="body2" sx={{ color: '#707070' }}>
          Don’t have an account?{' '}
          <Link href="#" sx={{ color: '#58bc82' }}>
            Sign up
          </Link>
        </Typography>
      </Box>

      <Box
        sx={{
          m: 3,
          width: "600px",
          mx: "auto",
          "@media (max-width:600px)": { width: "280px", m: "auto" },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ display: "flex", alignItems: "center", gap: 2 }}
                >
                  <SupportAgent sx={{ color: "red", fontSize: "40px" }} />
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "1rem", fontWeight: "bold" }}
                  >
                    1800-200-2309 (Toll-Free)
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ display: "flex", alignItems: "center", gap: 2 }}
                >
                  <MailIcon sx={{ color: "yellow", fontSize: "40px" }} />
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "1rem", fontWeight: "bold" }}
                  >
                    rkhotel@gmail.com
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ display: "flex", alignItems: "center", gap: 2 }}
                >
                  <CallIcon sx={{ color: "green", fontSize: "40px" }} />
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "1rem", fontWeight: "bold" }}
                  >
                    +91 70961 99132
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
}

export default Contact;

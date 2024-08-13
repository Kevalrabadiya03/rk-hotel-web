import React from "react";
import Layout from "../Components/Layout/Layout";
import { Link } from "react-router-dom";
import home from "../Components/Data/Image/homepage.jpg";
import "../Style/homestyle.css";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Divider,
  Grid,
  Container,
} from "@mui/material";
import { MenuList } from "../Components/Data/Datajson";
import hotelimg from "../Components/Data/Image/about.avif";
import hotelimg2 from "../Components/Data/Image/about2.avif";

function Home() {
  return (
    <>
      <Layout>
        <Box className="home" style={{ background: `url(${home})` }}>
          <Typography className="headercontainer" sx={{ m: 6 }}>
            <Typography className="h1">
              <span>H</span>otel <br></br> Room
            </Typography>
            <Typography className="p">Best Room In India</Typography>
            <Link to="/menu">
              <button>BOOK NOW</button>
            </Link>
          </Typography>
        </Box>

        <Box sx={{ m: 4 }}>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Typography sx={{ m: 2 }}>
                <Container sx={{ fontSize: "2rem", fontWeight: "bold" }}>
                  We are RK Hotel Group
                </Container>
                <Typography sx={{ m: 3, textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore eius assumenda nemo nihil voluptatum accusamus id iusto
                  quia molestiae unde explicabo quibusdam, qui necessitatibus
                  maxime consequuntur, mollitia temporibus, aperiam laudantium
                  impedit rem totam reiciendis. In odit quam doloremque rem
                  laborum. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Dignissimos pariatur quia facilis debitis quam vitae
                  quas amet ducimus sint. Accusamus!
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{ p: 2, textAlign: { xs: "center", md: "left" } }}
              >
                <img
                  src={hotelimg}
                  alt="Hotel"
                  style={{ width: "100%", maxWidth: "600px", height: "auto" }}
                />
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{ color: "Black", fontSize: "30px", my: 2, fontWeight: "bold" }}
          >
            My Hotels
            <Divider
              sx={{
                borderBottomWidth: 3,
                borderColor: "black",
                mb: 2,
                width: "170px",
                mx: "auto",
              }}
            />
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {MenuList.map((item) => (
            <Card key={item.id} sx={{ maxWidth: 390, display: "flex", m: 2 }}>
              <CardActionArea>
                <CardMedia
                  component="img" // Ensure this is specified to render an image
                  sx={{ minHeight: "400px" }} // Optional: Adjust as needed
                  image={item.image} // Use 'image' prop for the image source
                  alt={item.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2">{item.Description}</Typography>
                  <Typography>${item.price}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>

        <Box>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Typography
                sx={{ p: 2, textAlign: { xs: "center", md: "left" } }}
              >
                <img
                  src={hotelimg2}
                  alt="Hotel"
                  style={{ width: "100%", maxWidth: "600px", height: "auto" }}
                />
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={{ m: { xs: 3, md: 8 }, p: 2 }}>
                <Container
                  sx={{
                    fontSize: { xs: "1.5rem", md: "2rem" },
                    fontWeight: "bold",
                  }}
                >
                  Our way of being
                </Container>
                <Typography sx={{ m: 3, textAlign: "justify" }}>
                  At Radisson Hotel Group, we strive to be the first choice in
                  the minds of guests, owners, and talent. In our journey to
                  achieve this, we practice strong beliefs and actions that
                  respect the diversity of people, the community, ethics, and
                  the planet.
                </Typography>
                <Typography sx={{ m: 3 }}>
                  <Button variant="outlined" color="success">
                    Find Out More
                  </Button>
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Box>
        

        <br></br>
      </Layout>
    </>
  );
}

export default Home;

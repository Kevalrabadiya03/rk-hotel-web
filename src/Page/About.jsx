import React from "react";
import Layout from "../Components/Layout/Layout";
import { Box, Typography, Grid, Container, Button } from "@mui/material";
import hotelimg from "../Components/Data/Image/about.avif";
import hotelimg2 from "../Components/Data/Image/about2.avif"

function About() {
  return (
    <>
      <Layout>
        <Box>
          <Typography sx={{ textAlign: "center", fontSize: "35px", fontWeight: "bold",mt:5 }}>
            About us
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eius
                  assumenda nemo nihil voluptatum accusamus id iusto quia molestiae unde
                  explicabo quibusdam, qui necessitatibus maxime consequuntur, mollitia
                  temporibus, aperiam laudantium impedit rem totam reiciendis. In odit
                  quam doloremque rem laborum. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Dignissimos pariatur quia facilis debitis quam
                  vitae quas amet ducimus sint. Accusamus!
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={{ p: 2, textAlign: { xs: "center", md: "left" } }}>
                <img
                  src={hotelimg}
                  alt="Hotel"
                  style={{ width: "100%", maxWidth: "600px", height: "auto" }}
                />
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography sx={{ p: 2, textAlign: { xs: "center", md: "left" } }}>
                <img
                  src={hotelimg2}
                  alt="Hotel"
                  style={{ width: "85%", maxWidth: "600px", height: "auto" }}
                />
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={{ m: { xs: 3, md: 8 }, p: 2 }}>
                <Container sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, fontWeight: "bold" }}>
                  Our way of being
                </Container>
                <Typography sx={{ m: 3, textAlign: "justify" }}>
                  At Radisson Hotel Group, we strive to be the first choice in the minds of guests, owners, and talent. In our journey to achieve this, we practice strong beliefs and actions that respect the diversity of people, the community, ethics, and the planet.
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

      </Layout>
    </>
  );
}

export default About;

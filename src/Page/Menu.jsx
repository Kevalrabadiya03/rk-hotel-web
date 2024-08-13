import React from 'react';
import { MenuList } from '../Components/Data/Datajson';
import Layout from '../Components/Layout/Layout';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

function Menu() {
  return (
    
      <Layout>
        <Box sx={{fontSize:"35px", textAlign:"center", mt:2}}>
          Rooms
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {MenuList.map((item) => (
            <Card key={item.id} sx={{ maxWidth: 390, display: "flex", m: 2 }}>
              <CardActionArea>
                <CardMedia
                  component="img" 
                  sx={{ minHeight: "400px" }} 
                  image={item.image}
                  alt={item.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2">
                    {item.Description}
                  </Typography>
                  <Typography>
                    ${item.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Layout>
  );
}

export default Menu;

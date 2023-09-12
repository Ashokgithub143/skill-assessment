import * as React from "react";
import { Card, CardMedia, Stack } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import img2 from "../../../assets/img/arrowbtn.png";
import {StyledImage, StyledBadge} from './StyledElementsMui';
import styles from './Card.module.css';

import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';

export default function Cardcomponent(props) {

  return (
    <div>
      <Grid>
        <Link to={`${props.routelink}`} style={{ textDecoration: "none" }}>
      <StyledBadge badgeContent={<StyledImage src={img2} alt="Badge Image" />}>               
        <Card sx={{ maxWidth: "430"}}>
          <CardContent>
          
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  height="100"
                  image={props.imgcontent}
                  alt="Image Alt Text"
                  sx={{
                    objectFit: "cover",
                    width: "100%",

                    borderRadius: "50%",
                  }}
                />
              </Grid>
              <Grid item xs={8}>
                <Stack direction="row">
                  <Typography
                    sx={{
                      fontSize: 18,
                      marginLeft: "0px",
                      marginTop: "20px",
                    }}
                    color="Black"
                  >
                    {props.content1}
                  </Typography>
                </Stack>
                <Stack direction="row" sx={{ alignItems: "center" }}>
                  <Typography
                    sx={{ fontSize: 16 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {props.content2}
                  </Typography>
                  
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        </StyledBadge>
        </Link>
      </Grid>
    </div>
  );
}

import React from "react";
import {
  Grid,
  Button,
  Typography,
  Card,
  Box,
  LinearProgress,
} from "@mui/material";
import styled from "@emotion/styled";
const StyledButton = styled(Button)`
  && {
    font-size: 12px;
    text-transform: none;
    color: white;
    border-color: white;
  }
`;
const Landing = () => {
  return (
    <Grid
      container
      columns={12}
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        item
        sx={{
          backgroundColor: "#440E38",
          display: "flex",
          flexDirection: "column",
          paddingTop: "5%",
        }}
        md={6}
        xs={12}
      >
        <Grid
          item
          sx={{
            justifyContent: "space-between",
            display: "flex",
            marginX: "5%",
          }}
          md={8}
          xs={10}
        >
          <StyledButton variant="outlined">Interest</StyledButton>
          <StyledButton variant="outlined">Request</StyledButton>
          <StyledButton variant="outlined">Messages</StyledButton>
        </Grid>
        <Grid item sx={{ color: "white", margin: "2%" }}>
          <Typography variant="content" sx={{ fontSize: "small" }}>
            1661 Matches based on your preference
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            borderTopRightRadius: "25px",
            borderTopLeftRadius: "25px",
            paddingY: "5%",
            
          }}
        >
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: "5%",
              height: "50vh",
              padding:'2%',
              borderRadius:'25px'
            }}
          className="card-div"

          >
            <Box sx={{ backgroundColor: "#D9D9D9", height: "30vh" }}></Box>

            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                color: "#000",
                backgroundColor: "white",
              }}
            >
              <Grid item>
                <Typography>Akshay Venu</Typography>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "90%",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{fontSize:'small'}}>30 Years</Typography>
                <Typography sx={{fontSize:'small'}}>5'11''</Typography>
                <Typography sx={{fontSize:'small'}}>Software Professional</Typography>
                <Typography sx={{fontSize:'small'}}>Malyalam</Typography>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  marginTop: "5%",
                }}
              >
                <StyledButton
                  style={{
                    color: "black",
                    borderRadius: "25px",
                    backgroundColor: "#E9EBF8",
                  }}
                >
                  Never married
                </StyledButton>
                <Grid item>
                  <Typography sx={{fontSize:'small'}}>Match Score 90%</Typography>
                  <LinearProgress variant="half" color="success"/>
                </Grid>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  marginTop: "5%",
                }}
              >
                <StyledButton
                  style={{
                    color: "#FCDADA",
                    borderRadius: "25px",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "#FCDADA",
                    width: "40%",
                  }}
                >
                  Reject
                </StyledButton>
                <StyledButton
                  style={{
                    color: "#fff",
                    borderRadius: "25px",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "#FCDADA",
                    backgroundColor: "#A6DE92",
                    width: "40%",
                  }}
                >
                  Accept
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: "5%",
              height: "50vh",
              padding:'2%',
              borderRadius:'25px'
            }}
          className="card-div"
          >
            <Box sx={{ backgroundColor: "#D9D9D9", height: "30vh" }}></Box>

            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                color: "#000",
                backgroundColor: "white",
              }}
            >
              <Grid item>
                <Typography>Akshay Venu</Typography>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "90%",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{fontSize:'small'}}>30 Years</Typography>
                <Typography sx={{fontSize:'small'}}>5'11''</Typography>
                <Typography sx={{fontSize:'small'}}>Software Professional</Typography>
                <Typography sx={{fontSize:'small'}}>Malyalam</Typography>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  marginTop: "5%",
                }}
              >
                <StyledButton
                  style={{
                    color: "black",
                    borderRadius: "25px",
                    backgroundColor: "#E9EBF8",
                  }}
                >
                  Never married
                </StyledButton>
                <Grid item>
                  <Typography sx={{fontSize:'small'}}>Match Score 90%</Typography>
                  <LinearProgress variant="half" color="success"/>
                </Grid>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  marginTop: "5%",
                }}
              >
                <StyledButton
                  style={{
                    color: "#FCDADA",
                    borderRadius: "25px",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "#FCDADA",
                    width: "40%",
                  }}
                >
                  Reject
                </StyledButton>
                <StyledButton
                  style={{
                    color: "#fff",
                    borderRadius: "25px",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "#FCDADA",
                    backgroundColor: "#A6DE92",
                    width: "40%",
                  }}
                >
                  Accept
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
          
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Landing;

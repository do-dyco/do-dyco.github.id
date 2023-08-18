"use client";
import React from "react";
import Head from "next/head";
import {
  Container,
  Typography,
  Button,
  Grid,
  Chip,
  Stack,
  IconButton,
} from "@mui/material";
import Navbar from "./components/navbar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TimeLine from "./components/timeline";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import Footer from "./components/footer";
import ContactPage from "./components/contact";
import { yellow } from "@mui/material/colors";
import Skill from "./components/skill";

const IndexPage = () => {
  const emailAddress = "dodhydnkz24@gmail.com";
  const phoneNumber = "+6281298313543";

  function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  const itemData = [
    {
      img: "../../project.png",
      title: "Breakfast",
      rows: 3,
      cols: 2,
    },
    {
      img: "../../project2.png",
      title: "Burger",
    },
    {
      img: "../../project3.png",
      title: "Camera",
    },
    {
      img: "../../project4.png",
      title: "Coffee",
      rows: 2,
      cols: 2,
    },
    {
      img: "../../project5.png",
      title: "Hats",
      cols: 4,
      rows: 2,
    },
  ];

  const itemData2 = [
    {
      img: "../../monitoring/monitoring_brg.png",
      title: "Breakfast",
      rows: 3,
      cols: 2,
    },
    {
      img: "../../monitoring/monitoring_brg1.png",
      title: "Burger",
    },
    {
      img: "../../monitoring/monitoring_brg2.png",
      title: "Camera",
    },
    {
      img: "../../monitoring/monitoring_brg3.png",
      title: "Coffee",
      rows: 2,
      cols: 2,
    },
    {
      img: "../../monitoring/monitoring_brg4.png",
      title: "Hats",
      cols: 2,
      rows: 2,
    },
    {
      img: "../../monitoring/monitoring_brg5.png",
      title: "Hats",
      cols: 2,
      rows: 2,
    },
  ];
  return (
    <>
      <Head>{/* <title>My Portfolio</title> */}</Head>
      <Navbar />
      <Container
        maxWidth="xl"
        sx={{ py: 8 }}
        style={{ background: "linear-gradient(#000046,#034eaf)" }}
      >
        <div id="home">
          <Stack direction="row" justifyContent="space-between" mt={4}>
            <Stack>
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                color="white"
              >
                Welcome to{" "}
                <span style={{ color: "yellow" }}>My Portofolio</span>
              </Typography>
              <Typography variant="body1" gutterBottom color="white">
                Hi, I'm Dody,{" "}
                <span style={{ color: "yellow" }}>
                  a passionate web & Mobile developer.
                </span>
              </Typography>
            </Stack>
            <img
              src="../../vektor.webp"
              style={{
                borderRadius: "50%",
                height: "30%",
                width: "30%",
                marginTop: "12%",
              }}
            />
          </Stack>
        </div>

        <Grid container spacing={2} sx={{ mt: 2, mb: 4 }}>
          <Grid item>
            <Stack direction="row" spacing={1}>
              <Chip
                avatar={<ArticleOutlinedIcon />}
                label="Checkout My CV"
                color="primary"
                variant="outlined"
                component="a"
                href="#"
                clickable
              />
              <Chip
                avatar={<LinkedInIcon />}
                label="Linkedin"
                color="primary"
                variant="outlined"
                component="a"
                href="https://www.linkedin.com/in/dody-63ba30183/"
                clickable
              />
            </Stack>
          </Grid>
        </Grid>
        <div id="project">
          <Typography variant="body1" align="center" gutterBottom color="white">
            Check out some of my projects below:
          </Typography>
          <Stack direction="row" justifyContent="space-between">
            <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
              <Grid item>
                <ImageList
                  sx={{ width: 500, height: 450 }}
                  variant="quilted"
                  cols={4}
                  rowHeight={121}
                >
                  {itemData.map((item) => (
                    <ImageListItem
                      key={item.img}
                      cols={item.cols || 1}
                      rows={item.rows || 1}
                    >
                      <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Grid>
            </Grid>

            <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
              <Grid item>
                <ImageList
                  sx={{ width: 500, height: 450 }}
                  variant="quilted"
                  cols={4}
                  rowHeight={121}
                >
                  {itemData2.map((item) => (
                    <ImageListItem
                      key={item.img}
                      cols={item.cols || 1}
                      rows={item.rows || 1}
                    >
                      <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Grid>
            </Grid>
          </Stack>
        </div>
        <div id="about">
          <Stack mt={6}>
            <Typography color={"white"} align="center" variant="h5">
              Experience
            </Typography>
            <TimeLine />
          </Stack>
        </div>
        <div>
          <Stack mt={6} spacing={4}>
            <Typography color={"white"} align="center" variant="h5">
              Skill
            </Typography>
            <Skill />
          </Stack>
        </div>
        <div id="contact">
          <Stack alignItems={"flex-end"} paddingX={10} mt={12}>
            <ContactPage />
            <Stack direction="row" spacing={4}>
              <a href={`mailto:${emailAddress}`} target="_blank">
                <EmailIcon fontSize="large" htmlColor="white" />
              </a>
              <a
                href="https://github.com/do-dyco"
                className="inline-block"
                target="_blank"
              >
                <GitHubIcon fontSize="large" htmlColor="white" />
              </a>
              <a
                href={`https://wa.me/${phoneNumber}`}
                className="inline-block"
                target="_blank"
              >
                <ContactPhoneIcon fontSize="large" htmlColor="white" />
              </a>
            </Stack>
          </Stack>
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default IndexPage;

import React from "react";
import { styled } from "@mui/system";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9na5u9i",
        "template_ui3vrnd",
        e.target,
        "_A8AeTqOT7Mu2oqrz"
      )
      .then(
        (result: any) => {
          console.log(result.text);
          window.alert("Your message has been sent!");
        },
        (error: any) => {
          console.log(error.text);
        }
      );

    // e.target.reset();
  };

  return (
    <div id="contact">
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              color={"white"}
            >
              Contact <span style={{ color: "yellow" }}>Me</span>
            </Typography>
            <Typography variant="body1" paragraph color={"white"}>
              If you have any questions or would like to collaborate, please
              don't hesitate to contact me.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <form onSubmit={sendEmail}>
              <TextField
                label="Name"
                type="primary"
                variant="filled"
                fullWidth
                style={{ marginTop: 10, backgroundColor: "white" }}
                placeholder="Enter your full name here"
                required
              />
              <TextField
                label="Email"
                variant="filled"
                fullWidth
                type="email"
                style={{ marginTop: 10, backgroundColor: "white" }}
                placeholder="Enter your email address here"
                required
              />
              <TextField
                label="Message"
                variant="standard"
                fullWidth
                multiline
                rows={4}
                style={{
                  marginTop: 10,
                  marginBottom: 20,
                  backgroundColor: "white",
                }}
                placeholder="Enter your message here"
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                Send Message
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContactPage;

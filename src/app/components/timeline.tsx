"use client";
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";
import { Avatar, Stack } from "@mui/material";

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="white"
        >
          Aug 2022 - Now
        </TimelineOppositeContent>
        <TimelineSeparator>
          <Avatar
            alt="ATT"
            src="../../logo_pt/att.png"
            style={{ backgroundColor: "white", padding: 8 }}
            sx={{ width: 56, height: 56 }}
          />
          <TimelineConnector />

          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Stack>
            <Typography variant="h6" component="span" color="white">
              PT. Segara Artha Investama (ATT Group)
            </Typography>
            <Typography variant="h6" component="span" color="white">
              Web & Mobile Developer
            </Typography>
          </Stack>
          <Typography color="white">
            {" "}
            - Designing, deploying, and managing web and mobile applications
            that can run on multiple platforms
          </Typography>
          <Typography color="white">
            - Utilizing React Native to design and develop UI components for web
            and mobile apps based on JavaScript
          </Typography>
          <Typography color="white">
            {" "}
            - Writing effective, scalable, and reusable JavaScript code can help
            create interchangeable front-end modules
          </Typography>
          <Typography color="white">
            {" "}
            - Improving front-end performance by diagnosing and fixing all
            system errors and bugs
          </Typography>
          <Typography color="white">
            {" "}
            - Using other JavaScript libraries (like “Redux”) to make
            asynchronous API calls and enhance website/mobile app performance
            Creating plans to transition React-based web and mobile apps to
            React Native
          </Typography>
          <Typography color="white">
            {" "}
            - Planning the data and presentation layer for the front end of all
            applications{" "}
          </Typography>
          <Typography color="white">
            {" "}
            - Collaborating with design, development, and customer service teams
            to properly understand client requirements
          </Typography>
          <Typography color="white"> - Configuring Rest API</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="white"
        >
          Mar 2021 - Jul 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <Avatar
            alt="ATT"
            src="../../logo_pt/tani.jpg"
            style={{ backgroundColor: "white", padding: 8 }}
            sx={{ width: 56, height: 56 }}
          />
          <TimelineConnector />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span" color="white">
            PT. Taniunggul Trading Nusantara
          </Typography>
          <Typography color="white">IT Infrastructure & Development</Typography>
          <Typography color="white">
            {" "}
            - Maintenance ERP System of the company
          </Typography>
          <Typography color="white">
            {" "}
            - Maintenance HRIS System of the company
          </Typography>
          <Typography color="white">
            {" "}
            - Upgrading feature as needed by company
          </Typography>
          <Typography color="white">
            {" "}
            - Troubleshooting software and hardware
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="white"
        >
          Aug 2019 - Jan 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <Avatar
            alt="iot"
            src="../../logo_pt/iot.png"
            style={{ backgroundColor: "white", paddingTop: 5 }}
            sx={{ width: 56, height: 56 }}
          />
          <TimelineConnector />

          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Stack>
            <Typography variant="h6" component="span" color="white">
              PT. IOT Integrasi Otomasi
            </Typography>
            <Typography variant="h6" component="span" color="white">
              Web Developer
            </Typography>
          </Stack>
          <Typography color="white">
            {" "}
            - Designing, deploying, and managing web that can run responsive on
            other platforms
          </Typography>
          <Typography color="white">
            {" "}
            - Writing effective, scalable, and reusable Codeigniter 3 code
          </Typography>
          <Typography color="white">
            {" "}
            - Improving performance by diagnosing and fixing all system errors
            and bugs
          </Typography>
          <Typography color="white">
            {" "}
            - Using other JavaScript and AJAX for smooth UI
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

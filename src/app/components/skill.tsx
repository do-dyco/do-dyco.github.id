import React from "react";
import { styled } from "@mui/system";
import { Grid, Typography, Paper } from "@mui/material";

const Skills = () => {
  const skillsData = [
    {
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
      ),
      label: "HTML",
    },
    {
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />
      ),
      label: "CSS",
    },
    {
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" />
      ),
      label: "PHP",
    },
    {
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" />
      ),
      label: "Codeigniter",
    },
    {
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" />
      ),
      label: "Laravel",
    },
    {
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
      ),
      label: "JavaScript",
    },
    // { icon: <FaReact />, label: "React" },
    {
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
      ),
      label: "React",
    },
    {
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
      ),
      label: "Next JS",
    },
    {
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
      ),
      label: "MySQL",
    },
    {
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" />
      ),
      label: "PostgreSQL",
    },
    {
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" />
      ),
      label: "Git",
    },
    {
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />
      ),
      label: "Typescript",
    },
  ];

  return (
    <div>
      <Grid container spacing={2}>
        {skillsData.map((skill, index) => (
          <Grid item xs={12} sm={4} md={2} key={index}>
            <Paper className={`${skill.label.toLowerCase()}`}>
              {skill.icon}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Skills;

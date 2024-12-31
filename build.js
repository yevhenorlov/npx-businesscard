"use strict";

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

// Text + chalk definitions
const data = {
  name: chalk.white("Yev Orlov"),
  tagline: chalk.yellow("Building tools for humans"),
  work: chalk.white("Front End Engineer"),
  location: chalk.white("Amsterdam, NL"),
  blog: chalk.yellow("yevorlov.com"),
  bluesky: chalk.gray("bsky.app/profile/") + chalk.cyan("yevorlov.com"),
  github: chalk.gray("github.com/") + chalk.red("yevhenorlov"),
  linkedin: chalk.gray("linkedin.com/in/") + chalk.blue("yevhenorlov"),
  npx: chalk.green("npx") + " " + chalk.white("yevorlov"),
  labelWork: chalk.white.bold("       Work:"),
  labelLocation: chalk.white.bold("   Location:"),
  labelBlog: chalk.white.bold("    Webpage:"),
  labelBluesky: chalk.white.bold("    Bluesky:"),
  labelnpm: chalk.white.bold("        npm:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `                                  ${data.name}`;
const subheading = `                  ${data.tagline}`;
const living = `${data.labelLocation}  ${data.location}`;
const working = `${data.labelWork}  ${data.work}`;
const blogging = `${data.labelBlog}  ${data.blog}`;
const blueskying = `${data.labelBluesky}  ${data.bluesky}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name
  newline +
  subheading + // data.tagline
  newline +
  newline + // Add one whole blank line
  working + // data.labelWork + data.work
  newline +
  living + // data.labelLocation + data.location
  newline +
  blogging + // data.labelBlog + data.blog
  newline +
  newline +
  githubing + // data.labelGitHub + data.github
  newline +
  linkedining + // data.labelLinkedIn + data.linkedin
  newline +
  blueskying + // data.labelBluesky + data.bluesky
  newline +
  carding; // data.labelCard + data.npx

fs.writeFileSync(
  path.join(__dirname, "bin/output"),
  chalk.yellow(boxen(output, options)),
);

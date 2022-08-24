## A readme for building my personal portfolio

This is the solution to my portfolio website [Portfolio Website Codebase](https://github.com/Daiveedjay/Portfolio)

- Live Site URL: [Netlify Portfolio](https://david-portfolio-main.netlify.app)

### Preview

![](./IMG/Portfolio.webp)

### Links

- Solution URL: [Add solution URL here](https://github.com/Daiveedjay/Portfolio)
- Live Site URL: [Add live site URL here](https://david-portfolio-main.netlify.app)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Deskop-first workflow
- JS for Dom manipulation
- Dynamic Icons

## Features

⚡️ Modern UI Design + Reveal Animations\
⚡️ One Page Layout\
⚡️ Fully Responsive\
⚡️ Valid HTML5 & CSS3\
⚡️ Well organized documentation

## Why do you need a portfolio? ☝️

- Professional way to showcase your work
- Increases your visibility and online presence
- Shows you’re more than just a resume

## Author

- Frontend Mentor - [@Daiveedjay](https://www.frontendmentor.io/profile/Daiveedjay)
- Twitter - [@JajaDavid8](https://twitter.com/JajaDavid8)

## A Rundown of how I built this

- Except for the project section, which is wrapped in a div due to its unique functionality based on its HTML structure, each section is enclosed in a section tag.
- All areas with a section tag share 1 common intersection observer

# Hero Section

- An intersection observer was placed on the Hero Section, to capture the event of the user scrolling past the header, and activating the sticky class in the nav.

- An animation was added to all the content in the hero section and is fired as soon as the user loads the page.

# About Section

- An intersection observer was placed on the About Section, to capture the event of the user scrolling in and out, and translats the content according to the amount of viewport height the user has scrolled in and out of the screen.

# Project Section

- A second intersection observer was placed on the Project Section (which uses a div, instead of a section) to target each individual `project__container` and replicates the slider effect of all the other sections.

# Call to Action Section

- An intersection observer was placed on the Call to Action Section, with a slightly different class which translates the `form element` on the Y axis.

# Footer Section

- An intersection observer was placed on the Footer Section, which uses similar styling from the CTA section and translates the Footer Icons on the Y axis.

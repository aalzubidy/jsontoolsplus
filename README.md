# Welcome to JSON Tools Plus!

There are couple tools that does things with JSON. However, I wanted one place that does it all. I also wanted couple other features like copy to clipboard, download results, save things in the browser for a bit, etc. So **JSON Tools Plus** was born. I built this project before but it was very basic and it was built on angular.js. I wanted to update it, add more tools to it, and provide small room for customization too. I always build applications for me first, that I want to be a user of. You're very welcome to take advantage of this tool and I hope it helps you with your projects! You're also welcome to contribute to this project and have it on your resume as a project you helped build. It's very simple application as you can see in the UI and the code. The priority to always have useful, easy to use, and easy to maintain applications. Feel free to contact me if you have any questions or suggestions. Thank you for checking out **JSON Tools Plus**!

## Contribution
I welcome all ideas, suggestions, and code contribution to the project. The application is written in react with javascript plus bootstrap and MUI. I was not sure where to use MUI so I added it at the beginning and then used few components. I'm okay with replacing it fully with bootstrap too.

Create a ticket, git clone the project, create a branch with patch/minor/major, and submit your merge request. There is a pre-commit git hook that will be installed on first **npm install** which will ensure the package.json and package-lock.json will update with every commit according to the branch name. Thus, please ensure your branch name follows the standard naming (patch/minor/major)-issueNumber. Thank you, and looking forward for your contributions!

## To Run Locally

- git clone
- npm install
- npm start
- access it on localhost:3000

## Architecture and Design Notes

- There is an alert context to use with notifications. It's implemented but I didn't use it yet. It's there if you want to throw notifications in the application.
- There is some repetitive code in some sections. But I was aiming to separate the pages fully, just in case I have a new idea or implementation for that page in the future.
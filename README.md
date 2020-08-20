## Team Profile Generator
View a demo video:

A software engineering team generator command line application. The application prompts the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. This app also includes unit tests which it passes. When the user has completed building the team, the application creates an HTML file that displays a nicely formatted team roster based on the information provided by the user.

```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```

How to use this application:
* in the terminal run "npm i" in the correct directory(Develop)
* next run "node app.js" in the terminal to be prompted with questions
* when you have added all of your employees, select the "none" option and an output folder with a team.html will be generated
* to view the generated page, open team.html in your browser
* if you would like to run the test, run "npm test" in the terminal



### Roster output

This project generates a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member displays the following in no particular order:

  * Name

  * Role

  * ID

  * Role-specific property (School, link to GitHub profile, or office number)


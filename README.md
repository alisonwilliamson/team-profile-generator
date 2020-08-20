## Team Profile Generator
View a demo video:https://drive.google.com/file/d/1bx3aq-ORdG9aATC2-gaZpgDAzfGdfgdO/view?usp=sharing

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

![p1](https://user-images.githubusercontent.com/54878075/90731525-cd44d200-e297-11ea-9f03-a16117978a37.png)
![p3](https://user-images.githubusercontent.com/54878075/90731568-d766d080-e297-11ea-815d-561ea096a73d.png)
![p4](https://user-images.githubusercontent.com/54878075/90731571-d9309400-e297-11ea-819e-01d77f778e24.png)
![p5](https://user-images.githubusercontent.com/54878075/90731578-db92ee00-e297-11ea-92fd-0bddd050dd00.png)
![p6](https://user-images.githubusercontent.com/54878075/90731585-dd5cb180-e297-11ea-9afb-426d14d463bd.png)

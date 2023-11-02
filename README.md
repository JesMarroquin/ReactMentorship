# ReactMentorship
Empty Repository for React Mentees deliverables 

Github Instructions:

1- Fork main branch to your repository

2- Clone code locally or work using codespaces

3- Work on the changes, and make each commit being the activity you are working on.

Follow this format for your commits

COMMIT MESSAGE: 

ACT# - BRANCH_NAME - SMALL COMMENT WITH CHANGES

ACT1 - jesus_e - Initial Commit

4 - Once commited your changes you can go to your repository click on pull requests -> new pull request -> Select the origin the base repository JesMarroquin/ReactMentorship and base: YOUR BRANCH Ej. base: test/jesus_e

PROJECT:

Vite requires Node.js version 14.18+, 16+

________________________________________________________________________________

Week 1

ACT 1:
Initiate react project with Vite

ACT 2:
Install MUI Library and icons
(@mui/material @emotion/react @emotion/styled @mui/icons-material)

ACT 3: 
In your App.tsx show this user data:
Use this object for user data: 

const userProfile = {
    name: YOURNAME,
    email: 'YOURFIRSTNAME@example.com',
    phone: 81123456789,
    address: '21 Main Street, Monterrey Nuevo Leon, CP65343'
  }

Display them in your UI using JSX:
Example:
https://github.com/JesMarroquin/ReactMentorship/assets/125486932/5f8dc422-895a-4911-8927-6efc763a9b61

ACT 4:
Refactor your code in App.tsx to a separate component named User.tsx (applying componentization)

ACT 5: 
Utilizing JSX apply conditional rendering from a variable/const

________________________________________________________________________________

Week 2

ACT 6:
Convert the User object you had into an array, pass this object into the UserList Component as props (users).

ACT 7:
Using the props sended from the parent component into the UserList component iterate over the users using map and show them in the Table.

ACT 8: 
Using the useEffect and useState hook set the users array into the state

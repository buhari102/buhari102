# README

This is an experimental real estate application on which within it I have incapsulated my most tressured resources that I solved during the full development of the application since experience and saviness is formed in problem solving.

AUTHENTICATION AND SPECIAL PERMISSIONS TOKENS

Within src-screens contains screens that are the root in doing Sign in, sign up, forget password and etc. Within this screens in sign in and sign up contains my authentication flow which works for me and restricts flow when there is a problem.
In addition to that other screens seem to need additional permissions such as access tokens which is attached at the 'fetch'

ROUTING AND COLLECTING SCREENS

During the time that I was developing this app I was able to bundle up all screens in two places, the first place I bundled all screens in 'navigation' on which this simplified the movement of screen to screen and here I only exported the NAVIGATION which as the result simplifies the main 'App.js' structure. The second time I used it was in srcC where I bundled up all the hostscreens. On which now they look smarter.

API CENTRALIZATION

Well its not such a fancy trick but it did simplify my code on which now if there are changes to any url I can centraly access them without any fuss. This is found in the API bit.

A SEARCH AND A GRID VIEW

This is one of my layouts which simply contains a grid formed by flatlist component in the react native and a classy search resembling that of instaagram it can be found in srcC commercial screens.

A STABLE FORM FORMATION

Now this contains a lot of beautiful resources the first is 'jotai' dependency which stores data and moves it and second is data submition and lastly is react-native-responsive screens which helps to maintain the form dimensions in various devices without considering their screen sizes.

PROFILE BODY MANIPULATION

This is a tricky part this is found under srcB in screen components in the profile body for it contains gimmicks which can be used to affect the display of a profile.

DATA MANIPULATION

Well this has been solved entirely by 'jotai' since it simplifies the movement of data which was a very big problem for me and also it can be used for both storage and persistance of data.

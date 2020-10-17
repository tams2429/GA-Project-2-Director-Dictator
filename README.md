# GA Project 2: Director Dictator 🎥

## Table of Contents 📖

- [Overview](https://www.notion.so/Project-3-Readme-Fri-21st-Aug-95a55df0773f45c1af1f5ec3084c4b5b#f99c1c68a0be411ea21aebfba620afdd)
- [Technologies](https://www.notion.so/Project-3-Readme-Fri-21st-Aug-95a55df0773f45c1af1f5ec3084c4b5b#c4e06631a3be4fceb9e534a52290e05d)
- [External APIs](https://www.notion.so/Project-3-Readme-Fri-21st-Aug-95a55df0773f45c1af1f5ec3084c4b5b#9a46589e5ce64646bc78fa1fe13382ee)
- [Planning](https://www.notion.so/Project-3-Readme-Fri-21st-Aug-95a55df0773f45c1af1f5ec3084c4b5b#fe3af2ac0fd944c98a0bad3a79ddff88)
- [Getting Started](https://www.notion.so/Project-3-Readme-Fri-21st-Aug-95a55df0773f45c1af1f5ec3084c4b5b#99b60c701ae0446998be70811a2726d1)
- [Wins](https://www.notion.so/Project-3-Readme-Fri-21st-Aug-95a55df0773f45c1af1f5ec3084c4b5b#81e74b7a4ae74f2399c85b5ed0c61304)
- [Challenges](https://www.notion.so/Project-3-Readme-Fri-21st-Aug-95a55df0773f45c1af1f5ec3084c4b5b#7fedc5eb0935405e992e4910a4d6d3a7)
- [Future Work](https://www.notion.so/Project-3-Readme-Fri-21st-Aug-95a55df0773f45c1af1f5ec3084c4b5b#fca88914eeb14fc0909ad0588d7ea20c)
- [Credits](https://www.notion.so/Project-2-Readme-Fri-7th-Aug-04c553920edd412488e349b82d9de9bc#4c3bb8b3db874589a04d0ef3e9e219c3)

## Overview 👓

### Brief

- **Group work**
- **2 day timeframe**
- Build a **Front-End application**, primarily with **React JS**
- Use of **External APIs**
- Be **deployed online** so it's **publicly accessible**

Working in a **group of 3**, we created **Director Dictator**, a **Movie Generator App** which generates a random movie from which users can choose to find out more about or move onto the next choice.

The concept is to help those that have run out of movie ideas to **choose something less conventional** as well as to **limit the total of possible choices** for those users who are indecisive. The movies have been fetched from an **external API database, OMDB**.

![Working Gif of Director Dictator](/ReadmeResources/DirectorDictator-GIF.gif)

## Technologies 💻

- ReactJS
- HTML5
- SCSS (**with Bulma framework**)
- GitHub
- Insomnia (**Back-End Testing**)

## External APIs 📍

This application uses an external API, in order to enjoy the full experience of this application, please use the **deployed version** here ([https://directordictator.netlify.app/](https://directordictator.netlify.app/)) or to **run it locally**, you will need to **sign up for an API key** from the following link:

- [OMDB](http://www.omdbapi.com/) (**Movie Database**)

## Process 📝
- Before we started, as we were a **group of 3** as opposed to a group of 2, we decided early on, that our main approach would be to '**Triple Code**' the **main logic** and component to ensure we have the **main functionality working**, and then to **delegate the remaining minor compononents between us** depending on each member's comfortability in certain areas (i.e. SCSS, Home page, 404 page etc.)
- To allow us to 'triple code' more effectively, we used a **VSCode extension, 'Live Share'**, where I took the responsibility in doing the typing while everyone else would be guiding me. During this process, they also had write access to my code which allowed us to **simultaneously work remotely on the same project files** and make regular Git commits
- Following our agreed approach strategy, we moved on to **researching the various APIs** that were available and came up with a **shortlist** of those we were most interested in before settling on a **Movie API, OMDB**. One of the main factors of consideration was the **clarity of the documentation**

![OMDB API](/ReadmeResources/OMDB.png)

- From there, I **tested the RESTful Routes** for API requests using **Insomnia** to ensure that a **response is returned** by the external server

![Insomnia Screenshot](/ReadmeResources/Insomnia.png)


### MVP

- **Home page** with title
- **Movie 'Show' page** which presents a random movie to the user obtained from a **HTTP Get Request** made to the **OMDB API**
- **Functionality to 'pass' the movie** presented to the user which in turn, initiates another 'Request-Response' cycle to present a new random movie to the user
- A **'404' error page** which redirects users who have entered an incorrect url

## Getting Started 🏃‍♂️🏃‍♀️

As highlighted earlier, in order to enjoy the full experience of the application, it is recommended to use the **deployed version** at [https://directordictator.netlify.app/](https://directordictator.netlify.app/). If you wish to **run it locally**, you will need to follow the **following steps**:

- **Fork** or **Clone** the **GitHub repository** ([https://github.com/tams2429/GA-Project-2-MovieAPI](https://github.com/tams2429/GA-Project-2-MovieAPI))
- Run `yarn` to **install** all the **dependencies**
- `yarn start` to **start the development server** for the whole application

## Wins 🏆

A major win for this project was **successfully manipulating the 'Response' data** sent back from the **OMDB API**, so that only Movies were presented back to the User. As the 'Request' had only allowed for a general query to be made, we had to **filter out those that were not movies** (i.e. TV shows etc). This is demonstrated in the **'getRandomMovie' function** below.

```jsx
getRandomMovie = async () => {
    if (!this.state.moviesLeft) {
      this.props.history.push('/problempage')
      return
    }
    const randomIndex = Math.floor(Math.random() * 9000000)
    this.setState( { movie: null } )
    try {
      const res = await getMovie('tt' + randomIndex)

      if (res.data.Response === 'True' && res.data.Type === 'movie' && res.data.Poster !== 'N/A') {
        const moviesLeft = this.state.moviesLeft - 1
        return this.setState( { movie: res.data, moviesLeft } )
      }
      return this.getRandomMovie()
    } catch (error) {
      console.log('The error is', error)
    }
  }
```

## Challenges 🏋️

One of the **challenges** of this project was the **delegation of work** since the assigned scope was meant to be for teams of 2 whereas we were a group of 3. As a result, instead of the traditional 'Pair-Coding' we did it as a 3, where we found a **useful VSCode extension, 'Liveshare'**, which **allowed all of us to share the same screen** given the remote working conditions during the Lockdown.

## Future Work ☕

### Bugs

- Sound file does not play on page load on 'Home.js' page

### Planned features/extensions

- **Additional sounds** to play after every choice a user makes on the 'Movie.js' page
- **Trailer video** to be added to each movie card if available

## Credits 🙇‍♂️ 🙇‍♀️

I would like to thank my fellow team members, **Dan Irons** & **Dan Price**, without whom, this **project would not be as successful and complete** as it is given the **tight timeframe**.

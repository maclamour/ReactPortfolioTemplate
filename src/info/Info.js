import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Mackenzie",
    lastName: "Lamour",
    initials: "ML", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '💡',
            text: 'Quick Study'
        },
        {
            emoji: '🌎',
            text: 'Based in the US'
        },
        {
            emoji: "💼",
            text: "Software Engineer for Hire!"
        },
        {
            emoji: <a href="mailto:maclamour@gmail.com">📧</a>,
            text: <a href="mailto:maclamour@gmail.com">maclamour@gmail</a>
        }
    ],
    socials: [
        {
            link: "https://github.com/maclamour",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/mackenzie-lamour/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
       
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Mackenzie. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['Javascript', 'React', 'Python', 'Node.js' ,'Git', 'Github', 'Bootstrap', 'Html5', 'CSS', 'Figma', 'MongoDB', 'Django','PostgreSQL','Express.js','jQuery'],
            softSkills: ['Business Skills ','Customer Service ', 'Customer Support','Project Management ','Computer Science','Software Development','Software Development Life Cycle','Development Strategy','Coding Standards','Code Review ','Programming Language ','Digital  Communication ','Team Leadership','Collaboration']
        }
    ,
    hobbies: [
        {
            label: 'Relaxing With My Wife and Pups',
            emoji: '😎'
        },
        {
            label: 'Learning New Things',
            emoji: '📖'
        },
        {
            label: 'Staying Active',
            emoji: '🏋🏾'
        },
        {
            label: 'Movies',
            emoji: '🎥'
        },
        {
            label: 'Cooking',
            emoji: '🌶'
        },
        {
            label: '',
            emoji: ''
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://maclamour.github.io/project1-Trivia/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/maclamour/project1-Trivia", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://travelhub3.herokuapp.com/login",
            source: "https://github.com/maclamour/Project-2-TravelHub",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://co-healthy-homemade.netlify.app/home",
            source: "https://github.com/tjphillips08/co-healthy-homemade-frontend",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://sport-spot24.herokuapp.com/",
            source: "https://github.com/maclamour/Sport-Spot",
            image: mock4
        },
        
    ]
}
let user = {
    name: 'Masha',
    age: 21
};
 let userCopy = {...user};

let numbers = [1, 2, 3];
let numCopy = [...numbers];

let user1 = {
    name: 'Masha',
    age: 23,
    location: {
        city: 'Minsk',
        country: 'Belarus'
    }
};
let user1Copy = {...user1};
console.log(user1Copy);

let user2 = {
    name: 'Masha',
    age: 28,
    skills: ["HTML", "CSS", "JavaScript", "React"]
};
let user2Copy = {...user2};
user2Copy.skills = user2.skills.map(skills=>(skills));
user2Copy.skills[0] = "HTML5";
console.log(user2Copy);
console.log(user2);

const array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 },
];
let arrayCopy = array.map(array=>({...array}));
arrayCopy[0].name = 'Vova';
console.log(arrayCopy);
console.log(array);

let user4 = {
    name: 'Masha',
    age: 19,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        exams: {
            maths: true,
            programming: false
        }
    }
};
let user4Copy = {...user4};
user4Copy.studies = user4.studies;
user4Copy.studies.exams = {...user4.studies.exams};
console.log(user4Copy);

let user5 = {
    name: 'Masha',
    age: 22,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { maths: true, mark: 8 },
            { programming: true, mark: 4 },
        ]
    }
};
let user5Copy = {...user5};
user5Copy.studies = {...user5.studies};
user5Copy.studies.department = {...user5.studies.department};
user5Copy.studies.exams = {...user5.studies.exams};
user5Copy.studies.exams = user5.studies.exams.map(exams=>({...exams}));
console.log(user5Copy);

let user6 = {
    name: 'Masha',
    age: 21,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            {
                maths: true,
                mark: 8,
                professor: {
                    name: 'Ivan Ivanov ',
                    degree: 'PhD'
                }
            },
            {
                programming: true,
                mark: 10,
                professor: {
                    name: 'Petr Petrov',
                    degree: 'PhD'
                }
            },
        ]
    }
};
let user6Copy = {...user6};
user6Copy.studies = {...user6.studies};
user6Copy.studies.department = {...user6.studies.department};
user6Copy.studies.exams = {...user6.studies.exams};
user6Copy.studies.exams = user6.studies.exams.map(exams=>({...exams}));
console.log(user6Copy);

let user7 = {
    name: 'Masha',
    age: 20,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            {
                maths: true,
                mark: 8,
                professor: {
                    name: 'Ivan Petrov',
                    degree: 'PhD',
                    articles: [
                        { title: "About HTML", pagesNumber: 3 },
                        { title: "About CSS", pagesNumber: 5 },
                        { title: "About JavaScript", pagesNumber: 1 },
                    ]
                }
            },
            {
                programming: true,
                mark: 10,
                professor: {
                    name: 'Petr Ivanov',
                    degree: 'PhD',
                    articles: [
                        { title: "About HTML", pagesNumber: 3 },
                        { title: "About CSS", pagesNumber: 5 },
                        { title: "About JavaScript", pagesNumber: 1 },
                    ]
                }
            },
        ]
    }
};
let user7Copy = {...user7};
user7Copy.studies = {...user7.studies};
user7Copy.studies.department = {...user7.studies.department};
user7Copy.studies.exams = {...user7.studies.exams};
user7Copy.studies.exams = user7.studies.exams.map(exams=>({...exams}));
user7Copy.studies.exams[1].professor.articles[0].title = "HTML5";
console.log(user7Copy);

let store = {
    state: {//1
        profilePage: {//2
            posts: [//3
                { id: 1, message: 'Hi', likesCount: 12 },
                { id: 2, message: 'By', likesCount: 1 },
            ],
            newPostText: 'About me',
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Valera' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Viktor' },
            ],
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'hi hi' },
                { id: 3, message: 'hi hi hi' },
            ],
        },
        sidebar: [],
    },
}
let storeCopy = {...store};
storeCopy.state = {...store.state};
storeCopy.state.profilePage = {...store.state.profilePage};
storeCopy.state.dialogsPage = {...store.state.dialogsPage};
storeCopy.state.profilePage.posts = store.state.profilePage.posts.map(posts=>({...posts}));
storeCopy.state.dialogsPage.dialogs = store.state.dialogsPage.dialogs.map(dialogs=>({...dialogs}));
storeCopy.state.dialogsPage.messages = store.state.dialogsPage.messages.map(messages=>({...messages}));
console.log(storeCopy);




//2
user5Copy.studies.department.group = 12;
user5Copy.studies.exams.find(exam => exam.programming).mark = 10;
console.log(user5Copy.studies.exams);

//3
user6Copy.studies.exams.find(exam=>exam.programming).professor.name = "vladimir";
console.log(user6Copy.studies.exams);

//4
const petrIvanov = user7Copy.studies.exams.find(exam => exam.professor.name === "Petr Ivanov").professor;
const aboutCSS = petrIvanov.articles.find(article => article.title === "About CSS");
aboutCSS.pagesNumber = 3;
console.log(user7Copy.studies.exams);

//5
storeCopy.state.profilePage.posts.forEach(post => {
    post.message = "Hello";
});
console.log(storeCopy.state.profilePage.posts);

storeCopy.state.dialogsPage.messages.forEach(message => {
    message.message = "Hello";
});
console.log(storeCopy.state.dialogsPage.messages);

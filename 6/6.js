//1
let numbers = [1, 2, 3, 4, 5];
let [ y, a ] = numbers;

console.log(y);

//2
let user = { name: "Arseniy", age: 18 };
let admin = { admin: "Arseniy", ...user };

console.log(admin);

//3
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

const { 
    state: {
        profilePage: { posts },
        dialogsPage: { dialogs, messages }
    },
} = store;

let [c,b] = store.state.profilePage.posts;

posts.forEach((post) => console.log(post.likesCount));

const Id = dialogs.filter((dialog) => dialog.id % 2 === 0);
console.log(Id);

const Message = messages.map((msg) => ({ ...msg, message: "Hello user" }));
console.log(Message);

//4
let tasks = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJs", isDone: false },
    { id: 4, title: "Rest API", isDone: false },
    { id: 5, title: "GraphQL", isDone: false },
];

let task6 = { id: 6, title: "HTML&CSS", isDone: true };
tasks = { ...tasks, task6 };

console.log(tasks);

//5
let arr = [1, 2, 3];

function sumValues(x, y, z) {
    return x + y + z;
}

console.log(sumValues(...arr));
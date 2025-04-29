const courses = [
    {
        id: 1,
        name: "HTML, CSS",
    },
];

const actions = [
    {
        type: "add",
        payload: {
            id: 2,
            name: "JavaScript",
        },
    },
    {
        type: "add",
        payload: {
            id: 3,
            name: "React",
        },
    },
    {
        type: "edit",
        payload: {
            id: 3,
            name: "ReactJS",
        },
    },
    {
        type: "delete",
        payload: 1,
    },
];

const result = actions.reduce((prevState, action) => {
    console.log(prevState, action);
    switch (action.type) {
        case "add":
            return [...prevState, action.payload];
        case "edit":
            return prevState.map((course) => {
                if (course.id === action.payload.id) {
                    return {
                        ...course,
                        name: action.payload.name,
                    };
                } else {
                    return course;
                }
            });
        case "delete":
            return prevState.filter((course) => {
                return course.id !== action.payload;
            });
        default:
            return prevState;
    }
}, courses);

console.log(courses);
console.log(result);

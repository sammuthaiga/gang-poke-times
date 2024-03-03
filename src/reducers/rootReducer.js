const initState = {
    posts: [
        {
            id:1,
            title: 'title one',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra '
        },
        {
            id:2,
            title: 'title two',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra '
        },
        {
            id:3,
            title: 'title three',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra '
        }
    ],
}

const rootReducer =(state = initState, action) => {
    return state
}

export default rootReducer
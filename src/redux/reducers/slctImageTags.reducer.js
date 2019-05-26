const slctImageTags = (state = [], action) => {
    if (action.type === 'SET_SELECTED_TAGS') {
        return action.payload;
    }

    return state;
}

export default slctImageTags;
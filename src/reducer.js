const initialState = {
    students: [
        { id: '1', name: 'Jeerawuth', score: 99},
        { id: '2', name: 'Sombat', score: 89},
        { id: '3', name: 'Worrawan', score: 73}
    ]
}
const reducer = (state = initialState, action) => {
    const allStudents = [...state.students];
    switch(action.type) {
        case 'DEL_STUDENT':
            const newState = {
                ...state,
                students: state.students.filter(item => item.id !== action.playload)
            }
            return newState;
        case 'ADD_STUDENT':
            const addedState = {
                ...state,
                students: [action.playload, ...state.students]
            }
            return addedState;
        case 'EDIT_STUDENT':
            const indexForEdit = allStudents.findIndex((item) => {
                return item.id === action.playload.id;
            });
            allStudents[indexForEdit] = {
                id: action.playload.id,
                name: action.playload.name,
                score: action.playload.score
            }
            const editedState = {
                ...state,
                students: allStudents
            }
            return editedState;
        default:
            break;
    }
    return state;
}
export default reducer;

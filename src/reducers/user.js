import { UPDATE_USER_NAME } from "../actions/user"

const INITIAL_STATE = {
    personalInfo: {
        name: "Usuário Padrão",
        id: 1
    },
    employerInfo: {
        carrer: "Profissional"
    }
}

function updateUserName(state, data) {
    const newState = { ...state }
    newState.personalInfo.name = data
    
    return Object.assign({}, state, { ...state })
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case UPDATE_USER_NAME:
            return updateUserName(state, action.payload)
        default:
            return state
    }
}

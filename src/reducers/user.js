const INITIAL_STATE = {
    personalInfo: {
        name: "Usuário Padrão",
        id: 1
    },
    employerInfo: {
        carrer: "Profissional"
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = INITIAL_STATE) {
    return state
}
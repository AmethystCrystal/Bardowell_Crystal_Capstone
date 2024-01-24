import { createContext, useReducer } from "react";

export const ExperiencesContext = createContext()

export const experiencesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_EXPERIENCES':
            return {
                experiences: action.payload
            }
        case 'CREATE_EXPERIENCE':
            return {
                experiences: [action.payload, ...state.experiences]
            }
        default:
            return state
    }
}

export const ExperiencesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(experiencesReducer, {experiences: null});

    return (
        <ExperiencesContext.Provider value={{...state, dispatch}}>
            { children }
        </ExperiencesContext.Provider>
    )
}
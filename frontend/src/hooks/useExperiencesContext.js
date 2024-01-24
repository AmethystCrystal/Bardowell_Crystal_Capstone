import { ExperiencesContext } from "../context/ExperienceContext";
import { useContext } from "react";

export const useExperiencesContext = () => {
    const context = useContext(ExperiencesContext)

    if (!context) {
        throw Error('error')
    }

    return context
}
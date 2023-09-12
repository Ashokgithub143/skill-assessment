import {createContext, useState } from 'react'

const AvailableAssessmentContext = createContext({});

export const AvailableAssessmentProvider = ({ children }) => {
    const [department, setDepartment] = useState('')
    const [topic, setTopic] = useState('')
    const [level, setLevel] = useState('')


    const filterDepartment = (newDepartment) => {
        setDepartment(newDepartment)
    }

    const filterLevel = (newLevel) => {
        setLevel(newLevel)
    }

    console.log(level, department)

    return (
        <AvailableAssessmentContext.Provider value = {{department, topic,level,  filterDepartment, filterLevel}}>
            {children}
        </AvailableAssessmentContext.Provider>
    )
}

export default AvailableAssessmentContext
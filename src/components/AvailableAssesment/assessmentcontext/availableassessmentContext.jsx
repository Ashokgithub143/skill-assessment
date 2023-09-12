import { useContext } from "react"
import AvailableAssessmentContext from "./availableassessmentProvider"


const useAvailableAssessment = () => {
  return useContext(AvailableAssessmentContext)
}

export default useAvailableAssessment
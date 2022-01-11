import React, { useState, useEffect } from 'react';

export const useUserData = () => {
  let userInfo = {
    patientFirstName: "",
    doctorLastName: '',
    diagnosis: ''
  }
  let patientFirstName: string = ""
  let doctorLastName: string = ""
  const [ isLoading, setIsLoading ] = useState(true)
  const [userData, setUserData] = useState([])

  useEffect(() => {
    const loadUserData = async () => {
        try {
            const response = await fetch('http://localhost:8000/entry')
            const userData = await response.json()
            setUserData(userData)
            setIsLoading(false)
        }
        catch(error) {
            console.log(error)
        }
    }

    loadUserData();
  }, [])

  userData.forEach((data: any) => {
    switch(data.resource.resourceType) {
        case "Patient":
            return userInfo["patientFirstName"] = data.resource.name[0].given[0]
        case "Doctor":
            return userInfo["doctorLastName"] = data.resource.name[0].family
        case "Diagnosis":
          return userInfo["diagnosis"] = data.resource.code.coding[0].name
        default:
            return null
    }
  })

  return {
    isLoading,
    userData: {
      ...userData,
      stepsData: {
        "one": `Hi ${userInfo["patientFirstName"]} on a scale of 1-10, would you recommend Dr ${userInfo["doctorLastName"]} to a friend or family member?`,
        "two": `Thank you. You were diagnosed with ${userInfo["diagnosis"]}. Did Dr ${userInfo["doctorLastName"]} explain how to manage this diagnosis in a way you could understand?`,
        "three": `We appreciate the feedback, one last question: how do you feel about being diagnosed with ${userInfo["diagnosis"]}?`,
        "four": `Step Four Content`
      }
    },
    
    setIsLoading
  }
}
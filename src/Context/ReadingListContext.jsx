import axios from 'axios';
import React, { createContext, useState,useEffect } from 'react'
import GetCookie from '../Hooks/GetCookie';
const ReadingListStore = createContext();
 function ReadingListContext({children}) {
    const [readingList,setReadingList] = useState([]);
    // const {id} = GetCookie("token")
    console.log("reaindfkg")
    console.log(readingList);

    useEffect(() => {
        
        // post()
    }, [])
    
  return <ReadingListStore.Provider value={{setReadingList,readingList}}>
    {children}
  </ReadingListStore.Provider>
}
export {ReadingListStore,ReadingListContext}
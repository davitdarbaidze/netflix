import { useContext, createContext } from "react";

const DataContext = createContext(
    {
        number: 0,
        enabled: false,
    }
);


export function useData(){
    return useContext(DataContext)
}


export function DataProvider({ children }){
    return <DataContext.Provider value={{ number: 0, enabled: false}}>{children}</DataContext.Provider>
}












//Boiler plate for data  context, don't forge to use wrap whole app with DataProvider


// import { useContext, createContext } from "react";

// const DataContext = createContext(
//     {

//     }
// );


// export function useData(){
//     return useContext(DataContext)
// }


// export function DataProvider({ children }){
//     return <DataContext.Provider value={{}}>{children}</DataContext.Provider>
// }
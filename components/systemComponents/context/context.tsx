import {createContext} from "react";

type ContextType={
    loading:number,
    setLoading:React.Dispatch<React.SetStateAction<number>>
}

const defaultValue:ContextType={
    loading: 0,
    setLoading: () => {},
};

const context=createContext(defaultValue);

export default context;

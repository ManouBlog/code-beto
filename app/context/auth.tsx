import {useState,createContext,useContext,useEffect} from 'react';
// ce sont les attributs qu'on demande pour l objet user
type User = {
    name:string;
    email:string;
}
// ce type a besoin d'un objet user
type AuthContextType = {
    user: User | undefined;
    setUser : React.Dispatch<React.SetStateAction<User | undefined>>;
    loading: boolean;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthContextProvider({children}:{children :React.ReactNode}) {


    const [user,setUser] = useState<User | undefined>(undefined);


    const [loading,setLoading] = useState<boolean>(false);
  
    async function checkUser() {
        try{
      setLoading(true)
      await new Promise((resolve)=>setTimeout(resolve,2000)); // wait 2 seconds
       setUser({name:'Adjobi', email:'Adjobi@gmail.com'})
        }catch(error){
            alert(error)
        }finally{
         setLoading(false)   
        }
    }

   useEffect(() => { 
     checkUser()
   }, [])
    return(
         <AuthContext.Provider value={{user,loading,setUser}}>
          {children}
        </AuthContext.Provider>
        )
}

export function useAuth(){
    const context = useContext(AuthContext);

    if(context === undefined){
        throw new Error("please wrap the components with Auth Provider");
    }
    return context;
}
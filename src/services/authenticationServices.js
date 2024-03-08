import bcrypt from "bcrypt"

const exposeServices = {

    comparePassword : async ({password,storedPassword})=>{
        const  result = await bcrypt.compare(password, storedPassword);
        return result 
    }
   

}



export default exposeServices
"use server";
import { auth } from "@/lib/auth";
import { APIError } from "better-auth/api";
import { redirect } from "next/navigation";

export const signUp = async (formData: FormData) => {
  const formValues = {
   email: String(formData.get("email") || ""),
    password: String(formData.get("pwd") || ""),
    firstName:String(formData.get("firstname") || ""),
    lastName:String(formData.get("lastname") || ""),
  };

  const {email, password, firstName, lastName} = formValues
 console.log("pppppcccx", formValues)
  try{

    await auth.api.signUpEmail({
        body:{
name: `${firstName} ${lastName}`,
email,
password
        }
    })


  } 
  catch (error) {
if(error instanceof APIError){
    switch(error.status){
        case "UNPROCESSABLE_ENTITY":{
            return {errorMessage: "User exist"}
        };
         case "BAD_REQUEST":{
            return {errorMessage: "Invalid email"}
        }; 
        default:{
            return {errorMessage: "Wrong"}
        }

    }
}
  }

   redirect("/admin-panel");
};

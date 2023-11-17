import { SignUp } from "@clerk/nextjs"
import { Metadata } from "next"


export const metadata: Metadata = {
    title: "ai-chatbot- sign up"
}
export default function SignUpPage(){
    return(
        <div className="flex h-screen items-center justify-center">
            <SignUp appearance={{variables: {colorPrimary:"#bac4c8"}}}/>
        </div>
    )
}
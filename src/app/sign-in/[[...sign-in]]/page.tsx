import { SignIn } from "@clerk/nextjs"
import { Metadata } from "next"


export const metadata: Metadata = {
    title: "ai-chatbot-sign in"
}
export default function SignInPage(){
    return(
        <div className="flex h-screen items-center justify-center">
            <SignIn appearance={{variables: {colorPrimary:"#bac4c8"}}}/>
        </div>
    )
}
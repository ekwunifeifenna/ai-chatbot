import Image from "next/image";
import logo from "@/app/assets/image.jpeg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {auth} from "@clerk/nextjs"
import {redirect} from "next/navigation"

export default function Home() {

  // redirect to the notes page if the user is already logged in 
  const {userId} = auth();

  if(userId) redirect("/notes");



  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-4">
        <Image src={logo} alt="ai chatbot logo" width={100} height={100} />
        <span className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          AI CHATBOT
        </span>
      </div>
      <p className="max-w-prose text-center">
        An advanced notes app with the use of AI. Built with OpenAI, Pinecone,
        Next.js, Shadcn UI, Clerk and more.
      </p>
      {/* Let the button act as a link */}
      <Button size="lg" asChild>
        <Link href="/notes">Open</Link>
        
      </Button>
    </main>
  );
}

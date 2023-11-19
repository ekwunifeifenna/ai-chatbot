"use client";
import Link from "next/link";
import logo from "@/app/assets/image.jpeg";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddNoteDialog from "@/components/AddNoteDialog";

export default function NavBar() {
  const [showAddNoteDialog, setShowAddNoteDialog] = useState(false);

  return (
    <>
      <div className="p-4 shadow">
        {/* div for the logo image and title */}
        <div className="m-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 ">
          {/* The image and title */}
          <Link href="/notes" className="flex items-center gap-1">
            <Image src={logo} alt="ai chatbot logo" width={40} height={40} />
            <span className="font-bold">AI CHATBOT</span>
          </Link>

          {/* The user icon button */}
          <div className="flex items-center gap-2">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: { avatarBox: { width: "2.5rem", height: "2.5rem" } },
              }}
            />

            {/* Add notes button */}
            <Button onClick={() => setShowAddNoteDialog(true)}>
              <Plus size={20} className="mr-2" />
              Add Note
            </Button>
          </div>
        </div>
      </div>
      {showAddNoteDialog && <AddNoteDialog open = {showAddNoteDialog} setOpen={setShowAddNoteDialog}/>}
    </>
  );
}

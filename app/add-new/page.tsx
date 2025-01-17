import { auth } from "@/auth"
import { redirect } from "next/navigation";

export default async function AddNew() {
    const session = await auth();

    if( !session?.user ) {
        redirect('/sign-in')
    }
 
    return(
        <div className="flex h-full items-center justify-center flex-col gap-2">
            <h1 className="text-3xl">AddNew</h1>
        </div>
    )
}
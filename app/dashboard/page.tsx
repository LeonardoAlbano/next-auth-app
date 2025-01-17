import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function Dashboard() {
    const session = await auth();

    if( !session?.user ) {
        redirect('/sign-in')
    }

    return(
        <div className="flex h-full items-center justify-center flex-col gap-2">
            <h1 className="text-3xl">Dashboard</h1>
            <p className="text-2xl">{ session.user.email } </p>
        </div>
    )
}
import Link from "next/link";

export default function NavBar() {
    return(
        <nav className="border-b border-gray-300 bg-background w-full flex items-center">
            <div className="flex w-full items-center justify-between my-4">
                <Link href={'/'} className="font-bold">Home</Link>
            
            <div className="flex items-center gap-x-5">
                <Link href={"/dashboard"}>Dashboard</Link>
                <Link href={"/add-new"}>Add New</Link>

            </div>

            <div className="flex items-center gap-x-5">
                <Link href={"/sign-in"}>
                    <div className="bg-indigo-600 text-white px-4 py-2 rounded-md">
                        Sign In
                    </div>
                </Link>
            </div>
            </div>

        </nav>
    )
}
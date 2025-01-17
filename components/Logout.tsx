'use client'

import { Logout } from "@/actions/auth"

export default function LogoutButton() {
    return(
        <div onClick={() => Logout()} className="bg-gray-600 text-white text-sm px-4 py-2 rounded-md cursor-pointer">
            Logout
        </div>
    )
}
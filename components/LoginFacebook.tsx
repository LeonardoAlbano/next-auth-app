'use client'

import { Login } from "@/actions/auth";
import { Facebook } from "lucide-react";

export default function LoginFacebook() {
    return(
        <div onClick={() => Login('facebook')} className="w-full gap-4 hover:cursor-pointer mt-6 h-12 bg-blue-700 rounded-md p-4 flex items-center justify-center">
            <Facebook size={24} className="text-white" />
            <p className="text-white">Sign in with Facebook</p>

        </div>
    )
}
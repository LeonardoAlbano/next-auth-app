import { Github } from "lucide-react";

export default function LoginGithub() {
    return(
        <div className="w-full gap-4 hover:cursor-pointer mt-6 h-12 bg-slate-700 rounded-md p-4 flex items-center justify-center">
            <Github size={24} className="text-white" />
            <p className="text-white">Sign in with Github</p>

        </div>
    )
}
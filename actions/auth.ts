'use server'

import { signIn, signOut } from "@/auth";
import { revalidatePath } from "next/cache";

export async function Login(provider: string) {
    await signIn(provider, { redirectTo: '/' });
    revalidatePath('/');

}

export async function Logout() {
    await signOut({ redirectTo: '/' })
    revalidatePath('/')
}
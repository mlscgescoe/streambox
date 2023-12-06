import Nextauth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prismadb from "@/lib/prismadb";
import { compare } from 'bcrypt'

export default Nextauth ({
    providers: [
        Credentials({
            id: 'credentials',
            name: 'Credentials',
            credentials :{
                email: {
                    label: 'Email',
                    type: 'email'
                },
                password: {
                    label: 'Password',
                    type: 'password'
                }
            },
            async authorize (credentials) {
                if(!credentials?.email || !credentials?.password) {
                    throw new Error("Email Password Required");
                }

                const user = await prismadb.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                if (!user || !user.hpass) {
                    throw new Error("Email does not Exist");
                }

                const isCorrect = await compare(
                    credentials.password, 
                    user.hpass
                );
                
                if(!isCorrect) {
                    throw new Error("Incorrect Password")
                }

                return user;
            }
        })
    ],
    pages: {
        signIn: '/auth'
    },
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: 'jwt',
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET
    },
    secret: process.env.NEXTAUTH_SECRET
})
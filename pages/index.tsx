import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next"
import { getSession, signOut } from "next-auth/react"

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}

export default function Home() {

  const {data: user} = useCurrentUser();

  return (
    <>
      <h1 className="text-white text-2xl mx-8 my-3"><a href="/auth">New</a></h1>

      <p className="my-3 text-white text-xl mx-4">Logged in as: {user?.name}</p>

      <button 
        onClick={() => signOut()} 
        className="mt-4 mx-3 bg-red-600 p-3 text-white text-xl rounded-full px-5 hover:bg-red-700 transition-all duration-150">
          Sign out
      </button>
    </>
  )
}

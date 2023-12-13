import Banner from "@/components/Banner";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import useCurrentUser from "@/hooks/useCurrentUser";
import useList from "@/hooks/useList";
import { NextPageContext } from "next"
import { getSession, signOut } from "next-auth/react"
import React from "react";

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

  const { data: movies = [] } = useList();

  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <div className="mb-40">
        <MovieList title="Trending Now" data={movies} />
      </div>
    </React.Fragment>
  )
}

import Banner from "@/components/Banner";
import Modal from "@/components/Modal";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import useCurrentUser from "@/hooks/useCurrentUser";
import useFavouriteList from "@/hooks/useFavouriteList";
import useInfo from "@/hooks/useInfo";
import useList from "@/hooks/useList";
import { NextPageContext } from "next"
import { getSession, signOut } from "next-auth/react"
import React, { useState } from "react";

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
  const { data: favourites = [] } = useFavouriteList();
  const {isOpen, onClose} = useInfo();

  return (
    <React.Fragment>
      <Modal visible={isOpen} onClose={() => {onClose}} />
      <Navbar />
      <Banner />
      <div className="mb-40">
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="Favourites" data={favourites} />
      </div>
    </React.Fragment>
  )
}

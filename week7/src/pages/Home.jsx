import React from "react";
import Header from "components/home/Header";
import LetterCards from "components/home/LetterCard";
import PasswordModal from "components/home/PasswordModal";

function Home() {
  return (
    <>
      <Header />
      <LetterCards />
      <PasswordModal />
    </>
  );
}

export default Home;

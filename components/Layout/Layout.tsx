import React from "react";
import Head from "next/head";
import Header from "../Header/Header";

interface BodyProps {
  children?: any;
  title?: string;
}

const Layout: React.FC<BodyProps> = ({ children, title = "Node Guardians" }) => {

  return (
    <>
      <Head>
				<title>{title}</title>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Lato&display=swap" rel="stylesheet" />
				<meta name='description' content='Node Guardians frontend' />
			</Head>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default Layout;

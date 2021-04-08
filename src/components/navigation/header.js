import React from "react"
import Navbar from "./navbar"

export default function Header() {
  return (
    <header>
      <nav style={{ marginBottom: 60 }}>
        <Navbar />
      </nav>
    </header>
  );
}
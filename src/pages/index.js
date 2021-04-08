import { useEffect } from "react"
import { navigate } from 'gatsby'

export default function Home() {
  useEffect(() => {
    navigate('/home');
  }, []);

  return null
}
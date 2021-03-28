import { useEffect } from "react"
import { navigate } from 'gatsby'

export default function Home() {
  useEffect(() => {
    navigate('/Home');
  }, []);

  return null
}
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const authenticated = false;
  const route = useRouter();

  useEffect(() => {
    if (!authenticated) {
      route.push('/login')
    }
  }, [authenticated, route])

  return null
}

export default Home

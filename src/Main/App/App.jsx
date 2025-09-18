import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import {  useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/HomePage/Home.jsx'
import About from './pages/AboutPage/About.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'

function AnimatedRoutes({ links }) {
  const location = useLocation()
  const prevIndexRef = useRef(0)
  const currentIndex = links.findIndex(link => link.to === location.pathname)
  const direction = currentIndex >= prevIndexRef.current ? 1 : -1
  prevIndexRef.current = currentIndex

  const pageVariants = {
    initial: (dir) => ({ x: 300 * dir, opacity: 0 }),
    animate: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: -300 * dir, opacity: 0 })
  }

  const pageTransition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.2
  }

  return (
    <AnimatePresence mode='wait' initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              custom={direction}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
              style={{ position: 'absolute', width: '100%' }}
            >
              <Home colorUI={{ main: '#37c019ff', light: '#9ddf9a' }} />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              custom={direction}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
              style={{ position: 'absolute', width: '100%' }}
            >
              <About colorUI={{ main: '#000dffff', light: '#9a9cdfff' }} />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  const links = [
        { label: 'Home', to: '/' },
        { label: 'About', to: '/about' },
        { label: 'Projects', to: '/projects' },
        { label: 'Skills', to: '/skills' },
        { label: 'Contact', to: '/contact' }
  ]

  const colors = [
    { main: '#2fff00ff', light: '#9ddf9a' },
    { main: '#000dffff', light: '#9a9cdfff' },
    { main: '#e5ff00ff', light: '#d4df9aff' },
    { main: '#ff9500ff', light: '#df9a9aff' },
    { main: '#ff0000ff', light: '#df9a9aff' },
  ]


  return (
    <Router>
      <Navbar 
        links={links}
        colors={colors}
        initialIndex={0} />
        <AnimatedRoutes links={links} />
    </Router>
  )
}

import '@/styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {

  const router = useRouter()

  return <AnimatePresence mode="wait">
    <motion.div
      key={router.route}
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0
      }}
      transition={{
        duration: 0.75
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  </AnimatePresence>

}

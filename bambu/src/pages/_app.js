import '@/styles/globals.css'
import Navbar from '@/Components/NavBar/navBar'
import Footer from '@/Components/Footer/footer'


export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

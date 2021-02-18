import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>Lorem Ipsum</p>
      <p>Lorem Ipsum</p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
      <Footer />
    </div>
  )
}

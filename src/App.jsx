
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Feature } from './pages/Feature'
import { Pricing } from './pages/Pricing'
import { BLog } from './pages/Blog'
import { Header } from './compontents/Header'
import { Error } from './pages/404'
import { Hero } from './compontents/Hero'
import { Brand } from './compontents/Brand'
import { Suscription } from './compontents/Suscription'
import { Mertic } from './compontents/Mertic'
import { Betchmarks } from './compontents/Betchmarks'
import { Yearly } from './compontents/Yearly'
import { Pricingpage } from './compontents/Pricingpage'


function App() {


  return (

    <>
      <Header />
      <Hero />
      <Brand />
      <Suscription />
      <Mertic/>
      <Betchmarks/>
      <Yearly/>
      <Pricingpage/>
      <Routes>
        <Route path="/" element={<Feature />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<BLog />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </>




  )
}

export default App

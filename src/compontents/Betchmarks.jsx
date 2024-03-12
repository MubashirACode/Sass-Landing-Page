import camera from '../assets/images/Camera.png'
import Card from '../assets/images/Card.png'
import calculator from '../assets/images/Calculator.png'

export const Betchmarks = ()=>{
    return(
        <>
       <section className='flex flex-col md:flex-row'>

<div className='md:w-1/3 p-4'>
  <div className='text-center'>
    <img src={Card} alt="" className='mx-auto mb-4' />
    <h3 className='text-lg font-semibold'>Benchmarks</h3>
    <p>See how you stack up against comparable companies in similar stages.</p>
  </div>
</div>

<div className='md:w-1/3 p-4'>
  <div className='text-center'>
    <img src={calculator} alt="" className='mx-auto mb-4' />
    <h3 className='text-lg font-semibold'>Pricing Audit</h3>
    <p>Benchmark the health of your monetization and pricing strategy.</p>
  </div>
</div>

<div className='md:w-1/3 p-4'>
  <div className='text-center'>
    <img src={camera} alt="" className='mx-auto mb-4' />
    <h3 className='text-lg font-semibold'>Retention Audit</h3>
    <p>Audit where revenue leakage exists and where you can increase retention.</p>
  </div>
</div>

</section>

        </>
    )
}
import group from '../assets/images/Group.png'
import group1 from '../assets/images/Group1.png'
import group2 from '../assets/images/Group2.png'
import group3 from '../assets/images/Group3.png'
import group4 from '../assets/images/Group4.png'

export const Brand = () => {
    return (
        <>
            <section className='flex flex-col justify-center items-center gap-[90px] my-16 py-[61px]  md:flex-row '>
                <div className=' w-[150px] ' ><img src={group} alt="" /></div>
                <div className=' w-[150px] ' ><img src={group1} alt="" /></div>
                <div className=' w-[150px] ' ><img src={group2} alt="" /></div>
                <div className=' w-[150px]' ><img src={group3} alt="" /></div>
                <div className='w-[150px]'><img src={group4} alt="" /></div>
            </section>

        </>
    )
}
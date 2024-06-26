import people from './Images/Section3.png'
import round_logo from './Images/Section2.png'
export default function Section3(){
  return(
    <>
    <div className=" bg-custom-teal w-full   h-auto relative rounded-xl">
      <div className='  mt-10'>
        <h2 className="font-bold text-3xl text-white pt-4 sm:ml-20 w-full ">OUR VALUE ADDING ROADMAP <br/> (HESS MANDATE)</h2>
        <hr className='  font-extrabold border-t-4 bg-custom-yellow mb-4 w-60 sm:ml-20' />
      </div>
      
      <img className='absolute -right-20  top-3 hidden md:block ' src={round_logo}alt="logo"/>
      <div className=' flex-row md:pl-20 h-full  md:pr-20 py-16 grid md:flex md:flex-row"'>
        <div className="w-full mt-20 -mr-10 z-10 bg-gray-800 text-white justify-start par h-auto  pb-3 md:w-1/2 lg:w-1/2">
          <h3 className='font-bold mb-5 pt-10 px-10'>Healthy communities:</h3>
          <p className='px-10 '> We believe when our communities are healthy and Eco-friendly, 
            people thrive. Consequently, often many of the services that keep people healthy are 
            difficult to access for the people who need them most. We will facilitate enabling
            environments to promote creativity, innovation and collaboration for healthcare causes and objectives.
            We will ensure that through our community networks every Hungry Citizen within
            our reach gets Food Assistance and the Homeless get a clean living environment with access to disease prevention medicine.
          </p>
        </div>
        <div className="   md:w-1/2 mt-0  ">
          <img className='md:w-full  people' src={people} alt="people"/>
        </div>
      </div>
    </div>
    </>
  )
}
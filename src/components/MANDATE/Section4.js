import Partners from "./Partners"
export default function Section4(){
  return(
    <>
    
    <div>
    <h1 className='font-extrabold text-3xl text-center' >Our Partners</h1>
    </div>
    <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {Partners.map((partner, index) => (
        <div key={index} className="  flex flex-col items-center">
          <img src={partner.logo} alt='our_partners' className="w-36  " />
        </div>
      ))}
    </div>
    </>
  )
}
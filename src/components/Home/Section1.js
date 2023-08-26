import './Home.css'
import { Link } from 'react-router-dom';
export default function Section1() {
  

  return (
    <div className='Top-main w-full '>
      <div className='float-right w-full mt-20 md:w-full lg:w-1/2 xl:w-1/2 text-white p-20 flex flex-col'>
        <h1 className='mb-10 text-2xl text-center font-bold'>KINDLEGATE <br/> FOUNDATION</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. 
          Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero,
          sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. 
        </p>
        <Link to="/GET_INVOLVED/Get_Involved">
          <button className=' blue text-black rounded-full h-12 mt-10 mb-10 w-full font-bold'>GET INVOLVED</button>
        </Link>
        
        <button className=' blue text-black rounded-full h-12 font-bold '>KINDLEGATE CAUSE SHOP</button>
      </div>
    </div>
      
    
  );
}

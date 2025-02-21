import image2 from '../../assets/image/Rectangle.png';

export default function Herosection() {
  return (
    <div className='ml-70' style={{ backgroundImage: `url(${image2})`, backgroundSize: 'cover', backgroundPosition: 'center', height:'600px', width:'1320px' }}>
      <h1 className='text-white text-center text-5xl pt-36 pl-60 pr-60 font-bold'>Discover an exceptional cooking class tailored for you!</h1>
      <p className='text-white pl-65 pr-70 pt-10'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
   <div className='pt-10 mr-6 text-center ml-10'>
   <button className='bg-[#0BE58A] border rounded-full font-bold p-4'>Explore Now</button>
   <button className='text-white border rounded-full font-bold p-4 ml-7'>Our Feedback</button>
   </div>
    </div>
  );
}


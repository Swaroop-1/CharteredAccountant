
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>

      {/* main section start*/}
      <div className=" py-20 px-8 text-center border-b-2">
        <h1 className="home-main text-4xl font-bold text-red-550 mb-4 ">Find Your Perfect Chartered Accountant</h1>
        <p className="home-side text-lg mb-6">
        Discover trusted profiles of skilled Chartered Accountants, expertly suited to address your financial, tax, and auditing requirements.</p>
        <NavLink to="/account" className=" px-6 py-2 font-medium rounded-md hover:bg-blue-500">
          Search Now
        </NavLink>
      </div>
      {/* main section end */}

       

      {/* Highlights   */}
      <div className="py-10 px-8  bg-opacity-40">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className='border-2 p-4 shadow-lg rounded-lg bg-blue bg-opacity-80 transform transition-transform hover:scale-105 hover:shadow-2xl'>
            <div className="bg-blue-500 text-blue w-12 h-12 mx-auto rounded-full flex items-center justify-center">1</div>
            <h3 className="text-lg font-semibold mt-4">Search Accountants</h3>
            <p className="text-gray-600">Utilize our enhanced search bar to discover skilled professionals.</p>
          </div>
          <div className='border-2 p-4 shadow-lg rounded-lg bg-blue bg-opacity-80 transform transition-transform hover:scale-105 hover:shadow-2xl'>
            <div className="bg-blue-500 text-white w-12 h-12 mx-auto rounded-full flex items-center justify-center">2</div>
            <h3 className="text-lg font-semibold mt-4">View Profiles</h3>
            <p className="text-gray-600">Explore comprehensive profiles and connect with professionals who meet your needs.</p>
          </div>
          <div className='border-2 p-4 shadow-lg rounded-lg  bg-opacity-80 transform transition-transform hover:scale-105 hover:shadow-2xl'>
            <div className="bg-blue-500 text-white w-12 h-12 mx-auto rounded-full flex items-center justify-center">3</div>
            <h3 className="text-lg font-semibold mt-4">Contact & Collaborate</h3>
            <p className="text-gray-600">Connect instantly with chartered accountants and collaborate seamlessly.</p>
          </div>
        </div>
      </div>
      {/* Highlights  */}

      {/* user responses start */}
      <div className="bg-opacity-40 py-10 px-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">Users responses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-4 border rounded-lg   bg-opacity-70">
            <p className="italic text-gray-600">"This platform made it easy and fast to find the perfect accountant for my startup!"</p>
            <h4 className="font-semibold mt-4">— Gayathri</h4>
          </div>
          <div className="text-center p-4 border rounded-lg   bg-opacity-70">
            <p className="italic text-gray-600">"Highly recommended! I found professional and knowledgeable accountants with ease."</p>
            <h4 className="font-semibold mt-4">— Raja</h4>
          </div>
          <div className="text-center p-4 border rounded-lg   bg-opacity-70">
            <p className="italic text-gray-600">"Amazing user experience and outstanding customer support. Truly exceptional!"</p>
            <h4 className="font-semibold mt-4">— Devesh</h4>
          </div>
        </div>
      </div>
       {/* Users Say section end */}

      {/* footer section start */}
      <Footer/>
      {/* footer section end */}
    </div>
  )
}

export default HomePage;
import React, { useEffect, useState } from 'react'
import im from './logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setEmail } from './reddx/Action';
// import { useForm } from "react-hook-form"
import { Link } from 'react-scroll'
import { IoCallSharp, IoMailSharp, IoLocation, IoChevronUpCircleSharp, IoListSharp } from "react-icons/io5";
// import { useDispatch } from 'react-redux';
import pic1 from './bg.png.jpeg'
// import ValidateForm from "form-validation-react"
import Validation from './Validation';


function App() {
  const [errors, setErrors] = useState({})
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    message: "",
  })

  const dispatch = useDispatch();
  const { username, email } = useSelector((state) => state);
  // const data ={username , email}

  const handleUsernameChange = (e) => {
    dispatch(setUsername(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };


  // const dispatch = useDispatch();
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newData = {
  //     id: Math.floor(Math.random() * 100),
  //     name: name,
  //     email: email,
  //     message: message
  //   }
  //   console.log(newData)
  //   // dispatch({type:"SUMBIT", payload : newData})
  // }

  function handleInput(event){
      const newObj = {...userInfo, [event.target.id]: event.target.value}
      setUserInfo(newObj)
  }

  function handleValidation(event){
      event.preventDefault();
      setErrors(Validation(username));
      setErrors(Validation(email))
      console.log(username)
      console.log(email)
  // localStorage.setItem('data', data);
      
     }

  useEffect(() => {
    const data = localStorage.getItem('userInfo');
    if (data) {
      setUserInfo(JSON.parse(data));
    }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('userInfo', JSON.stringify(userInfo))
  // }, [userInfo]);
  // function onSubmit(data){
  //    data.preventDefault();
  // }
  // console.log(errors);
  // console.log(userInfo)

  const Navbar = [{
    id: 1,
    title: "Home"
  },
  {
    id: 2,
    title: "About"
  },
  {
    id: 3,
    title: "Contact"
  },
  ]
  const [isOpen, setisOpen] = useState(false)
  // function handle(e) {
  //   const newdata = { ...userInfo }
  //   newdata[e.target.id] = e.target.value
  //   setUserInfo(newdata)
  //   console.log(newdata)
  // }

  return (
    <html className="!scroll-smooth">
      <body className='bg-cyan-100'>
        <header className="bg-cyan-700 w-full fixed text-white overflow-hidden z-10">
          <nav className="flex justify-between flex-row">
            <div className="flex justify-between flex-row">
              <img className="pt-2 w-12 h-12" src={im} alt="Logo" />
              <h2 className="p-5 font-bold text-2xl tracking-wide">Jungle Tours</h2>
            </div>
            <div className='absolute z-10 right-10 top-5  visible md:hidden'>
              <button onClick={()=> setisOpen((prev)=>!prev)}><IoListSharp /></button>
            </div>
            

            <ul className="flex justify-around flex-row p-5 invisible md:visible">
              {Navbar.map(nav => (
                <li className="text-center pl-10">
                  <Link to={nav.id} smooth={true} offset={-30} duration={500} className="cursor-pointer
                 hover:text-yellow underline underline-offset-0 hover:underline-offset-4">
                    {nav.title}</Link>
                </li>
              ))}
            </ul>

          </nav>

        </header>

        {isOpen && <div className='fixed p-1 md:p-2 z-10 right-10 top-10 cursor-pointer bg-cyan-600 
        flex justify-between flex-col rounded-lg
             transition ease-in-out delay-150'>
              {Navbar.map(nav => (
                <buttton className=''>
                 
                  <Link to={nav.id} smooth={true} offset={-30} duration={500} className="cursor-pointer
                 hover:text-yellow underline-offset-0 hover:underline-offset-4"
                 onClick={()=> setisOpen(false)}>
                    {nav.title}</Link>
                  </buttton>
              ))}
              </div>}


        <div id="1" className="p-8 pt-20 h-full w-full bg-cover bg-center">
          <div className="flex w-full  justify-center items-center">

            <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-cyan-700 w-full max-w-4xl p-8 shadow-lg text-white overflow-hidden">
              <div className="flex flex-col space-y-8 justify-between">
                <div>
                  <h1 className="font-bold text-4xl tracking-wide">
                    Jungle Tours Welcomes You!
                  </h1>
                  <p className="pt-2 pb-2 text-cyan-100 text-sm">
                    Explore India with tours and trek experts from JungleTours
                  </p>
                </div>
                <div className="flex flex-col space-y-6">
                  <div className="inline-flex space-x-2 items center">
                    <span className="text-cyan-300 text-xl"><IoCallSharp /></span>
                    <span>(+91) 123 456 8976 </span>
                  </div>
                  <div className="inline-flex space-x-2 items center">
                    <span className="text-cyan-300 text-xl"><IoMailSharp /></span>
                    <span>jungletourstreks@gmail.com </span>
                  </div>
                  <div className="inline-flex space-x-2 items center">
                    <span className="text-cyan-300 text-xl"><IoLocation /></span>
                    <span>JP nagar 4th block </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full invisible 
                md:visible -right-28 -top-28">

                </div>
                <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-28">

                </div>

                <div className="relative z-9 bg-white rounded-xl shadow-lg p-8 text-gray">
                  <form
                    
                    onSubmit={handleValidation}
                    className="flex flex-col space-y-4">
                    <div>
                      <label

                        className="text-sm">Your name</label>

                      <input type="text"
                        onChange={handleUsernameChange}
                        id="name"
                        value={username}
                        placeholder="Your name"
                        className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"></input>
                        {errors.name && <p className='text-pink'>{errors.name}</p>}
                    </div>
                    <div>
                      <label

                        className="text-sm">Email Address</label>


                      <input type="email"
                        onChange={handleEmailChange}
                        id="email"
                        value={email}
                        placeholder="Email Address"
                        className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                      // ref={register("Email", {
                      //   required: true
                      // })}
                      ></input>
                      {errors.email && <p className='text-pink'>{errors.email}</p>}
                    </div>
                    <div>
                      <label

                        className="text-sm">Drop A Message About your Dream Place</label>


                      <textarea type="text"
                        onChange={handleInput}
                        id="message"
                        value={userInfo.message}
                        placeholder="Message"
                        rows="4"
                        className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"></textarea>
                    </div>
                    <button 
                     className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                      Submit
                    </button>




                  </form>

                </div>
              </div>
            </div>
          </div>




        </div>



        <div id="2" className="p-8 h-full w-full bg-cover bg-center">
          <div className='flex w-full  justify-center items-center '>
            <div className='flex flex-col p-8 bg-teal-400 w-full max-w-4xl rounded-lg overflow-hidden'>
              <div className='font-bold pl-20 pr-20 pb-20 pt-2 md:pl-2  text-white text-4xl tracking-wide'>
                <h1>
                  Know About Us!
                </h1>

              </div>
              <div className='flex flex-col  md:flex-row justify-center items-center text-teal-700'>

                <div className='relative '>
                  <div className="absolute z-0 w-40 invisible md:visible h-40 bg-cyan-700 rounded-lg -left-28 -top-20">

                  </div>
                  <div className="absolute z-0 w-40 h-40 bg-teal-300 md:bg-cyan-700 rounded-lg -right-28 -bottom-28">

                  </div>
                  <div className='relative z-9 w-100 md:w-30 h-50 md:h-30 rounded-full shadow-xl'>
                    <img src={pic1} alt='/pic1'></img>
                  </div>
                </div>
                <div className='relative z-9 p-8 '>
                  <p>We are the India's number <span className='text-2xl font-bold'>1</span>  tour and trek specialist.
                    We ensure safe and secure journey with the help of experts in travelling.
                    We do activities on the scheduled time without any delay.

                  </p>
                </div>


              </div>
            </div>


          </div>

          <div>

          </div>


        </div>
        <div>
          <div className='fixed w-5 md:w-8 p-1 md:p-2 -z-1 right-0 bottom-20 cursor-pointer rounded-sm bg-white'>

            <Link to={Navbar.id='1'} smooth={true} offset={2} duration={500} className="text-gray-dark cursor-pointer
       hover:text-yellow underline-offset-0 hover:underline-offset-4">
              <IoChevronUpCircleSharp /><p className='invisible md:visible' >Top</p> </Link>
          </div>
        </div>

        <div id="3" className="p-8 h-full w-full bg-cover bg-center">
          <div className='flex w-full  justify-center items-center '>
            <div className='flex flex-col p-8 bg-cyan-600 w-full max-w-4xl rounded-lg overflow-hidden'>
              <div className='font-bold text-white text-4xl tracking-wide'>
                <h1>
                  Contact Us!
                </h1>

              </div>
              <div className='flex flex-col  md:flex-row justify-center items-center md:items-start text-cyan-200'>
                <div>
                  <p>We are already at the top list of  <span className='text-bold text-2xl'> Best Touring Agency in India</span>
                    with our four branches. Please be free to visit our locations.

                  </p>
                </div>
                <div className="flex flex-col space-y-6">
                  <div className="inline-flex space-x-2 items-center">
                    <span className="text-cyan-300 text-xl"><IoCallSharp /></span>
                    <span>(+91) 123 456 8976 </span>
                  </div>
                  <div className="inline-flex space-x-2 items-center">
                    <span className="text-cyan-300 text-xl"><IoMailSharp /></span>
                    <span>jungletourstreks@gmail.com </span>
                  </div>
                  <div className="inline-flex space-x-2 items-center">
                    <span className="text-cyan-300 text-xl"><IoLocation /></span>
                    <span>JP nagar 4th block </span>
                  </div>
                </div>
                {/* <div className='relative'>
                  <div className="absolute z-0 w-40 invisible md:visible h-40 bg-cyan-700 rounded-lg -right-28 -top-20">

                  </div>
                  <div className="absolute z-0 w-40 h-40 bg-cyan-700 rounded-lg -left-28 -bottom-28">

                  </div>
                  <div className='relative z-9 w-100 md:w-30 h-50 md:h-30 rounded-full shadow-xl'>
                    <img src={pic1} alt='/pic1'></img>
                  </div>
                </div> */}


              </div>
              <div className='pt-10 text-white '>
                <h1>Our locations</h1>
              </div>
              <div className=''>

                <div className="inline-flex space-x-2 items-center">
                  <span className="text-teal-300 text-xl"><IoLocation /></span>
                  <span className='text-white'>JP nagar 4th block, Bangalore </span>
                </div><br></br>
                <div className="inline-flex space-x-2 items-center">
                  <span className="text-teal-300 text-xl"><IoLocation /></span>
                  <span className='text-white'>MG road, Chennai </span>
                </div><br></br>
                <div className="inline-flex space-x-2 items-center">
                  <span className="text-teal-300 text-xl"><IoLocation /></span>
                  <span className='text-white'>Gachibowli, Hyderabad </span>
                </div>

              </div>
            </div>


          </div>

          <div>

          </div>


        </div>

        <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
      </body>


    </html>
  )
}

export default App
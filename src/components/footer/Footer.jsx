import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='w-full h-[75vh] md:h-[55vh] mt-1 text-sm bg-cover bg-center bg-no-repeat text-white' style={{ backgroundImage: `url(${import.meta.env.BASE_URL}public/assets/images/wbg3.avif)` }}>
      <div className='bg-black/40 backdrop-blur-sm w-full h-full'>
        <div className='block container w-full h-full m-auto mt-2 max-w-6xl p-1 md:p-2 '>
          <div className='block md:flex h-[90%] md:h-[80%] border-b-2 border-orange-400'>
            <div className='flex flex-col w-full md:w-[37%] md:h-[75%] '>
              <div className='flex flex-col'>
                <span className='flex font-bold text-left w-full py-3 text-lg text-orange-400'>Gethsemane Life church</span>
                <p className='flex text-sm md:my-2'>
                  For the word of God is living and active. Sharper than any double-edged sword, it penetrates even to dividing soul and spirit, joints and marrow; it judges the thoughts and attitudes..
                </p>
              </div>

              <div className='flex flex-col mt-3 md:mt-auto w-full '>
                <span className='font-bold flex text-sm text-orange-400 '><MdLocationPin size={25} /> Locations</span>
                <ul className='mt-2 px-1'>
                  <li className='m-0.5 mt-0.5'><a className='hover:font-bold' href='#'>Kitengela</a></li>
                  <li className='m-0.5 mt-0.5'><a className='hover:font-bold' href='#'>Isinya</a></li>
                  <li className='m-0.5 mt-0.5'><a className='hover:font-bold' href='#'>Kisii</a></li>
                </ul>
              </div>
            </div>

            <div className='block md:flex w-full md:w-[60%] md:ms-auto  h-[60%] md:h-[75%] md:rounded-e-xl '>
              <div className='w-full h-[45%] md:h-full py-3 flex md:block justify-between '>
                <div className='block'>
                  <span className='font-bold text-sm  text-orange-400 '>About Gethsemane</span>
                  <ul className='mt-2 px-1'>
                    <li className='m-0.5 mt-0.5'><a className='hover:font-bold' href='#'>About us</a></li>
                    <li className='m-0.5 mt-0.5'><a className='hover:font-bold' href='#'>Our History</a></li>
                    <li className='m-0.5 mt-0.5'><a className='hover:font-bold' href='#'>Leadership</a></li>
                    <li className='m-0.5 mt-0.5'><a className='hover:font-bold' href='#'>What We Believe</a></li>
                    <li className='m-0.5 mt-0.5'><a className='hover:font-bold' href='#'>FAQs</a></li>
                  </ul>
                </div>
              </div>
              <div className='h-[55%] md:h-full w-full py-1 md:py-3  '>
                <span className='font-bold text-sm md:pt-2 text-orange-400'>Quick links</span>
                <ul className=' px-1'>
                  <li className='m-0.5 mt-0.5'><a className='hover:font-bold' href='#'>Home</a></li>
                  <li className='m-0.5 mt-0.5'><a className='hover:font-bold' href='#'>About us</a></li>
                  <li className='m-0.5 mt-0.5'><a className='hover:font-bold' href='#'>Ministries</a></li>
                  <li className='m-0.5 mt-0.5'><a className='hover:font-bold' href='#'>Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className='flex flex-col my-1 md:my-6 mx-auto'>
            <ul className='flex mt-2 mx-auto '>
              <li className='m-1 hover:text-blue-600'><a href=''><BsFacebook size={25} /></a></li>
              <li className='m-1 hover:text-pink-400 '><a href=''><BsInstagram size={25} /></a></li>
              <li className='m-1 hover:text-blue-400'><a href=''><BsTwitter size={25} /></a></li>
              <li className='m-1 hover:text-green-600 '><a href=''><BsWhatsapp size={25} /></a></li>
            </ul>
            <span className=' mx-auto text-sm flex'><AiOutlineCopyrightCircle size={20} /> Gethsemane life church ke</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

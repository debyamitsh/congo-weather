import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import { useState,useEffect } from 'react';
import Link from 'next/link'

export default function Home() {
  const [province,setProvince] = useState([]);
  const [state, setstate] = useState("");
  useEffect(() => {
      getProvince();
  },[])
  

  const getProvince = async () => {
    await axios.get("http://dataservice.accuweather.com/locations/v1/adminareas/?apikey=z9USGLa97qISbyghGyMZYw8OefotzvsU&countryCode=CD")
    .then((res) => setProvince(res.data));
  }
  {/* <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <p class="p-4">Countries</p>
        <div class="border-b-2 m-0"></div>
        <p class="p-4">Select Country: </p>
        <div class="mr-8 ml-4">
          <div class="relative">
              <button class="bg-teal p-3 rounded text-white shadow-inner w-full">
                <span class="float-left">Show options</span>

                <svg class="h-4 float-right fill-current text-white" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
                  <g>
                    <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
                  </g>
                </svg>
              </button>
              <div class="rounded shadow-md my-2 relative pin-t pin-l">
                  <ul class="list-reset">
                    <li class="p-2"><input class="border-2 rounded h-8 w-full"><br></li>
                    <li><p class="p-2 block text-black hover:bg-grey-light cursor-pointer">
                        USA
                        <svg class="float-right" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4z"/></svg>
                    </p></li>
                    <li><p class="p-2 block text-black hover:bg-grey-light cursor-pointer">Montenegro</p></li>
                  </ul>
              </div>
          </div>
        </div>
    </div> */}
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <p className="p-4">Provinces</p>
      <div className="border-b-2 m-0">
        <p class="p-4">Selectionnez une province: </p>
        <div className="mr-8 ml-4">
          <div className="relative">
              <button className="bg-teal p-3 rounded text-white shadow-inner w-full">
                <span className="float-left">Show options</span>
              </button>
              <div className="rounded shadow-md my-2 relative pin-t pin-l">
                <ul className="list-reset">
                  {province.map((province,index) => (
                    <li key={index}>
                    <Link  href={`${state}`}>
                      <input type="submit" onClick={(e) => setstate(e.target.value)} className="p-2 bg-white block text-black hover:bg-grey-light cursor-pointer" value={province.LocalizedName}/>    
                    </Link>
                  </li>
                  ))}
                </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

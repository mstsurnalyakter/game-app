import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'

const Home = () => {
  return (
    <div className="px-20 space-y-10">
      <Header />
      <Banner />
      <div className="flex gap-2 items-center">
        <img
          src="https://i.postimg.cc/d0nn2nvP/bell-svgrepo-com-1.png"
          alt=""
          className="w-7"
        />
        <h2 className="text-2xl text-[#00A6FF]">
          ¡FELICIDADES artxxxxipa! GANADOR DESTACADO{" "}
        </h2>
      </div>
    </div>
  );
}

export default Home
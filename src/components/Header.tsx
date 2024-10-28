import React from 'react'

const Header = () => {
  return (
    <nav className="flex justify-between py-5">
      <div className="flex gap-2 items-center justify-center">
        <img src="https://i.postimg.cc/Nf8MCXHj/Vector.png" alt="vector" />
        <h1 className="text-[#00A6FF] font-extrabold text-3xl">FUN88</h1>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <img src="https://i.postimg.cc/6QKQNLDP/Vector-1.png" alt="" />
        <b className="text-[#00A6FF] font-bold text-xl">$1990.6</b>
        <div className="border h-5 border-[#00A6FF] "></div>
        <img src="https://i.postimg.cc/FR1DFcSy/profile.png" alt="" />
      </div>
    </nav>
  );
}

export default Header
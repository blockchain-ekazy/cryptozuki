import React from "react";
import "./Home.css";

import Img1 from "../Images/1.png";
import Img2 from "../Images/opensea.png";
import Img3 from "../Images/heading.png";
import Img4 from "../Images/metamask.png";
import Img5 from "../Images/c.png";
import Img6 from "../Images/object.png";

import MintBtn from './MintBtn'

export default function Home() {
  return (
    <div>
      <div className="container-fluid main">
        <div className="row pt-4">
          <div className="col-6 text-left">
            <img className="logo" src={Img1} />
          </div>
          <div className="col-2"></div>
          <div className="col-4 text-right">
            <i class="icon px-3 fa-brands fa-instagram"></i>
            <i class="icon px-3 fa-brands fa-twitter"></i>
            <i class="icon px-3 fa-brands fa-discord"></i>
            {/* <img className="opensea px-2" src={Img2} /> */}
          </div>
        </div>
        <hr className="w-100 line" />
        <hr className="w-100 line1" />
        <div className="container-fluid">
          <div className="row sec1 align-items-cente" >
            <div className="col-1"></div>
            <div className="col-md-6 text-left">
              <img className="heading" src={Img3} />
              <p className="pt-4">
                CryptoZuki is a 10,000 piece pixel art collection
                <br />
                on the Ethereum Blockchain. Paying reverence
                <br />
                to the original Azuki artwork, while
                <br /> establishing itself as an entirely new project,
                CryptoZuki is a blend of nostalgia, art, and
                <br /> utility
              </p>
              {/* <div className="row pt-5">
                <div className="col-3">
                  <button className="btn1">Connect</button>
                </div>
                <div className="col-9 text-left">
                  <img className="ico" src={Img4} />
                </div>
              </div> */}
              <div className="row ">
                <div className="col-10 text-center">
                  <MintBtn/>
                  {/* <button className="btn1">Connect</button> */}
                </div>
                <div className="col-12 text-left">
                  <img className="ico" src={Img5} />
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <h1 className="crypto">CRYPTOZUKI</h1>
              <img className="obj" src={Img6} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

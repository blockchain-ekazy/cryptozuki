import React from "react";
import "./Home.css";

import Img1 from "../Images/1.png";
import Img2 from "../Images/opensea.png";
import Img3 from "../Images/heading.png";
import Img4 from "../Images/metamask.png";
import Img5 from "../Images/c.png";
import Img6 from "../Images/object.png";

import MintBtn from "./MintBtn";

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
            {/* <i class="icon mx-3 fa-brands fa-instagram" style={{cursor:"pointer"}}></i> */}
            <a
              href="https://opensea.io/collection/crypto-zuki"
              style={{ cursor: "pointer" }}
              target={"_blank"}
            >
              <img className="opensea pr-3 pl-3 mb-3" src={Img2} />
            </a>
            <a href="https://twitter.com/CryptoZukiNFT" target={"_blank"}>

            <i
              class="icon mx-3 fa-brands fa-twitter"
              style={{ cursor: "pointer" }}
            ></i>
            </a>
            <i
              class="icon mx-3 fa-brands fa-discord"
              style={{ cursor: "pointer" }}
            ></i>
          </div>
        </div>
        <hr className="w-100 line" />
        <hr className="w-100 line1" />
        <div className="container-fluid">
          <div className="row sec1 align-items-cente">
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
                <div className="col-10 text-center pb-sm-5 mx-auto mx-sm-0">
                  <MintBtn />
                  {/* <button className="btn1">Connect</button> */}
                </div>
                {/* <div className="col-12 text-left">
                  <img className="ico" src={Img5} />
                </div> */}
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

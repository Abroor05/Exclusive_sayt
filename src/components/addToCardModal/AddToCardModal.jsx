import React, { useState } from "react";
import "./AddToCardModal.css";
import { useParams } from "react-router-dom";
import { HiOutlineXMark } from "react-icons/hi2";
import { oneProdactData } from "../../services/app";

function AddToCardModal({ setAddModal }) {
  const [modalData, setModalData] = useState([]);
  const [sanash, setSanash] = useState(0)

  const { id } = useParams();

  return (
    <>
      <div className="addCard">
        <div className="container">
          <div className="addModal">
            <button
              onClick={() => {
                setAddModal(false);
              }}
              className="xmark"
            >
              <HiOutlineXMark />
            </button>

            <div className="addImg">
              <img src="/imgs/card1.png" alt="" />
            </div>

            <div className="addInfos">
              <div className="modalInfo">
                <h3>Lorem ipsum dolor sit amet.</h3>

                <div className="colors">
                  <span>
                    {" "}
                    <label htmlFor="">qizil</label>
                    <div className="rang1 rang"></div>
                  </span>

                  <span>
                    <label htmlFor="">yashil</label>
                    <div className="rang2 rang"></div>
                  </span>
                </div>

                <div className="sizes"></div>

                <div className="modalCounts">
                    <button onClick={()=>{
                       if(sanash > 0) {
                         setSanash(sanash-1)
                       }
                    }} modalMinus>-</button> 
                    <h3 className="modalCount">{sanash}</h3>
                    <button onClick={()=>{
                         setSanash(sanash+1)
                    }}  className="modalPlas">+</button>
                </div>

                <div className="ModalPrice">
                  <h3>123000</h3>
                  <span>
                    <del>125000</del>
                  </span>
                </div>

                <button className="addModalBtn">Add to card</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddToCardModal;

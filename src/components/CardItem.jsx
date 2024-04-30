import React from "react";

const CardItem = ({storie}) => {

  // console.log(storie)

  const {Title,Image,Status} = storie

  // console.log(storie)

  return (
    < >
      <div className="card text-light text-center mx-2 py-2 my-2" style={{ width: " 15rem", background: "rgb(86,51,195)" , background : "linear-gradient(90deg, rgba(86,51,195,1) 0%, rgba(38,156,200,1) 63%, rgba(38,156,200,1) 100%)"}}>
        <img src={`https://ik.imagekit.io/dev24/${Image}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
           {Title}
          </p>
          <a href="#" className="btn btn-light rounded-pill w-100">
           {Status}
          </a>
        </div>
      </div>
     
    </>
  );
};

export default CardItem;

import React from 'react';
import image1 from "../image/img1.jpg";
import image2 from "../image/img2.jpg";
import image3 from "../image/img3.jpg";

export default function Crousal() {
    return (
        <div>
            <div className="slideshow-container">

<div className="mySlides fade">
  <div className="numbertext">1 / 3</div>
  <img src={image3} />
  <div className="text">Caption Text</div>
</div>

<div className="mySlides fade">
  <div className="numbertext">2 / 3</div>
  <img src={image1} />
  <div className="text">Caption Two</div>
</div>

<div className="mySlides fade">
  <div className="numbertext">3 / 3</div>
  <img src={image2} />
  <div className="text">Caption Three</div>
</div>

<a className="prev" onClick="plusSlides(-1)">❮</a>
<a className="next" onClick="plusSlides(1)">❯</a>

</div>
<br/>

<div >
  <span className="dot" onClick="currentSlide(1)"></span> 
  <span className="dot" onClick="currentSlide(2)"></span> 
  <span className="dot" onClick="currentSlide(3)"></span> 
</div>
        </div>
    )
}

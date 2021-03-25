import React from 'react'
class Boddy extends React.Component{
    render(){
        return(
            <div>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.pexels.com/photos/734013/pexels-photo-734013.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/161133/dove-bird-nature-peace-161133.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/4612714/pexels-photo-4612714.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>
        )
    }
}
export default Boddy
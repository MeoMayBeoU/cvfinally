import React from 'react';
import Portfolios1 from '../../../images/123381342_3393587427386293_6910245921504448774_n.png';
import Portfolios3 from '../../../images/123489186_1054682561638405_6529850133421287866_n.png';
import Portfolios2 from '../../../images/1233206721_1739972312847022_7589199077379471273_n.png';

export default function Portfolios() {
  return(
  
    <div class="row">

    <h6 className="mt-bottom">A  FEW PROJECTS</h6>
    <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
          <img src={Portfolios1}/>
          <span class="card-title">Project VilasMMO</span>
        </div>
        <div class="card-content">
          <p>Vilas MMO and support newbie make money in youtube , hago , tiktok ,...</p>
        </div>
        <div class="card-action">
          <a href="vilasnetwork.com">vilascompanies</a>
        </div>
      </div>
    </div>
    <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
          <img src={Portfolios2}/>
          <span class="card-title">Project Vilastool</span>
        </div>
        <div class="card-content">
          <p>Vilastool provides some tool support customers use facebook , auto reg clone , auto ads ,vvv</p>
        </div>
        <div class="card-action">
          <a href="vilastool.com">Vilastool</a>
        </div>
      </div>
    </div>
    <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
          <img src={Portfolios3}/>
          <span class="card-title">Blog VilasKitchen</span>
        </div>
        <div class="card-content">
          <p>vilaskitchen , outside working hours , customers need some hours of entertaiment , they can learn to cook , health or clean kitchen</p>
        </div>
        <div class="card-action">
          <a href="https://vilaskitchen.com">Vilaskitchen</a>
        </div>
      </div>
    </div>
    


  </div>
  
            
  )
}

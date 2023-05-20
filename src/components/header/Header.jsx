import React from 'react'
import './header.css'
import banner from '../../assets/GEARFI BANNER.png'
import chart from '../chart/Chart'




const Header = () => {

  return (
  <div class="hero-section">
    <img src={banner}/>
    <div className="heading">
      <h2>Buy Now Pay Later is here for NFTs!</h2>
      <p>Experience it seamlessly using GearFi</p>

      <a href='https://discord.com/invite/PJp2DbX64U'> 
        <button >Join Discord</button>
       </a>

      <a href='https://armilaadarshs-organization.gitbook.io/gearfi_litepaper/welcome-to-gear_fi/abstract'> 
        <button >Docs</button> 
      </a>
    </div>
            
</div>
  )
}

export default Header

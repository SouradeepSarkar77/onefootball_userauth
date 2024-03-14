import React from 'react'
import { Link } from "react-router-dom";
import './Footer.css'
export default function Footer() {
  return (
   <>
<div className='footer'>

<div className='footer_title'>Follow OneFootball</div>

<div className='follow_cards'>

<div className="card text-bg-light mb-3" style={{maxWidth: "8rem", borderRadius: '0px'}}>
  <div className="footer_icon"><img src='images\instagram.png' height={25} width={25}></img></div>
  <div className="card-body">
    <p className="card-title">Instagram</p>
    <p className="card-text">@OneFootball</p>
  </div>
</div>

<div className="card text-bg-light mb-3" style={{maxWidth: "8rem", borderRadius: '0px'}}>
  <div className="footer_icon"><img src='images\facebook (1).png' height={25} width={25}></img></div>
  <div className="card-body">
    <p className="card-title">Facebook</p>
    <p className="card-text">@OneFootball</p>
  </div>
</div>

<div className="card text-bg-light mb-3" style={{maxWidth: "8rem", borderRadius: '0px'}}>
  <div className="footer_icon"><img src='images\twitter.png' height={25} width={25}></img></div>
  <div className="card-body">
    <p className="card-title">Twitter</p>
    <p className="card-text">@OneFootball</p>
  </div>
</div>

<div className="card text-bg-light mb-3" style={{maxWidth: "8rem", borderRadius: '0px'}}>
  <div className="footer_icon"><img src='images\youtube.png' height={25} width={25}></img></div>
  <div className="card-body">
    <p className="card-title">YouTube</p>
    <p className="card-text">@OneFootball</p>
  </div>
</div>

<div className="card text-bg-light mb-3" style={{maxWidth: "8rem", borderRadius: '0px'}}>
  <div className="footer_icon"><img src='images\twitch.png' height={25} width={25}></img></div>
  <div className="card-body">
    <p className="card-title">Twitch</p>
    <p className="card-text">@OneFootball</p>
  </div>
</div>

<div className="card text-bg-light mb-3" style={{maxWidth: "8rem", borderRadius: '0px'}}>
  <div className="footer_icon"><img src='images\discord.png' height={25} width={25}></img></div>
  <div className="card-body">
    <p className="card-title">Discord</p>
    <p className="card-text">@OneFootball</p>
  </div>
</div>

</div>


<div className='footer_links'>

<div className='link_cards'>
<div>ABOUT US</div>

<div><Link to='' style={{textDecoration: 'none', color: '#7f8fa6'}}>Help Center</Link></div>
<div><Link to='' style={{textDecoration: 'none', color: '#7f8fa6'}}>Company</Link></div>
<div><Link to='' style={{textDecoration: 'none', color: '#7f8fa6'}}>Careers</Link></div>

</div>


<div className='link_cards'>
<div>PARTNER WITH US</div>

<div><Link to='' style={{textDecoration: 'none', color: '#7f8fa6'}}>Brand Solutions</Link></div>
<div><Link to='' style={{textDecoration: 'none', color: '#7f8fa6'}}>Sales</Link></div>
</div>

<div className='link_cards'>
<div>LEGAL</div>

<div><Link to='' style={{textDecoration: 'none', color: '#7f8fa6'}}>User Agrement</Link></div>
<div><Link to='' style={{textDecoration: 'none', color: '#7f8fa6'}}>Privacy Policy</Link></div>
<div><Link to='' style={{textDecoration: 'none', color: '#7f8fa6'}}>Licenses</Link></div>
</div>

<div className='link_cards'>
<div>MORE ONEFOOTBALL</div>

<div><Link to='' style={{textDecoration: 'none', color: '#7f8fa6'}}>OneFootball Merch</Link></div>
<div><Link to='' style={{textDecoration: 'none', color: '#7f8fa6'}}>Google Play</Link></div>
<div><Link to='' style={{textDecoration: 'none', color: '#7f8fa6'}}>App Store</Link></div>
</div>


</div>

<hr style={{color: '#acafb1'}}></hr>

<div className='footer_endtext'>
Copyright ©  2010-2023 OneFootball Company S.L. All rights reserved.
</div>

</div>
   </>
  )
}





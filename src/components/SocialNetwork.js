import React, { Component } from 'react'

export default class SocialNetwork extends Component {
    render() {

        const anim = () => {
            let navlinks = document.querySelectorAll('.social-network a');
            navlinks.forEach(link => {
                link.addEventListener('mouseover', (e) => {
                    let attrX = e.offsetX - 20;
                    let attrY = e.offsetY - 13;

                    link.style.transform = `translate(${attrX}px, ${attrY}px`;
                })
                link.addEventListener('mouseleave', () => {
                    link.style.transform = '';
                })
            })
         }
        return (
            <div className="social-network">
                <ul>
                    <a href="http://www.facebook.com" target="_blank"
                     rel="noopener noreferre" className="hover" onMouseOver={anim}>
                         <li><i className="fab fa-facebook-f"></i></li>
                     </a>
                     <a href="http://www.twitter.com" target="_blank"
                     rel="noopener noreferre" className="hover" onMouseOver={anim}>
                         <li><i className="fab fa-twitter"></i></li>
                     </a>
                     <a href="http://www.instagram.com" target="_blank"
                     rel="noopener noreferre" className="hover" onMouseOver={anim}>
                         <li><i className="fab fa-instagram"></i></li>
                     </a>                     
                </ul>
                
            </div>
        )
    }
}

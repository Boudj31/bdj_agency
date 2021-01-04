import React, { Component } from 'react'
import Logo from '../components/Logo'
import Mouse from '../components/Mouse'
import Navigation from '../components/Navigation'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import SocialNetwork from '../components/SocialNetwork'
import ButtonsBottom from '../components/ButtonsBottom'
import ContactForm from '../components/ContactForm'
import { motion } from 'framer-motion'


export default class Contact extends Component {
    render() {
        const pageTransition = {
            in: {
              opacity: 1,
              x: 0,
            },
            out: {
              opacity: 0,
              x: 300,
            },
          };
        
          const transition = {
            ease: [.03,.87,.73,.9],
            duration: .6,
          }
        return (
            <main>
                <Mouse />
                <motion.div
                  className="contact"
                  exit="out"
                  animate="in"
                  initial="out"
                  variants={pageTransition}
                  transition={transition}
                  >
                    <Navigation />
                    <Logo />
                    <ContactForm />
                    <div className="contact-infos">
                        <div className="adress">
                            <div className="content">
                                <h4>Adresse</h4>
                                <p>17 Avenue du Colonel Roche</p>
                                <p>31400 Toulouse</p>
                            </div>
                        </div>
                   <div className="phone">
                       <div className="content">
                           <h4>Telephone</h4>
                           <CopyToClipboard text="0787041726" className="hover">
                            <p style={{cursor: 'pointer'}} 
                               className="clipboard"
                               onClick= {() => alert("Numéro copié")}
                             >07 87 04 17 26</p>
                           </CopyToClipboard>
                       </div>
                       </div>
                 <div className="email">
                     <div className="content">
                         <h4>Email</h4>
                         <CopyToClipboard text="rachid.developer31@gmail.com" className="hover">
                         <p style={{cursor: 'pointer'}} 
                               className="clipboard"
                               onClick= {() => alert("Adresse mail copié")}
                             >rachid.developer31@gmail.com</p>  
                         </CopyToClipboard>
                     </div>
                    </div>
                    <SocialNetwork />
                    <div className="credits">
                        <p>BDJ Agency  - 2020</p>
                    </div>
                   </div>
                   <ButtonsBottom left={'/about'} />
                 </motion.div>
            </main>
        )
    }
}

import React, { Component } from 'react'
import ButtonsBottom from '../components/ButtonsBottom'
import Mouse from '../components/Mouse'
import Navigation from '../components/Navigation'
import SocialNetwork from '../components/SocialNetwork'
import { motion } from 'framer-motion'

export default class About extends Component {
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
                  className="about"
                  exit="out"
                  animate="in"
                  initial="out"
                  variants={pageTransition}
                  transition={transition}
                  >
              <Navigation />
              <SocialNetwork />
              <div className="about-main">
                 <div className="main-contents">
                    <h1> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, assumenda eaque quas cupiditate quasi porro architecto fugit totam repellendus, tempora magni laudantium libero? Nisi numquam tenetur illo, velit eveniet quibusdam. </h1>
                 </div>
             </div>
              <ButtonsBottom left={'/project-4'} right= {'/contact'} />   
              </motion.div>
          </main>
        )
    }
}

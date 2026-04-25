import React, { useContext } from 'react'
import {Context} from "../../main"
import {Link} from "react-router-dom"
import { FaGithub , FaLinkedin} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
import { RiInstagramFill} from "react-icons/ri"
function Footer() {
  const {isAuthorized}  = useContext(Context)
  return (
    <footer className= {isAuthorized ? "footerShow" : "footerHide"}>
<div>&copy; All Rights Reserved by Himanshu.</div>
<div>
  <Link to={'https://github.com/himanshu4387'} target='github'><FaGithub></FaGithub></Link>
  <Link to={'https://leetcode.com/u/himanshushekhar86/'} target='leetcode'><SiLeetcode></SiLeetcode></Link>
  <Link to={'https://www.linkedin.com/in/himanshu-shekhar-49b562331'} target='linkedin'><FaLinkedin></FaLinkedin></Link>
</div>
      
    </footer>
  )
}

export default Footer

import * as React from "react"
import './iconstyles.css'

function MailIcon(props) {
  return (
    <svg viewBox="0 0 512 390" className="icon">
      <title>{"email"}</title>
      <path
        id="mail_icon"
        d="M467 0H45C20.218 0 0 20.196 0 45v300c0 24.72 20.128 45 45 45h422c24.72 0 45-20.128 45-45V45c0-24.72-20.128-45-45-45zm-6.214 30L256.954 233.833 51.359 30h409.427zM30 338.788V51.069l144.479 143.24L30 338.788zM51.213 360l144.57-144.57 50.657 50.222c5.864 5.814 15.327 5.795 21.167-.046L317 216.213 460.787 360H51.213zM482 338.787L338.213 195 482 51.212v287.575z"
      />
    </svg>
  )
}

export default MailIcon
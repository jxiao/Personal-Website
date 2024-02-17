import React from "react"

interface SQLProps {
  height: string
  width?: string
}

const SQLIcon = ({ height, width = "auto" }: SQLProps) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns-xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      height={height}
      viewBox="0 0 56 56"
      xml-space="preserve"
    >
      <g>
        <g>
          <path
            fill="#545E73"
            d="M48.872,8L48.872,8c-0.731-4.462-11.175-8-23.955-8S1.693,3.538,0.961,8l0,0H0.917v0.5V20v0.5V21
			v11v0.5V33v12h0.045c0.731,4.461,11.175,8,23.955,8s23.224-3.539,23.955-8h0.045V33v-0.5V32V21v-0.5V20V8.5V8H48.872z"
          />
          <g>
            <path
              fill="#38454F"
              d="M24.917,41c-13.255,0-24-3.806-24-8.5V45h0.045c0.731,4.461,11.175,8,23.955,8
				s23.224-3.539,23.955-8h0.045V32.5C48.917,37.194,38.172,41,24.917,41z"
            />
            <path
              fill="#38454F"
              d="M0.917,32v0.5c0-0.168,0.018-0.334,0.045-0.5H0.917z"
            />
            <path
              fill="#38454F"
              d="M48.872,32c0.027,0.166,0.045,0.332,0.045,0.5V32H48.872z"
            />
          </g>
          <g>
            <path
              fill="#556080"
              d="M24.917,29c-13.255,0-24-3.806-24-8.5V33h0.045c0.731,4.461,11.175,8,23.955,8
				s23.224-3.539,23.955-8h0.045V20.5C48.917,25.194,38.172,29,24.917,29z"
            />
            <path
              fill="#556080"
              d="M0.917,20v0.5c0-0.168,0.018-0.334,0.045-0.5H0.917z"
            />
            <path
              fill="#556080"
              d="M48.872,20c0.027,0.166,0.045,0.332,0.045,0.5V20H48.872z"
            />
          </g>
          <ellipse fill="#91BAE1" cx="24.917" cy="8.5" rx="24" ry="8.5" />
          <g>
            <path
              fill="#8697CB"
              d="M24.917,17c-13.255,0-24-3.806-24-8.5V21h0.045c0.731,4.461,11.175,8,23.955,8
				s23.224-3.539,23.955-8h0.045V8.5C48.917,13.194,38.172,17,24.917,17z"
            />
            <path
              fill="#8697CB"
              d="M0.917,8v0.5c0-0.168,0.018-0.334,0.045-0.5H0.917z"
            />
            <path
              fill="#8697CB"
              d="M48.872,8c0.027,0.166,0.045,0.332,0.045,0.5V8H48.872z"
            />
          </g>
        </g>
        <g>
          <path
            fill="#fff"
            d="M53.889,46.679l-0.107,0.163c-7.121,10.876-18.773,10.876-25.893,0l0,0l0.107-0.163
			C35.116,35.803,46.768,35.803,53.889,46.679L53.889,46.679z"
          />
          <circle fill="#556080" cx="40.652" cy="44.397" r="5.909" />
          <path
            fill="#B1D3EF"
            d="M40.835,56c-5.254,0-10.148-3.058-13.783-8.609l-0.358-0.547l0.465-0.711
			c3.635-5.552,8.53-8.609,13.784-8.609c5.253,0,10.148,3.057,13.783,8.609l0.358,0.547l-0.465,0.711
			C50.983,52.942,46.089,56,40.835,56z M29.092,46.839C32.298,51.463,36.448,54,40.835,54c4.436,0,8.63-2.594,11.85-7.317
			c-3.206-4.624-7.356-7.161-11.743-7.161C36.506,39.522,32.312,42.116,29.092,46.839z"
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  )
}

export default SQLIcon

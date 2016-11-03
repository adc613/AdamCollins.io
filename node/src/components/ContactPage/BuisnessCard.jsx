import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Card from '../common/Card';


class BuisnessCard extends React.Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <Card>

        <div className="title">
          <h2> Full Stack Web Deveoper </h2>
        </div>

        <div classNmae="name">
          <h1> Adam Collins </h1>
        </div>

        <div className="logo">
          <h1>AC</h1>
        </div>

        <div className="info">
          <ul>
            <li id="email">adc613@gmail.com</li>
            <li id="twitter">@adc613</li>
            <li id="my-title">Partner at CLK Technologies</li>
          </ul>
        </div>


<svg width="923px" height="415px" viewBox="182 258 923 415" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 40.3 (33839) - http://www.bohemiancoding.com/sketch -->
    <desc>Created with Sketch.</desc>
    <defs>
        <rect id="path-1" x="0" y="0" width="909" height="400"></rect>
        <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-2">
            <feMorphology radius="0.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
            <feOffset dx="2" dy="2" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
    </defs>
    <g id="Card" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(187.000000, 263.000000)">
        <g id="Rectangle-4">
            <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
            <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>
        </g>
        <g id="Logo" transform="translate(99.000000, 138.000000)" font-weight="400" font-family="Roboto-Medium, Roboto" font-size="144">
            <text id="C" opacity="0.868178638" fill-opacity="0.87" fill="#000000">
                <tspan x="48" y="134">C</tspan>
            </text>
            <text id="A" opacity="0.916044776" fill="#D0011B">
                <tspan x="0" y="162">A</tspan>
            </text>
        </g>
        <text id="Full-Stack-Web-Devel" font-family="Roboto-Medium, Roboto" font-size="24" font-weight="400" fill-opacity="0.87" fill="#000000">
            <tspan x="84" y="61">Full Stack </tspan>
            <tspan x="84" y="89">Web </tspan>
            <tspan x="84" y="117">Developer</tspan>
        </text>
        <text id="adc613@gmail.com" font-family="Roboto-Medium, Roboto" font-size="24" font-weight="400" fill-opacity="0.87" fill="#000000">
            <tspan x="624" y="299">adc613@gmail.com</tspan>
        </text>
        <text id="@adc613" font-family="Roboto-Medium, Roboto" font-size="24" font-weight="400" fill-opacity="0.87" fill="#000000">
            <tspan x="732" y="257">@adc613</tspan>
        </text>
        <text id="Partner-Consultant-a" font-family="Roboto-Medium, Roboto" font-size="24" font-weight="400" fill-opacity="0.87" fill="#000000">
            <tspan x="409" y="341">Partner Consultant at CLK Technoloiges</tspan>
        </text>
        <text id="Adam-Collins" font-family="Roboto-Medium, Roboto" font-size="36" font-weight="400" fill-opacity="0.87" fill="#000000">
            <tspan x="634" y="88">Adam Collins</tspan>
        </text>
    </g>
</svg>

      </Card>

    );
  }
}


export default BuisnessCard;

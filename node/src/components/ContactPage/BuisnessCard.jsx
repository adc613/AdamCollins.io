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

        <div id="test">
          <svg width="923px" height="415px" viewBox="182 258 923 415" >
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
              <g id="Card" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(187.000000, 263.000000)">
                  <g id="Rectangle-4">
                      <use fill="black" fillOpacity="1" filter="url(#filter-2)" ></use>
                      <use fill="#FFFFFF" fillRule="evenodd"></use>
                  </g>
                  <g id="Logo" transform="translate(99.000000, 138.000000)" fontWeight="400" fontFamily="Roboto-Medium, Roboto" fontSize="144">
                      <text id="C" opacity="0.868178638" fillOpacity="0.87" fill="#000000">
                          <tspan x="48" y="134">C</tspan>
                      </text>
                      <text id="A" opacity="0.916044776" fill="#D0011B">
                          <tspan x="0" y="162">A</tspan>
                      </text>
                  </g>
                  <text id="adc613@gmail.com" fontFamily="Roboto-Medium, Roboto" fontSize="24" fontWeight="400" fillOpacity="0.87" fill="#000000">
                      <tspan x="624" y="299">adc613@gmail.com</tspan>
                  </text>
                  <text id="@adc613" fontFamily="Roboto-Medium, Roboto" fontSize="24" fontWeight="400" fillOpacity="0.87" fill="#000000">
                      <tspan x="652" y="257">Twitter: @adc613</tspan>
                  </text>
                  <text id="Partner-Consultant-a" fontFamily="Roboto-Medium, Roboto" fontSize="24" fontWeight="400" fillOpacity="0.87" fill="#000000">
                      <tspan x="568" y="341">Full-Stack Web Developer</tspan>
                  </text>
                  <text id="Adam-Collins" fontFamily="Roboto-Medium, Roboto" fontSize="36" fontWeight="400" fillOpacity="0.87" fill="#000000">
                      <tspan x="634" y="88">Adam Collins</tspan>
                  </text>
              </g>
            </svg>
          </div>

          </Card>

      );
    }
  }


  export default BuisnessCard;

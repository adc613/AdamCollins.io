import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Card from '../common/Card';


class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <Card className="bio">
        <h1> My Story </h1>
        <p> 
          Lorem ipsum dolor sit amet, has ea rebum lucilius, an vel sumo sanctus, quo agam nemore te. Ei sit tritani expetenda, est nobis putent fierent ei. Pri et nisl summo tantas. Denique verterem te vix. An eripuit evertitur voluptatum est, iriure hendrerit no has. In mea vivendo probatus, invenire conclusionemque vel ea. His ignota sapientem ut.
          <br/>
          Regione tritani dolores ei est. Nam putent iuvaret ea, ne pri quidam urbanitas contentiones. Ignota iisque iuvaret ei sed, ad his debet eloquentiam. At nam quot dicunt, cu eos labores admodum.
          <br/>
          Ea pro omnesque perfecto eleifend, quis eirmod comprehensam in vis. Qualisque vituperata an cum. Vix cu quando homero. An civibus platonem neglegentur est, pri in veri latine constituam. Quodsi commune eu nam, quidam percipit eum ad, ne vis fugit sensibus.
          <br/>
          Munere consequuntur cu pro, his te nullam nostrud officiis. Nec ut impetus iuvaret nominati, est error nonumy laoreet at, mea ea audire facilis electram. No dicit legere eirmod sed, eam omnes decore reformidans in, pro no aperiri theophrastus. Possit erroribus incorrupte per ex, eam salutandi democritum ad. Te mea postea adversarium, ut mea etiam mnesarchum.
          <br/>
          Eos at dictas labores quaerendum, et pro offendit perpetua adipiscing. Quem iriure qui ei, ferri legere eum ei. Eu vide regione cum, eius voluptaria vel ut. Te eum tollit hendrerit. Cu duo semper cotidieque, no cum erat dicat instructior.
        </p>
      </Card>
    );
  }
}


export default Bio;

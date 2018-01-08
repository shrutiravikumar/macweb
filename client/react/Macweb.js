import React, { Component } from 'react';
import Navbar from './Navbar.js'


class Macweb extends Component {
  render() {

    //Image map created by jtwright
    let map = (
      <map name="macg">
        <area href="/entry-pages/a-entry.pdf" shape="poly" coords="285,68,329,92,417,42,417,93,329,144,285,119" alt="Link" data-maphilight='{"strokeColor":"ffffff","strokeWidth":2,"fillColor":"80eeff","fillOpacity":0.5}' title="A Entry" />
        <area href="/entry-pages/b-entry.pdf" shape="poly" coords="285,119,329,144,417,93,417,144,329,194,285,169" alt="Link" data-maphilight='{"strokeColor":"ffffff","strokeWidth":2,"fillColor":"8080ff","fillOpacity":0.5}' title="B Entry" />
        <area href="/entry-pages/c-entry.pdf" shape="poly" coords="285,169,329,194,417,144,417,195,329,245,285,220" alt="Link" data-maphilight='{"strokeColor":"ffffff","strokeWidth":2,"fillColor":"80ff80","fillOpacity":0.5}' title="C Entry" />
        <area href="/entry-pages/d-entry.pdf" shape="poly" coords="285,220,329,245,417,195,417,245,329,295,285,270" alt="Link" data-maphilight='{"strokeColor":"ffffff","strokeWidth":2,"fillColor":"ff9180","fillOpacity":0.5}' title="D Entry" />
        <area href="/entry-pages/e-entry.pdf" shape="poly" coords="285,270,329,295,402,254,418,244,402,254,402,304,329,346,285,321" alt="Link" data-maphilight='{"strokeColor":"ffffff","strokeWidth":2,"fillColor":"0f0f0f","fillOpacity":0.5}' title="E Entry" />
        <area href="/entry-pages/f-entry.pdf" shape="poly" coords="402,254,446,228,593,313,593,381,520,423,520,355,475,330,447,346,402,322" alt="Link" data-maphilight='{"strokeColor":"ffffff","strokeWidth":2,"fillColor":"ff80ff","fillOpacity":0.5}' title="F Entry" />
        <area href="/entry/g" shape="poly" coords="475,330,520,355,520,423,329,533,329,466,285,440" alt="Link" data-maphilight='{"strokeColor":"ffffff","strokeWidth":2,"fillColor":"ffa480","fillOpacity":0.5}' title="G Entry" />
        <area href="/entry/h/h.html" shape="poly" coords="285,440,329,466,329,533,256,575,138,508,138,440,182,414,256,457" alt="Link" data-maphilight='{"strokeColor":"ffffff","strokeWidth":2,"fillColor":"88ff80","fillOpacity":0.5}' title="H Entry" />
        <area href="/entry/j" shape="poly" coords="182,414,138,440,138,508,65,465,65,398,152,347,196,372,196,422" alt="Link" data-maphilight='{"strokeColor":"ffffff","strokeWidth":2,"fillColor":"bf80ff","fillOpacity":0.5}' title="J Entry" />
      </map>
    )
    //Made with David Lynch's Maphilight: http://davidlynch.org/blog/2008/03/maphilight-image-map-mouseover-highlighting/

    //reinsert the navbar before the container
    return (
      <div>
        <noscript>
          <p>Javascript is becoming core to the internet, this website requires it to function.</p>
        </noscript>
        <Navbar />
        <div className="container">
          <div style={{width: "622px", margin: "0 auto"}}  id="macg-image-map">

            <img src="/images/macgregor-schematic-outline.png" width="622" height="610" className="map" useMap="#macg" />
            {map}
            <br/>
            <p>Click on a letter to find out more about that entry.</p>
          </div>
          <br/><br/>
        </div>
      </div>
    );
  }

  componentDidMount() {
    $('img[usemap]').maphilight();
  }
}

export default Macweb;

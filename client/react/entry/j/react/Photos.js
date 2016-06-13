import React, { Component } from 'react';
import Navbar from './Navbar.js';

class Photos extends Component {
  render() {
    return (
      /* I AM SORRY FOR WHAT NEEDED TO BE DONE */
      /* Turns out there's not a nice way I could find to pull in the contents of the directory and populate a template.
      So, there's a python script at the top level (photoGalleryFilenameGen.py) that generates this HTML.
      YOU MUST RUN THE SCRIPT AND REPLACE THIS SECTION WITH THE PRINTOUT IF YOU CHANGE THE CONTENTS OF GALLERY_PHOTOS. */

      /*LOL @CristhianUlloa
      I haven't seen that script, you'll need to add '/' to close all the image tags in there, or use find/replace to add it afterwards
      Even better, talk to me about generating this the react way --@Firescar96*/

      //TODO I had to remove the photo gallery display code because it couldn't get it working after the port from Blaze to Reat --@Firescar96

      //This page created with much help from http://michaelsoriano.com/create-a-responsive-photo-gallery-with-bootstrap-framework/
      <div className="entryj">
        <Navbar />
        <div className="title-div">
          <h1>J Entry Photo Gallery</h1>
        </div>
        <div className="container">
          <ul className="row gallery-list" id="main-gallery">
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4084.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1291.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4210.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1759.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_5281.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_8006.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_2259.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_8127.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1725.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_7973.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1757.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4348.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_2255.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4123.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_2281.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3816.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4568.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-102_rainforest_cafe_group.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4713.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_1341.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_7984.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-047_IMG_7611.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3952.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_2781.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1619.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1708.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1775.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1709.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1627.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3851.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4309.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3927.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3166.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_2896.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3811.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_5252.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-038_IMG_3791.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_2773.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3982.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_2267.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1025.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4491.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4755.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4806.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4513.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4192.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1765.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-026_IMG_7581.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4449.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3672.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1705.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4750.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1307.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-094_IMG_7684.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_2820.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4651.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1717.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_8136.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_1327.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4086.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4193.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1623.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4254-2.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-008_IMG_3775.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4178.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3169.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4226.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1631.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4288 2-2.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_2272.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1746.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-028_IMG_7584.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1774.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1706.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4223.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4734.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3808.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_5258.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1748.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3823.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-032_IMG_7589.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1713.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1644.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1752.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1734.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3693.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3007.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4175.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4637.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-063.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_2279.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_2759.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4550.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4108.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_2857.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1451.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3140.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_2273.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1777.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4412.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_7965.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_8042.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4256.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-042_IMG_7604.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4170.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3129.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-080_IMG_7662.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4711.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_7901.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_8057.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_2996.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-195.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_2926.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-039_IMG_3794.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3646.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_2259pepe.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-_MG_3997-2.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3214.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1736.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1449.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_8027.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4549.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3831.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-001_IMG_3759.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4098.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_8049.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3057.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4170(Madelyn).JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1756.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_5256.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_5249.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4547.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1730.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_7930.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4404.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-_MG_3980-2.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_5278.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1027.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_2814.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-057_IMG_7639.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4418.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3069.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1618.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4654.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_2258.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3815-2.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1704.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3662.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1702.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4081.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1776.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1648.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_5269.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_2287.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1703.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4154.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-193.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_5267.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_1448.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3819.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4222.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1647.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4173.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4240.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1628.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_2289.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-103_IMG_7701.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4247.JPG" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1715.jpg" /></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_1338.jpg" /></a></li>
          </ul>
        </div>

        <div id="blueimp-gallery" className="blueimp-gallery" data-hide-page-scrollbars="false">
          <div className="slides"></div>
          <div className="modal fade">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" aria-hidden="true">&times;</button>
                  <h4 className="modal-title"></h4>
                </div>
                <div className="modal-body next"></div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default pull-left prev">
                    <i className="glyphicon glyphicon-chevron-left"></i>
                    Previous
                  </button>
                  <button type="button" className="btn btn-primary next">
                    Next
                    <i className="glyphicon glyphicon-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Photos;
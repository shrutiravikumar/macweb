import React, { Component, PropTypes } from 'react';
import Navbar from './Navbar.js';
import Lightbox from 'react-images';

function makeUnsplashSrc (id) {
	return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=1024&h=1024`;
}
function makeUnsplashSrcSet (id, size) {
	return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=${size} ${size}w`;
}
function makeUnsplashThumbnail (id, orientation = 'landscape') {
	const dimensions = orientation === 'square'
		? 'w=300&h=300'
		: 'w=240&h=159';

	return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&crop=faces&fit=crop&${dimensions}`;
}

// Unsplash images from the "Spirit Animals" collection
// https://unsplash.com/collections/158825/spirit-animals

const DEFAULT_IMAGES = [
	{ id: '1470619549108-b85c56fe5be8', caption: 'Photo by Alan Emery', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/SYzUF6XcWBY (Flamingo)
	{ id: '1471079502516-250c19af6928', caption: 'Photo by Jeremy Bishop', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/GIpGxe2_cT4 (Turtle)
	{ id: '1454023492550-5696f8ff10e1', caption: 'Photo by Jessica Weiller', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/LmVSKeDy6EA (Tiger)
	{ id: '1470854989922-5be2f7456d78', caption: 'Photo by Piotr Łaskawski', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/GXMr7BadXQo (Hedgehog)
	{ id: '1470317596697-cbdeda56f999', caption: 'Photo by Michel Bosma', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/XgF9e93Tkt0 (Ladybug)
];
const THEMED_IMAGES = [
	{ id: '1471101173712-b9884175254e', caption: 'Photo by Pedro Lastra', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/5oRzZU5uwSM (Dragonfly)
	{ id: '1471127432458-65206be149c9', caption: 'Photo by Ernesto Velázquez', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/Kpgt4pl03O0 (Deer)
	{ id: '1470777639313-60af88918203', caption: 'Photo by Cris Saur', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/GNUcUx-iObg (Koala)
	{ id: '1453550486481-aa4175b013ea', caption: 'Photo by Benjamin Pley', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/WiSeaZ4E6ZI (Elephant)
	{ id: '1415904663467-dfdc16cae794', caption: 'Photo by Levi Saunders', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/NUMlxTPsznM (Coyote)
];
const THUMBNAIL_IMAGES = [
	{ id: '1454991727061-be514eae86f7', caption: 'Photo by Thomas Kelley', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/t20pc32VbrU (Hump Back Whale)
	{ id: '1455717974081-0436a066bb96', caption: 'Photo by Teddy Kelley', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/cmKPOUgdmWc (Deer)
	{ id: '1460899960812-f6ee1ecaf117', caption: 'Photo by Jay Ruzesky', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/h13Y8vyIXNU (Walrus)
	{ id: '1456926631375-92c8ce872def', caption: 'Photo by Gwen Weustink', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/I3C1sSXj1i8 (Leopard)
	{ id: '1452274381522-521513015433', caption: 'Photo by Adam Willoughby-Knox', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/_snqARKTgoc (Mother and Cubs)
	{ id: '1471145653077-54c6f0aae511', caption: 'Photo by Boris Smokrovic', orientation: 'landscape' }, // https://unsplash.com/photos/n0feC_PWFdk (Dragonfly)
	{ id: '1471005197911-88e9d4a7834d', caption: 'Photo by Gaetano Cessati', orientation: 'landscape' }, // https://unsplash.com/photos/YOX8ZMTo7hk (Baby Crocodile)
	{ id: '1470583190240-bd6bbde8a569', caption: 'Photo by Alan Emery', orientation: 'landscape' }, // https://unsplash.com/photos/emTCWiq2txk (Beetle)
	{ id: '1470688090067-6d429c0b2600', caption: 'Photo by Ján Jakub Naništa', orientation: 'landscape' }, // https://unsplash.com/photos/xqjO-lx39B4 (Scottish Highland Cow)
	{ id: '1470742292565-de43c4b02b57', caption: 'Photo by Eric Knoll', orientation: 'landscape' }, // https://unsplash.com/photos/DmOCkOnx-MQ (Cheetah)
	// https://unsplash.com/photos/NUMlxTPsznM coyote?
];

const theme = {
	// container
	container: { background: 'rgba(255, 255, 255, 0.9)' },

	// arrows
	arrow: {
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		fill: '#222',
		opacity: 0.6,
		transition: 'opacity 200ms',

		':hover': {
			opacity: 1,
		},
	},
	arrow__size__medium: {
		borderRadius: 40,
		height: 40,
		marginTop: -20,

		'@media (min-width: 768px)': {
			height: 70,
			padding: 15,
		},
	},
	arrow__direction__left: { marginLeft: 10 },
	arrow__direction__right: { marginRight: 10 },

	// header
	close: {
		fill: '#D40000',
		opacity: 0.6,
		transition: 'all 200ms',

		':hover': {
			opacity: 1,
		},
	},

	// footer
	footer: {
		color: 'black',
	},
	footerCount: {
		color: 'rgba(0, 0, 0, 0.6)',
	},

	// thumbnails
	thumbnail: {
	},
	thumbnail__active: {
		boxShadow: '0 0 0 2px #00D8FF',
	},
};

class Photos extends Component {
  //hacking old jquery photo gallery into component
  //  componentDidMount() {
  //    var embedCode = '<script src="//blueimp.github.io/Gallery/js/jquery.blueimp-gallery.min.js"></script>';
  //
  //    $('#photo-page').append(embedCode);
  //  }
  
  constructor () {
      super();

      this.state = {
          lightboxIsOpen: false,
          currentImage: 0,
      };

      this.closeLightbox = this.closeLightbox.bind(this);
      this.gotoNext = this.gotoNext.bind(this);
      this.gotoPrevious = this.gotoPrevious.bind(this);
      this.gotoImage = this.gotoImage.bind(this);
      this.handleClickImage = this.handleClickImage.bind(this);
      this.openLightbox = this.openLightbox.bind(this);
  }
  openLightbox (index, event) {
      event.preventDefault();
      this.setState({
          currentImage: index,
          lightboxIsOpen: true,
      });
  }
  closeLightbox () {
      this.setState({
          currentImage: 0,
          lightboxIsOpen: false,
      });
  }
  gotoPrevious () {
      this.setState({
          currentImage: this.state.currentImage - 1,
      });
  }
  gotoNext () {
      this.setState({
          currentImage: this.state.currentImage + 1,
      });
  }
  gotoImage (index) {
      this.setState({
          currentImage: index,
      });
  }
  handleClickImage () {
      if (this.state.currentImage === this.props.images.length - 1) return;

      this.gotoNext();
  }
  
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
      
      // Not sure about all the above comments, I (Hutch) am updating this on 22JAN2019 and am simply replacing the photos below.  If you have questions, email me at matthutchinson1@hotmail.com
      <div className="entryj">
        <Navbar />
        <div className="title-div">
          <h1>J Entry Photo Gallery</h1>
        </div>
        <div id="photo-page" className="container">
          <ul className="row gallery-list" id="main-gallery">
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_1.JPG" onClick={(e) => this.openLightbox(0, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_2.JPG" onClick={(e) => this.openLightbox(1, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_3.jpg" onClick={(e) => this.openLightbox(2, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_4.jpg" onClick={(e) => this.openLightbox(3, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_5.JPG" onClick={(e) => this.openLightbox(4, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_6.JPG" onClick={(e) => this.openLightbox(5, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_7.JPG" onClick={(e) => this.openLightbox(6, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_8.JPG" onClick={(e) => this.openLightbox(7, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_9.JPG" onClick={(e) => this.openLightbox(8, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_10.JPG" onClick={(e) => this.openLightbox(9, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_11.JPG" onClick={(e) => this.openLightbox(10, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_12.JPG" onClick={(e) => this.openLightbox(11, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_13.JPG" onClick={(e) => this.openLightbox(12, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_14.JPG" onClick={(e) => this.openLightbox(13, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_15.JPG" onClick={(e) => this.openLightbox(14, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_16.JPG" onClick={(e) => this.openLightbox(15, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_17.jpg" onClick={(e) => this.openLightbox(16, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_18.JPG" onClick={(e) => this.openLightbox(17, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_19.JPG" onClick={(e) => this.openLightbox(18, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_20.JPG" onClick={(e) => this.openLightbox(19, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_21.JPG" onClick={(e) => this.openLightbox(20, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_22.JPG" onClick={(e) => this.openLightbox(21, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_23.JPG" onClick={(e) => this.openLightbox(22, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_24.JPG" onClick={(e) => this.openLightbox(23, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_25.JPG" onClick={(e) => this.openLightbox(24, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_26.JPG" onClick={(e) => this.openLightbox(25, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_27.JPG" onClick={(e) => this.openLightbox(26, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_28.jpg" onClick={(e) => this.openLightbox(27, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_29.jpg" onClick={(e) => this.openLightbox(28, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_30.JPG" onClick={(e) => this.openLightbox(29, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_31.JPG" onClick={(e) => this.openLightbox(30, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_32.JPG" onClick={(e) => this.openLightbox(31, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_33.JPG" onClick={(e) => this.openLightbox(32, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_34.JPG" onClick={(e) => this.openLightbox(33, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_35.JPG" onClick={(e) => this.openLightbox(34, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_36.JPG" onClick={(e) => this.openLightbox(35, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_38.JPG" onClick={(e) => this.openLightbox(36, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_39.JPG" onClick={(e) => this.openLightbox(37, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_41.JPG" onClick={(e) => this.openLightbox(38, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_42.JPG" onClick={(e) => this.openLightbox(39, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_43.JPG" onClick={(e) => this.openLightbox(40, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_44.JPG" onClick={(e) => this.openLightbox(41, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_45.JPG" onClick={(e) => this.openLightbox(42, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_46.JPG" onClick={(e) => this.openLightbox(43, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_47.JPG" onClick={(e) => this.openLightbox(44, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_48.JPG" onClick={(e) => this.openLightbox(45, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_49.jpg" onClick={(e) => this.openLightbox(46, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_50.jpg" onClick={(e) => this.openLightbox(47, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_51.jpg" onClick={(e) => this.openLightbox(48, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_52.jpg" onClick={(e) => this.openLightbox(49, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_53.jpg" onClick={(e) => this.openLightbox(50, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_54.JPG" onClick={(e) => this.openLightbox(51, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_55.JPG" onClick={(e) => this.openLightbox(52, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_56.JPG" onClick={(e) => this.openLightbox(53, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_57.JPG" onClick={(e) => this.openLightbox(54, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_58.JPG" onClick={(e) => this.openLightbox(55, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_59.jpg" onClick={(e) => this.openLightbox(56, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_60.JPG" onClick={(e) => this.openLightbox(57, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_61.JPG" onClick={(e) => this.openLightbox(58, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_62.JPG" onClick={(e) => this.openLightbox(59, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_64.JPG" onClick={(e) => this.openLightbox(60, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2018_2019_65.JPG" onClick={(e) => this.openLightbox(61, e)}/></a></li>
            
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_1.JPG" onClick={(e) => this.openLightbox(62, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_3.JPG" onClick={(e) => this.openLightbox(63, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_4.JPG" onClick={(e) => this.openLightbox(64, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_5.jpg" onClick={(e) => this.openLightbox(65, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_6.jpg" onClick={(e) => this.openLightbox(66, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_7.jpg" onClick={(e) => this.openLightbox(67, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_8.jpg" onClick={(e) => this.openLightbox(68, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_9.jpg" onClick={(e) => this.openLightbox(69, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_10.jpg" onClick={(e) => this.openLightbox(70, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_11.JPG" onClick={(e) => this.openLightbox(71, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_12.JPG" onClick={(e) => this.openLightbox(72, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_13.JPG" onClick={(e) => this.openLightbox(73, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_14.JPG" onClick={(e) => this.openLightbox(74, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_15.JPG" onClick={(e) => this.openLightbox(75, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_16.JPG" onClick={(e) => this.openLightbox(76, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_18.JPG" onClick={(e) => this.openLightbox(77, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_19.JPG" onClick={(e) => this.openLightbox(78, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_20.JPG" onClick={(e) => this.openLightbox(79, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_21.JPG" onClick={(e) => this.openLightbox(80, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_22.JPG" onClick={(e) => this.openLightbox(82, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_27.JPG" onClick={(e) => this.openLightbox(82, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_28.JPG" onClick={(e) => this.openLightbox(83, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_30.JPG" onClick={(e) => this.openLightbox(84, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_31.JPG" onClick={(e) => this.openLightbox(85, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_32.JPG" onClick={(e) => this.openLightbox(86, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_34.JPG" onClick={(e) => this.openLightbox(87, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_35.JPG" onClick={(e) => this.openLightbox(88, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_36.JPG" onClick={(e) => this.openLightbox(89, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_37.JPG" onClick={(e) => this.openLightbox(90, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_38.JPG" onClick={(e) => this.openLightbox(91, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_40.jpg" onClick={(e) => this.openLightbox(92, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_42.jpg" onClick={(e) => this.openLightbox(93, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_43.jpg" onClick={(e) => this.openLightbox(94, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_44.jpg" onClick={(e) => this.openLightbox(95, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_45.JPG" onClick={(e) => this.openLightbox(96, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_46.JPG" onClick={(e) => this.openLightbox(97, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_47.JPG" onClick={(e) => this.openLightbox(98, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_48.JPG" onClick={(e) => this.openLightbox(99, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_49.JPG" onClick={(e) => this.openLightbox(100, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_50.JPG" onClick={(e) => this.openLightbox(101, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_51.JPG" onClick={(e) => this.openLightbox(102, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_52.JPG" onClick={(e) => this.openLightbox(103, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_53.JPG" onClick={(e) => this.openLightbox(104, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_54.JPG" onClick={(e) => this.openLightbox(105, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_55.JPG" onClick={(e) => this.openLightbox(106, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_56.JPG" onClick={(e) => this.openLightbox(107, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_57.JPG" onClick={(e) => this.openLightbox(108, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_58.JPG" onClick={(e) => this.openLightbox(109, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_59.JPG" onClick={(e) => this.openLightbox(110, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_60.JPG" onClick={(e) => this.openLightbox(111, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_61.JPG" onClick={(e) => this.openLightbox(112, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_62.JPG" onClick={(e) => this.openLightbox(113, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_63.JPG" onClick={(e) => this.openLightbox(114, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/2017_2018_64.png" onClick={(e) => this.openLightbox(115, e)}/></a></li>


          </ul>
        </div>
      
        <Lightbox
          currentImage={this.state.currentImage}
          images={[
            { src: "/entry/j/gallery_photos/2018_2019_1.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_2.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_3.jpg"},
            { src: "/entry/j/gallery_photos/2018_2019_4.jpg"},
            { src: "/entry/j/gallery_photos/2018_2019_5.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_6.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_7.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_8.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_9.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_10.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_11.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_12.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_13.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_14.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_15.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_16.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_17.jpg"},
            { src: "/entry/j/gallery_photos/2018_2019_18.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_19.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_20.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_21.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_22.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_23.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_24.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_25.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_26.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_27.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_28.jpg"},
            { src: "/entry/j/gallery_photos/2018_2019_29.jpg"},
            { src: "/entry/j/gallery_photos/2018_2019_30.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_31.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_32.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_33.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_34.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_35.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_36.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_38.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_39.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_41.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_42.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_43.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_44.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_45.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_46.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_47.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_48.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_49.jpg"},
            { src: "/entry/j/gallery_photos/2018_2019_50.jpg"},
            { src: "/entry/j/gallery_photos/2018_2019_51.jpg"},
            { src: "/entry/j/gallery_photos/2018_2019_52.jpg"},
            { src: "/entry/j/gallery_photos/2018_2019_53.jpg"},
            { src: "/entry/j/gallery_photos/2018_2019_54.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_55.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_56.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_57.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_58.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_59.jpg"},
            { src: "/entry/j/gallery_photos/2018_2019_60.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_61.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_62.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_64.JPG"},
            { src: "/entry/j/gallery_photos/2018_2019_65.JPG"},

            { src: "/entry/j/gallery_photos/2017_2018_1.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_3.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_4.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_5.jpg"},
            { src: "/entry/j/gallery_photos/2017_2018_6.jpg"},
            { src: "/entry/j/gallery_photos/2017_2018_7.jpg"},
            { src: "/entry/j/gallery_photos/2017_2018_8.jpg"},
            { src: "/entry/j/gallery_photos/2017_2018_9.jpg"},
            { src: "/entry/j/gallery_photos/2017_2018_10.jpg"},
            { src: "/entry/j/gallery_photos/2017_2018_11.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_12.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_13.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_14.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_15.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_16.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_18.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_19.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_20.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_21.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_22.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_27.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_28.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_30.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_31.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_32.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_34.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_35.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_36.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_37.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_38.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_40.jpg"},
            { src: "/entry/j/gallery_photos/2017_2018_42.jpg"},
            { src: "/entry/j/gallery_photos/2017_2018_43.jpg"},
            { src: "/entry/j/gallery_photos/2017_2018_44.jpg"},
            { src: "/entry/j/gallery_photos/2017_2018_45.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_46.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_47.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_48.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_49.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_50.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_51.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_52.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_53.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_54.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_55.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_56.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_57.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_58.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_59.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_60.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_61.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_62.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_63.JPG"},
            { src: "/entry/j/gallery_photos/2017_2018_64.png"},
          ]}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
          showThumbnails={this.props.showThumbnails}
          theme={this.props.theme}
        />
      </div>
    );
  }
}


export default Photos;
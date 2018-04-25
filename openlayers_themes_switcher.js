var htmlvalues;

function changeColorSwitcher(colorName) {
  var layerSwitcher = document.getElementsByClassName("olControlLayerSwitcher");
  //Generic function to loop in children of the layer switcher class


  function spanLayerSwitcher(position) {
    return layerSwitcher[0].children[position];
  }
  //Loop to change color in the layer switcher top
  for (var i = 0; i < spanLayerSwitcher(0).children.length; i++) {
    spanLayerSwitcher(0).children[i].style.backgroundColor = colorName;
  }
  //center of layer switcher
  layerSwitcher[0].children[1].style.backgroundColor = colorName;
  //Loop to change color in the layer switcher bottom
  for (var k = 0; k < spanLayerSwitcher(2).children.length; k++) {
    spanLayerSwitcher(2).children[k].style.backgroundColor = colorName;
  }
  //No need to reuse so not in a var
  //document.getElementsByClassName("olControlOverviewMap")[0].style.backgroundColor="transparent";
  document.getElementsByClassName("olControlOverviewMapElement")[0].style.backgroundColor = colorName;
  document.getElementsByClassName("olControlOverviewMap")[0].style.opacity = "0.75";
  //Test with fonts change
  //Converts a hex colour to its opposite:
  //http://wiki.vyre.com/index.php/JavaScript:_Opposite_colour

  function decimalToHex(decimal) {
    var hex = decimal.toString(16);
    if (hex.length == 1) {
      hex = '0' + hex;
    }
    return hex;
  }

  function hexToDecimal(hex) {
    return parseInt(hex, 16);
  }
  function returnOpposite(colour) {
    return decimalToHex(255 - hexToDecimal(colour.substr(0, 2))) + decimalToHex(255 - hexToDecimal(colour.substr(2, 2))) + decimalToHex(255 - hexToDecimal(colour.substr(4, 2)));
  }
  //Dirty (To clean)


  function htmlcolortohex(htmlcolor) {
    var colordic = {
      'aliceblue': '#f0f8ff',
      'antiquewhite': '#faebd7',
      'aqua': '#00ffff',
      'aquamarine': '#7fffd4',
      'azure': '#f0ffff',
      'beige': '#f5f5dc',
      'bisque': '#ffe4c4',
      'black': '#000000',
      'blanchedalmond': '#ffebcd',
      'blue': '#0000ff',
      'blueviolet': '#8a2be2',
      'brown': '#a52a2a',
      'burlywood': '#deb887',
      'cadetblue': '#5f9ea0',
      'chartreuse': '#7fff00',
      'chocolate': '#d2691e',
      'coral': '#ff7f50',
      'cornflowerblue': '#6495ed',
      'cornsilk': '#fff8dc',
      'crimson': '#dc143c',
      'cyan': '#00ffff',
      'darkblue': '#00008b',
      'darkcyan': '#008b8b',
      'darkgoldenrod': '#b8860b',
      'darkgray': '#a9a9a9',
      'darkgreen': '#006400',
      'darkgrey': '#a9a9a9',
      'darkkhaki': '#bdb76b',
      'darkmagenta': '#8b008b',
      'darkolivegreen': '#556b2f',
      'darkorange': '#ff8c00',
      'darkorchid': '#9932cc',
      'darkred': '#8b0000',
      'darksalmon': '#e9967a',
      'darkseagreen': '#8fbc8f',
      'darkslateblue': '#483d8b',
      'darkslategray': '#2f4f4f',
      'darkslategrey': '#2f4f4f',
      'darkturquoise': '#00ced1',
      'darkviolet': '#9400d3',
      'deeppink': '#ff1493',
      'deepskyblue': '#00bfff',
      'dimgray': '#696969',
      'dimgrey': '#696969',
      'dodgerblue': '#1e90ff',
      'firebrick': '#b22222',
      'floralwhite': '#fffaf0',
      'forestgreen': '#228b22',
      'fuchsia': '#ff00ff',
      'gainsboro': '#dcdcdc',
      'ghostwhite': '#f8f8ff',
      'gold': '#ffd700',
      'goldenrod': '#daa520',
      'gray': '#808080',
      'green': '#008000',
      'greenyellow': '#adff2f',
      'grey': '#808080',
      'honeydew': '#f0fff0',
      'hotpink': '#ff69b4',
      'indianred': '#cd5c5c',
      'indigo': '#4b0082',
      'ivory': '#fffff0',
      'khaki': '#f0e68c',
      'lavender': '#e6e6fa',
      'lavenderblush': '#fff0f5',
      'lawngreen': '#7cfc00',
      'lemonchiffon': '#fffacd',
      'lightblue': '#add8e6',
      'lightcoral': '#f08080',
      'lightcyan': '#e0ffff',
      'lightgoldenrodyellow': '#fafad2',
      'lightgray': '#d3d3d3',
      'lightgreen': '#90ee90',
      'lightgrey': '#d3d3d3',
      'lightpink': '#ffb6c1',
      'lightsalmon': '#ffa07a',
      'lightseagreen': '#20b2aa',
      'lightskyblue': '#87cefa',
      'lightslategray': '#778899',
      'lightslategrey': '#778899',
      'lightsteelblue': '#b0c4de',
      'lightyellow': '#ffffe0',
      'lime': '#00ff00',
      'limegreen': '#32cd32',
      'linen': '#faf0e6',
      'magenta': '#ff00ff',
      'maroon': '#800000',
      'mediumaquamarine': '#66cdaa',
      'mediumblue': '#0000cd',
      'mediumorchid': '#ba55d3',
      'mediumpurple': '#9370db',
      'mediumseagreen': '#3cb371',
      'mediumslateblue': '#7b68ee',
      'mediumspringgreen': '#00fa9a',
      'mediumturquoise': '#48d1cc',
      'mediumvioletred': '#c71585',
      'midnightblue': '#191970',
      'mintcream': '#f5fffa',
      'mistyrose': '#ffe4e1',
      'moccasin': '#ffe4b5',
      'navajowhite': '#ffdead',
      'navy': '#000080',
      'oldlace': '#fdf5e6',
      'olive': '#808000',
      'olivedrab': '#6b8e23',
      'orange': '#ffa500',
      'orangered': '#ff4500',
      'orchid': '#da70d6',
      'palegoldenrod': '#eee8aa',
      'palegreen': '#98fb98',
      'paleturquoise': '#afeeee',
      'palevioletred': '#db7093',
      'papayawhip': '#ffefd5',
      'peachpuff': '#ffdab9',
      'peru': '#cd853f',
      'pink': '#ffc0cb',
      'plum': '#dda0dd',
      'powderblue': '#b0e0e6',
      'purple': '#800080',
      'red': '#ff0000',
      'rosybrown': '#bc8f8f',
      'royalblue': '#4169e1',
      'saddlebrown': '#8b4513',
      'salmon': '#fa8072',
      'sandybrown': '#f4a460',
      'seagreen': '#2e8b57',
      'seashell': '#fff5ee',
      'sienna': '#a0522d',
      'silver': '#c0c0c0',
      'skyblue': '#87ceeb',
      'slateblue': '#6a5acd',
      'slategray': '#708090',
      'slategrey': '#708090',
      'snow': '#fffafa',
      'springgreen': '#00ff7f',
      'steelblue': '#4682b4',
      'tan': '#d2b48c',
      'teal': '#008080',
      'thistle': '#d8bfd8',
      'tomato': '#ff6347',
      'turquoise': '#40e0d0',
      'violet': '#ee82ee',
      'wheat': '#f5deb3',
      'whitesmoke': '#f5f5f5',
      'yellow': '#ffff00',
      'yellowgreen': '#9acd32'
    };
    //console.log(colordic[htmlcolor]);
    var valreturn = colordic[htmlcolor];
    return valreturn.substring(1, 6);
  }
  fontcolor = returnOpposite(htmlcolortohex(colorName));
  document.getElementsByClassName("baseLbl")[0].style.color = fontcolor;
  document.getElementsByClassName("dataLbl")[0].style.color = fontcolor;
  document.getElementsByClassName("labelSpan")[0].style.color = fontcolor;
  for (var j = 0; j < document.getElementsByClassName("labelSpan").length; j++) {
    document.getElementsByClassName("labelSpan")[j].style.color = fontcolor;
  }
}
function changeImageOl(baseUrl) {
  // Function to get only file name from an url
  // If you want the current url, do document.URL


  function urlFilename(url) {
    var filename = url.substring(url.lastIndexOf('/') + 1);
    return filename;
  }
  function changeImg(id, img) {
    document.getElementById(id).src = img;
  }
  function changeAllImagePath(idList, pathList) {
    var i = 0;
    while (i < pathList.length) {
      changeImg(idList[i], pathList[i]);
      i++;
    }
  }
  reg = /innerImage/;
  // Go throught images
  idList = [];
  pathList = [];
  var mesimages = document.images;
  for (var i = 0; i < mesimages.length; i++) {
    if (mesimages[i].id) {
      if (mesimages[i].src) {
        if (reg.test(mesimages[i].id)) {
          idList.push(mesimages[i].id);
          pathList.push(baseUrl + "/" + urlFilename(mesimages[i].src));
        }
      }
    }
  }
  changeAllImagePath(idList, pathList);
}
function chgpage(formulaire) {
  if (formulaire.listepages.selectedIndex !== 0) {
    changeImageOl("colors/" + formulaire.listepages.options[formulaire.listepages.selectedIndex].value);
    changeColorSwitcher(formulaire.listepages.options[formulaire.listepages.selectedIndex].value);
    //alert(formulaire.listepages.options[formulaire.listepages.selectedIndex].value);
  }
}
var map;

function init() {
  map = new OpenLayers.Map('map', {
    controls: [
    new OpenLayers.Control.Navigation(), new OpenLayers.Control.PanZoomBar(), new OpenLayers.Control.LayerSwitcher({
      'ascending': false
    }), new OpenLayers.Control.Permalink(), new OpenLayers.Control.ScaleLine(), new OpenLayers.Control.Permalink('permalink'), new OpenLayers.Control.MousePosition(), new OpenLayers.Control.OverviewMap(), new OpenLayers.Control.KeyboardDefaults()],
    numZoomLevels: 12
  });
  var stamen = new OpenLayers.Layer.XYZ(
      "Toner-lite",
      [
          "https://stamen-tiles-a.a.ssl.fastly.net/toner-lite/${z}/${x}/${y}.png",
          "https://stamen-tiles-b.a.ssl.fastly.net/toner-lite/${z}/${x}/${y}.png",
          "https://stamen-tiles-c.a.ssl.fastly.net/toner-lite/${z}/${x}/${y}.png",
          "https://stamen-tiles-d.a.ssl.fastly.net/toner-lite/${z}/${x}/${y}.png",
      ],
      {
          attribution: [
              'Map tiles by <a href="http://stamen.com/">Stamen Design</a>, ',
              'under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. ',
              'Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, ',
              'under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
          ].join(""),
          "minZoom":      0,
          "maxZoom":      20,
          sphericalMercator: true,
          wrapDateLine: true
      }
  );


  map.addLayers([stamen]);
  map.setCenter(new OpenLayers.LonLat(437219.80173032, 5918824.8474104), 3);
  chgpage(document.querySelector('form'));
  if (!map.getCenter()) map.zoomToMaxExtent();
}


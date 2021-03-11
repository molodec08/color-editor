$( function() {
  const color = $("#color");
  const bgColor = $("#bgcolor");
  let activeState = 'bgColor';
  let colorState = {
    red: 255,
    green: 255,
    blue: 255
  };
  let bgColorState = {
    red: 255,
    green: 255,
    blue: 255
  }

  color.click(function() {
    activeState = 'color';
    bgColorState.red = $( "#red" ).slider( "value" );
    bgColorState.green = $( "#green" ).slider( "value" );
    bgColorState.blue = $( "#blue" ).slider( "value" );
    $( "#red" ).slider( "value", colorState.red );
    $( "#green" ).slider( "value", colorState.green );
    $( "#blue" ).slider( "value", colorState.blue );
  });
  bgColor.click(function() {
    activeState = 'bgColor';
    colorState.red = $( "#red" ).slider( "value" );
    colorState.green = $( "#green" ).slider( "value" );
    colorState.blue = $( "#blue" ).slider( "value" );
    $( "#red" ).slider( "value", bgColorState.red );
    $( "#green" ).slider( "value", bgColorState.green );
    $( "#blue" ).slider( "value", bgColorState.blue );
  });
  function hexFromRGB(r, g, b) {
    var hex = [
      r.toString( 16 ),
      g.toString( 16 ),
      b.toString( 16 )
    ];
    $.each( hex, function( nr, val ) {
      if ( val.length === 1 ) {
        hex[ nr ] = "0" + val;
      }
    });
    return hex.join( "" ).toUpperCase();
  }
  function refreshSwatch() {
    var red = $( "#red" ).slider( "value" ),
      green = $( "#green" ).slider( "value" ),
      blue = $( "#blue" ).slider( "value" );
    var hex = hexFromRGB( red, green, blue );
    $( "#swatch" ).css( activeState == "bgColor" ?
      "background-color" :
      "color", "#" + hex );
  }

  $( "#red, #green, #blue" ).slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 127,
    slide: refreshSwatch,
    change: refreshSwatch
  });
  $( "#red" ).slider( "value", 255 );
  $( "#green" ).slider( "value", 255 );
  $( "#blue" ).slider( "value", 255 );
} );
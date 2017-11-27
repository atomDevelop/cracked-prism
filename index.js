function crackedPrism(colors, medium) {
  if (medium < 3) {
    console.error("The number of colors should be more than 3")
    return false
  }
  var output = []
  var palette = []
  for(let i = 0; i < 2; i++){
    colors[i] = colors[i].replace("#", "")
    if(colors[i].length == 3) {
      colors[i] = colors[i].split('').map(function(v) {
        return v + v;
      }).join('')
    }else if(colors[i].length != 6) {
      console.error("Please check the colors")
      return []
    }
    palette.push({R:parseInt(colors[i].substr(0, 2), 16), G:parseInt(colors[i].substr(2, 2), 16), B:parseInt(colors[i].substr(4, 2), 16)})
  }
  var unit = {
    R: Math.round((palette[0].R - palette[1].R)/(medium - 1)),
    G: Math.round((palette[0].G - palette[1].G)/(medium - 1)),
    B: Math.round((palette[0].B - palette[1].B)/(medium - 1))
  }
  var _output = {}
  for(let i=0; i < (medium - 1); i++){
    _output["R"] = palette[0].R - (i * unit.R)
    _output["G"] = palette[0].G - (i * unit.G)
    _output["B"] = palette[0].B - (i * unit.B)
    output.push("#"+_output.R.toString(16)+_output.G.toString(16)+_output.B.toString(16))
  }
  output.push("#"+colors[1])
  return output
}
module.exports = crackedPrism
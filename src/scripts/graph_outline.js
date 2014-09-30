function graph_outline(options){
  var data={};

  data.nodes=[
    {name:"HTML5", family:1, size:5, type:"Standard and Language"}, // 0
    {name:"CSS3", family:2, size:5, type:"Language"},
    {name:"JavaScript", family:3, size:5, type:"Language"},
    {name:"DOM", family:1, size:3, type:"Standard"},
    {name:"<canvas>", family:1, size:1, type:"Standard and Language"},
    {name:"SVG", family:4, size:2, type:"Standard and Language"}, // 5
    {name:"WebRTC", family:1, size:1, type:"Standard"},
    {name:"@font-face", family:2, size:1, type:"Standard and Language"},
    {name:"File API", family:1, size:1, type:"Standard and Language"},
    {name:"Geo Localization", family:1, size:1, type:"Standard and Language"},
    {name:"XHR", family:1, size:2, type:"Standard and Language"}, //10
    {name:"WebSocket", family:1, size:1, type:"Standard and Language"},
    {name:"Drag & Drop", family:1, size:1, type:"Standard and Language"},
    {name:"JQuery", family:1, size:1, type:"Library"},
    {name:"D3", family:4, size:1, type:"Library"},
    {name:"Raphael", family:4, size:1, type:"Library"}, // 15
    {name:"<audio>", family:1, size:1, type:"Standard and Language"},
    {name:"<video>", family:1, size:1, type:"Standard and Language"},
    {name:"Web Frameworks", family:5, size:4, type:"Technics"}, // 18
    {name:"SASS", family:2, size:1, type:"Language"},
    {name:"LESS", family:2, size:1, type:"Language"}, // 20
    {name:"node.js", family:3, size:1, type:"tool"},
    {name:"JSLint", family:3, size:1, type:"tool"},
    {name:"QUnit", family:3, size:1, type:"tool"},
    {name:"Backbone", family:5, size:1, type:"Library"},
    {name:"Angular", family:5, size:1, type:"Library"}, // 25
    {name:"Ember", family:5, size:1, type:"Library"},
    {name:"Templates", family:5, size:1, type:"Technics"},
    {name:"Data Binding", family:5, size:1, type:"Technics"}, // 28
    {name:"Client Side", family:5, size:2, type:"Technics"},
    {name:"Server Side", family:5, size:2, type:"Technics"}, // 30
    {name:"2D", family:1, size:2, type:"Standard and Language"},
    {name:"WebGL", family:1, size:2, type:"Standard and Language"},
    {name:"on the server", family:3, size:2, type:"Standard and Language"},
    {name:"Rhino", family:3, size:2, type:"Standard and Language"},
    {name:"In browsers", family:3, size:2, type:"Standard and Language"}, // 35
    {name:"V8", family:3, size:2, type:"Standard and Language"},
    {name:"SpiderMonkey", family:3, size:2, type:"Standard and Language"},
    {name:"Nitro", family:3, size:2, type:"tool"},
    {name:"HeadLess browsers", family:3, size:2, type:"tool"},
    {name:"PhantomJS", family:3, size:2, type:"tool"}, // 40
    {name:"Selenium", family:3, size:2, type:"tool"},
    {name:"Unit Tests", family:3, size:2, type:"Standard and Language"},
    {name:"EcmaScript", family:3, size:2, type:"Standard and Language"},
    {name:"MV*", family:5, size:2, type:"Standard and Language"},
    {name:"Express", family:5, size:2, type:"tool"}, // 45
    {name:"CSS Extensions", family:2, size:2, type:"Standard and Language"},
    {name:"transform", family:2, size:2, type:"Standard and Language"},
    {name:"animation", family:2, size:2, type:"Standard and Language"},
    {name:"Chakra", family:3, size:2, type:"tool"},
    {name:"DataBases", family:4, size:3, type:"Standard and Language"}, // 50
    {name:"RDBMS", family:4, size:2, type:"Standard and Language"},
    {name:"NoSQL (Not only SQL)", family:4, size:2, type:"Standard and Language"}, 
    {name:"Key-values Stores", family:4, size:1, type:"tool"},
    {name:"Column Family Stores", family:4, size:1, type:"tool"},
    {name:"Document Databases", family:4, size:1, type:"tool"}, // 55
    {name:"Graph Databases", family:4, size:1, type:"tool"}
  ];
  data.links=[
    {"source":0,"target":1,"value":2},
    {"source":0,"target":2,"value":2},
    {"source":0,"target":3,"value":1.5},
    //{"source":0,"target":4,"value":1},
    //{"source":0,"target":5,"value":1},
    //{"source":0,"target":6,"value":1},
    //{"source":0,"target":7,"value":1},
    {"source":0,"target":8,"value":1},
    {"source":0,"target":9,"value":1},
    {"source":0,"target":10,"value":1},
    {"source":0,"target":11,"value":1},
    {"source":0,"target":12,"value":1},
    // {"source":0,"target":16,"value":1},
    // {"source":0,"target":17,"value":1},
    {"source":0,"target":18,"value":2},
    {"source":1,"target":7,"value":1},
    {"source":1,"target":46,"value":1},
    {"source":1,"target":47,"value":1},
    {"source":1,"target":48,"value":1},
    {"source":46,"target":19,"value":1},
    {"source":46,"target":20,"value":1},
    {"source":2,"target":33,"value":1},
    {"source":33,"target":21,"value":1},
    {"source":33,"target":34,"value":1},
    {"source":2,"target":22,"value":1},
    {"source":42,"target":23,"value":1},
    {"source":2,"target":35,"value":1},
    {"source":35,"target":36,"value":1},
    {"source":35,"target":37,"value":1},
    {"source":35,"target":38,"value":1},
    {"source":35,"target":49,"value":1},
    {"source":2,"target":39,"value":1},
    {"source":39,"target":40,"value":1},
    {"source":39,"target":41,"value":1},
    {"source":2,"target":42,"value":1},
    {"source":2,"target":43,"value":1},
    {"source":3,"target":4,"value":1},
    {"source":3,"target":5,"value":1.5},
    {"source":3,"target":13 ,"value":1},
    {"source":3,"target":16,"value":1},
    {"source":3,"target":17,"value":1},
    {"source":5,"target":14,"value":1},
    {"source":5,"target":15,"value":1},
    {"source":0,"target":6,"value":1},
    {"source":29,"target":24,"value":1},
    {"source":29,"target":25,"value":1},
    {"source":29,"target":26,"value":1},
    {"source":18,"target":27,"value":1},
    {"source":18,"target":28,"value":1},
    {"source":18,"target":29,"value":1},
    {"source":18,"target":30,"value":1},
    {"source":30,"target":45,"value":1},
    {"source":18,"target":44,"value":1},
    {"source":18,"target":50,"value":1},
    {"source":4,"target":31,"value":1},
    {"source":4,"target":32,"value":1},
    {"source":50,"target":51,"value":1},
    {"source":50,"target":52,"value":1},
    {"source":52,"target":53,"value":1},
    {"source":52,"target":54,"value":1},
    {"source":52,"target":55,"value":1},
    {"source":52,"target":56,"value":1},

  ];


// Compute the distinct nodes from the links.
//links.forEach(function(link) {
//  link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
//  link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
//});



  var width = options.width,
      height = options.height;

  var color = d3.scale.category10();

  var force = d3.layout.force()
      .charge(-250)
//      .linkDistance(function(d) { return d.value*50; })
      .linkDistance(50)
      .gravity(0.1)
      .size([width, height]);

  var svg = d3.select(options.area).append("svg")
      .attr("width", width)
      .attr("height", height);

  force
    .nodes(data.nodes)
    .links(data.links)
    .start();

  var link = svg.selectAll(".link")
    .data(data.links)
    .enter().append("line")
    .attr("class", "link")
    .style("stroke-width", function(d) { return Math.sqrt(d.value)+2; });

  var node = svg.selectAll(".node")
        .data(data.nodes)
      .enter().append("g")
        .attr("class", "node")
        .call(force.drag);
        
  node.append("text")
    .attr("dx", 13)
    .attr("text-anchor", "middle")
    .attr("dy", ".3em")
    .attr("class", "node")
    .style("fill", function(d) { return color(d.family); })
    .attr("font-size", function(d) { return d.size * 2 + 10   ; })
    .text(function(d) { return d.name; });
      
      // .append("text")
      //       .attr("text-anchor", "middle")
      //       .attr("dy", ".3em" )
      //       .text(function(d) { return d.name+"!" })
      //       .attr("class", "node")
      //       .attr("r", function(d) { return d.size*3 + 10   ; })
      //       .style("fill", function(d) { return color(d.group); })
      
  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    //node.attr("cx", function(d) { return d.x; })
    //    .attr("cy", function(d) { return d.y; });
    node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
  });
  



  
  // var selector = this.document.querySelector(options.t);
  // selector.onchange=function(){
  //   svg.selectAll("text.node")
  //     .style("fill", function(d) { return color(d[selector.value]); });
  //   force.start();
  // };
  
  document.querySelector(options.range).onchange=function(){
    force
      .linkDistance(this.value)
      .charge(-100-(this.value*3))
      .start();
  };
}
        
  
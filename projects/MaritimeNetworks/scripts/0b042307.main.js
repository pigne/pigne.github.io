!function(){function a(){c(l[this.selectedIndex])}function b(a,b,c){a.rotate([0,0,0]),b.rotate([0,0,0]);{var e=0,f=d3.geo.projection(function(c,d){c*=180/Math.PI,d*=180/Math.PI;var f=a([c,d]),g=b([c,d]);return[(1-e)*f[0]+e*g[0],(1-e)*-f[1]+e*-g[1]]}).rotate(c).scale(1).translate([j/2,k/2]).clipExtent(a.clipExtent());d3.geo.path().projection(f).context(z)}return C=d3.geo.path().projection(f).context(A),function(){return function(a){e=a,d()}}}function c(a){p|=2,x.transition().duration(750).tween("path",b(t,t=a.projection,n=o.slice())).each("end",function(){p&=-3,r=Date.now()}),B.projection(t),y.transition().duration(750).tween("path",b(t,t=a.projection,n=o.slice())).each("end",function(){p&=-3,r=Date.now()}),C.projection(t),y.transition().duration(750).tween("path",b(t,t=a.projection,n=o.slice())).each("end",function(){p&=-3,r=Date.now()}),C.projection(t),y.transition().duration(750).tween("path",b(t,t=a.projection,n=o.slice())).each("end",function(){p&=-3,r=Date.now()}),C.projection(t)}function d(){z.clearRect(0,0,j,k),A.clearRect(0,0,j,k),u&&(z.fillStyle="#FaFaFa",z.lineWidth=.5*i,z.strokeStyle="#222",z.beginPath(),B(u),z.fill(),z.stroke(),z.beginPath(),B(v),z.stroke(),A.fillStyle="#FaFaFa",A.lineWidth=.5*i,A.strokeStyle="#222",A.beginPath(),C(u),A.fill(),A.stroke(),A.beginPath(),C(v),A.stroke()),h.portsCircles2006&&(z.strokeStyle="#A00",z.fillStyle="rgba(200, 0, 0, .1)",z.lineWidth=.5*i,z.beginPath(),B({type:"GeometryCollection",geometries:h.portsCircles2006}),z.fill(),z.stroke()),h.portsCircles1996&&(A.strokeStyle="#A00",A.fillStyle="rgba(220, 0, 0, .1)",A.lineWidth=.5*i,A.beginPath(),C({type:"GeometryCollection",geometries:h.portsCircles1996}),A.fill(),A.stroke()),z.fillStyle="#EEE",z.strokeStyle="#999",z.lineWidth=.5*i,z.beginPath(),B(w),z.stroke(),z.lineWidth=2.5*i,z.strokeStyle="#000",z.beginPath(),B({type:"Sphere"}),z.stroke(),A.fillStyle="#EEE",A.strokeStyle="#999",A.lineWidth=.5*i,A.beginPath(),C(w),A.stroke(),A.lineWidth=2.5*i,A.strokeStyle="#000",A.beginPath(),C({type:"Sphere"}),A.stroke()}function e(){h.portsCircles2006=[];for(id in h.portsData2006){var a=h.portsData2006[id];if("undefined"!=typeof a.currentDepartures){var b=d3.geo.circle().angle(3*Math.sqrt(a.currentDepartures)).origin([a.lon,a.lat]);h.portsCircles2006.push(b())}}h.portsCircles1996=[];for(id in h.portsData1996){var a=h.portsData1996[id];if("undefined"!=typeof a.currentDepartures){var b=d3.geo.circle().angle(3*Math.sqrt(a.currentDepartures)).origin([a.lon,a.lat]);h.portsCircles1996.push(b())}}}function f(){if(!J){H=H%366+1;var a=new Date("2006/01/01");a.setDate(H),d3.select("#y2006>h4").text(moment(a).format("MMMM Do"));for(port in h.portsData2006)delete h.portsData2006[port].currentDepartures;h.allEvents2006[H-1].portsDepartures.forEach(function(a){h.portsData2006[a.id].currentDepartures=a.d});var b=new Date("1996/01/01");b.setDate(H),d3.select("#y1996>h4").text(moment(b).format("MMMM Do"));for(port in h.portsData1996)delete h.portsData1996[port].currentDepartures;return h.allEvents1996[H-1].portsDepartures.forEach(function(a){h.portsData1996[a.id].currentDepartures=a.d}),g(1996),g(2006),e(),(p||K)&&d(),setTimeout(f,1e3)}}function g(a){var b=h["allEvents"+a];"undefined"==typeof b&&console.log("e is undef");for(var c=document.querySelector("#y"+a+" tbody");c.firstChild;)c.removeChild(c.firstChild);for(var d=0;5>d;d++){var e=h["portsData"+a][b[H-1].portsDepartures[d].id],f=document.createElement("tr"),g=document.createElement("td");g.textContent=d+1,f.appendChild(g),g=document.createElement("td"),g.textContent=e.name,f.appendChild(g),g=document.createElement("td"),g.textContent=e.currentDepartures,f.appendChild(g),c.appendChild(f)}}var h={},i=window.devicePixelRatio||1,j=600*i,k=500*i;console.log("------------------------------------------------------"),console.log("What's up?! Looking for something? "),console.log(""),console.log("Why don't you send me an email at yoann.pigne@gmail.com?"),console.log(""),console.log("By the way the code here is of extremely  poor quality. It was done in a hurry. It does not comply with my usual expectations. So please forgive me or pass your way. "),console.log(""),console.log("Best, "),console.log(""),console.log("Yoann"),console.log("------------------------------------------------------");var l=[{name:"Aitoff",projection:d3.geo.aitoff()},{name:"August",projection:d3.geo.august().scale(60)},{name:"Baker",projection:d3.geo.baker().scale(100)},{name:"Boggs",projection:d3.geo.boggs()},{name:"Bonne",projection:d3.geo.bonne().scale(100)},{name:"Bromley",projection:d3.geo.bromley()},{name:"Collignon",projection:d3.geo.collignon().scale(93)},{name:"Craster Parabolic",projection:d3.geo.craster()},{name:"Eckert I",projection:d3.geo.eckert1().scale(165)},{name:"Eckert II",projection:d3.geo.eckert2().scale(165)},{name:"Eckert III",projection:d3.geo.eckert3().scale(180)},{name:"Eckert IV",projection:d3.geo.eckert4().scale(180)},{name:"Eckert V",projection:d3.geo.eckert5().scale(170)},{name:"Eckert VI",projection:d3.geo.eckert6().scale(170)},{name:"Eisenlohr",projection:d3.geo.eisenlohr().scale(60)},{name:"Equirectangular (Plate Carrée)",projection:d3.geo.equirectangular()},{name:"Fahey",projection:d3.geo.fahey().scale(120)},{name:"Gall Stereographic",projection:d3.geo.cylindricalStereographic().parallel(45).scale(140)},{name:"Goode Homolosine",projection:d3.geo.homolosine()},{name:"Ginzburg IV",projection:d3.geo.ginzburg4().scale(120)},{name:"Ginzburg V",projection:d3.geo.ginzburg5().scale(120)},{name:"Ginzburg VI",projection:d3.geo.ginzburg6().scale(120)},{name:"Ginzburg VIII",projection:d3.geo.ginzburg8().scale(120)},{name:"Ginzburg IX",projection:d3.geo.ginzburg9().scale(120)},{name:"Gringorten",projection:d3.geo.gringorten().scale(220)},{name:"Guyou",projection:d3.geo.guyou().scale(150)},{name:"Hammer",projection:d3.geo.hammer().scale(165)},{name:"Hill",projection:d3.geo.hill().scale(120)},{name:"Kavrayskiy VII",projection:d3.geo.kavrayskiy7()},{name:"Lagrange",projection:d3.geo.lagrange().scale(120)},{name:"Lambert cylindrical equal-area",projection:d3.geo.cylindricalEqualArea()},{name:"Larrivée",projection:d3.geo.larrivee().scale(95)},{name:"Laskowski",projection:d3.geo.laskowski().scale(120)},{name:"Loximuthal",projection:d3.geo.loximuthal()},{name:"Mercator",projection:d3.geo.mercator().scale(100)},{name:"Miller",projection:d3.geo.miller().scale(100)},{name:"McBryde–Thomas Flat-Polar Parabolic",projection:d3.geo.mtFlatPolarParabolic()},{name:"McBryde–Thomas Flat-Polar Quartic",projection:d3.geo.mtFlatPolarQuartic()},{name:"McBryde–Thomas Flat-Polar Sinusoidal",projection:d3.geo.mtFlatPolarSinusoidal()},{name:"Mollweide",projection:d3.geo.mollweide().scale(165)},{name:"Natural Earth",projection:d3.geo.naturalEarth()},{name:"Nell–Hammer",projection:d3.geo.nellHammer()},{name:"Polyconic",projection:d3.geo.polyconic().scale(100)},{name:"Rectangular Polyconic",projection:d3.geo.rectangularPolyconic().scale(120)},{name:"Robinson",projection:d3.geo.robinson()},{name:"Sinusoidal",projection:d3.geo.sinusoidal()},{name:"Sinu-Mollweide",projection:d3.geo.sinuMollweide()},{name:"Times",projection:d3.geo.times().scale(140)},{name:"Van der Grinten",projection:d3.geo.vanDerGrinten().scale(75)},{name:"Van der Grinten II",projection:d3.geo.vanDerGrinten2().scale(75)},{name:"Van der Grinten III",projection:d3.geo.vanDerGrinten3().scale(75)},{name:"Van der Grinten IV",projection:d3.geo.vanDerGrinten4().scale(120)},{name:"Wagner IV",projection:d3.geo.wagner4()},{name:"Wagner VI",projection:d3.geo.wagner6()},{name:"Wagner VII",projection:d3.geo.wagner7()},{name:"Winkel Tripel",projection:d3.geo.winkel3()}],m=d3.select("#projection-menu").on("change",a);m.selectAll("option").data(l).enter().append("option").text(function(a){return a.name});var n=[-71,0,0],o=n.slice(),p=0,q=[.005,0],r=Date.now(),s=2,t=(l.length-1,l[s].projection);l.forEach(function(a){a.projection.translate([j/2,k/2]).scale(a.projection.scale()*i).clipExtent([[2*i,2*i],[j-2*i,k-2*i]])});var u,v,w=d3.geo.graticule()(),x=d3.select("#drawing2006").append("canvas").attr("width",j).attr("height",k).style("width",j/i+"px").style("height",k/i+"px").call(d3.behavior.drag().origin(function(){return{x:o[0],y:-o[1]}}).on("dragstart",function(){p|=1}).on("drag",function(){o[0]=d3.event.x,o[1]=-d3.event.y,t.rotate(o),d()}).on("dragend",function(){p&=-2,r=Date.now(),n=o.slice()})),y=d3.select("#drawing1996").append("canvas").attr("width",j).attr("height",k).style("width",j/i+"px").style("height",k/i+"px").call(d3.behavior.drag().origin(function(){return{x:o[0],y:-o[1]}}).on("dragstart",function(){p|=1}).on("drag",function(){o[0]=d3.event.x,o[1]=-d3.event.y,t.rotate(o),d()}).on("dragend",function(){p&=-2,r=Date.now(),n=o.slice()})),z=x.node().getContext("2d");z.fillStyle="#f9f9f9",z.strokeStyle="#000";var A=y.node().getContext("2d");A.fillStyle="#f9f9f9",A.strokeStyle="#000";var B=d3.geo.path().projection(t).context(z),C=d3.geo.path().projection(t).context(A);d3.timer(function(){if(!p&&!K){var a=Date.now()-r;o[0]=n[0]+q[0]*a,o[1]=n[1]+q[1]*a,t.rotate(o),d()}}),h.portsCircles2006=[],h.portsData2006={},h.portsCircles1996=[],h.portsData1996={},d3.json("data/world.json",function(a,b){u=topojson.feature(b,b.objects.land),v=topojson.mesh(b,b.objects.countries,function(a,b){return a!==b})});var D=!1,E=!1;d3.json("data/ports_2006.json",function(a,b){if(a)throw console.log(a),a;h.portsData2006=b,D=!0,E&&e()}),d3.json("data/ports_1996.json",function(a,b){if(a)throw console.log(a),a;h.portsData1996=b,E=!0,D&&e()});var F=!1,G=!1;d3.json("data/portsDepartures_2006.json",function(a,b){h.allEvents2006=b,h.allEvents2006.forEach(function(a){a.portsDepartures.sort(function(a,b){return b.d-a.d})}),F=!0,G&&(I=f())}),d3.json("data/portsDepartures_1996.json",function(a,b){h.allEvents1996=b,h.allEvents1996.forEach(function(a){a.portsDepartures.sort(function(a,b){return b.d-a.d})}),G=!0,F&&(I=f())}),h.allEvents2006=[],h.allEvents1996=[];var H=1,I=!1,J=!1,K=!1;d3.select("#playButton").on("click",function(){K=!1,d3.select("#playButton").classed({hidden:!0}),d3.select("#pauseButton").classed({hidden:!1})}),d3.select("#pauseButton").on("click",function(){d3.select("#pauseButton").classed({hidden:!0}),d3.select("#playButton").classed({hidden:!1}),K=!0})}();
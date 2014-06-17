(function() {

    var env = {};

    var ratio = window.devicePixelRatio || 1,
        width = 600 * ratio,
        height = 500 * ratio;


    console.log("------------------------------------------------------");
    console.log("What's up?! Looking for something? ");
    console.log("");
    console.log("Why don't you send me an email at yoann.pigne@gmail.com?");
    console.log("");
    console.log("By the way the code here is of extremely  poor quality. It was done in a hurry. It does not comply with my usual expectations. So please forgive me or pass your way. ");
    console.log("");
    console.log("Best, ");
    console.log("");
    console.log("Yoann");
    console.log("------------------------------------------------------");




    var options = [{
            name: "Aitoff",
            projection: d3.geo.aitoff()
        },
        //{name: "Albers", projection: d3.geo.albers().scale(145).parallels([20, 50])},
        {
            name: "August",
            projection: d3.geo.august().scale(60)
        }, {
            name: "Baker",
            projection: d3.geo.baker().scale(100)
        }, {
            name: "Boggs",
            projection: d3.geo.boggs()
        }, {
            name: "Bonne",
            projection: d3.geo.bonne().scale(100)
        }, {
            name: "Bromley",
            projection: d3.geo.bromley()
        }, {
            name: "Collignon",
            projection: d3.geo.collignon().scale(93)
        }, {
            name: "Craster Parabolic",
            projection: d3.geo.craster()
        }, {
            name: "Eckert I",
            projection: d3.geo.eckert1().scale(165)
        }, {
            name: "Eckert II",
            projection: d3.geo.eckert2().scale(165)
        }, {
            name: "Eckert III",
            projection: d3.geo.eckert3().scale(180)
        }, {
            name: "Eckert IV",
            projection: d3.geo.eckert4().scale(180)
        }, {
            name: "Eckert V",
            projection: d3.geo.eckert5().scale(170)
        }, {
            name: "Eckert VI",
            projection: d3.geo.eckert6().scale(170)
        }, {
            name: "Eisenlohr",
            projection: d3.geo.eisenlohr().scale(60)
        }, {
            name: "Equirectangular (Plate Carrée)",
            projection: d3.geo.equirectangular()
        }, {
            name: "Fahey",
            projection: d3.geo.fahey().scale(120)
        }, {
            name: "Gall Stereographic",
            projection: d3.geo.cylindricalStereographic().parallel(45).scale(140)
        }, {
            name: "Goode Homolosine",
            projection: d3.geo.homolosine()
        }, {
            name: "Ginzburg IV",
            projection: d3.geo.ginzburg4().scale(120)
        }, {
            name: "Ginzburg V",
            projection: d3.geo.ginzburg5().scale(120)
        }, {
            name: "Ginzburg VI",
            projection: d3.geo.ginzburg6().scale(120)
        }, {
            name: "Ginzburg VIII",
            projection: d3.geo.ginzburg8().scale(120)
        }, {
            name: "Ginzburg IX",
            projection: d3.geo.ginzburg9().scale(120)
        }, {
            name: "Gringorten",
            projection: d3.geo.gringorten().scale(220)
        }, {
            name: "Guyou",
            projection: d3.geo.guyou().scale(150)
        }, {
            name: "Hammer",
            projection: d3.geo.hammer().scale(165)
        }, {
            name: "Hill",
            projection: d3.geo.hill().scale(120)
        }, {
            name: "Kavrayskiy VII",
            projection: d3.geo.kavrayskiy7()
        }, {
            name: "Lagrange",
            projection: d3.geo.lagrange().scale(120)
        }, {
            name: "Lambert cylindrical equal-area",
            projection: d3.geo.cylindricalEqualArea()
        }, {
            name: "Larrivée",
            projection: d3.geo.larrivee().scale(95)
        }, {
            name: "Laskowski",
            projection: d3.geo.laskowski().scale(120)
        }, {
            name: "Loximuthal",
            projection: d3.geo.loximuthal()
        }, {
            name: "Mercator",
            projection: d3.geo.mercator().scale(100)
        }, {
            name: "Miller",
            projection: d3.geo.miller().scale(100)
        }, {
            name: "McBryde–Thomas Flat-Polar Parabolic",
            projection: d3.geo.mtFlatPolarParabolic()
        }, {
            name: "McBryde–Thomas Flat-Polar Quartic",
            projection: d3.geo.mtFlatPolarQuartic()
        }, {
            name: "McBryde–Thomas Flat-Polar Sinusoidal",
            projection: d3.geo.mtFlatPolarSinusoidal()
        }, {
            name: "Mollweide",
            projection: d3.geo.mollweide().scale(165)
        }, {
            name: "Natural Earth",
            projection: d3.geo.naturalEarth()
        }, {
            name: "Nell–Hammer",
            projection: d3.geo.nellHammer()
        }, {
            name: "Polyconic",
            projection: d3.geo.polyconic().scale(100)
        }, {
            name: "Rectangular Polyconic",
            projection: d3.geo.rectangularPolyconic().scale(120)
        }, {
            name: "Robinson",
            projection: d3.geo.robinson()
        }, {
            name: "Sinusoidal",
            projection: d3.geo.sinusoidal()
        }, {
            name: "Sinu-Mollweide",
            projection: d3.geo.sinuMollweide()
        }, {
            name: "Times",
            projection: d3.geo.times().scale(140)
        }, {
            name: "Van der Grinten",
            projection: d3.geo.vanDerGrinten().scale(75)
        }, {
            name: "Van der Grinten II",
            projection: d3.geo.vanDerGrinten2().scale(75)
        }, {
            name: "Van der Grinten III",
            projection: d3.geo.vanDerGrinten3().scale(75)
        }, {
            name: "Van der Grinten IV",
            projection: d3.geo.vanDerGrinten4().scale(120)
        }, {
            name: "Wagner IV",
            projection: d3.geo.wagner4()
        }, {
            name: "Wagner VI",
            projection: d3.geo.wagner6()
        }, {
            name: "Wagner VII",
            projection: d3.geo.wagner7()
        }, {
            name: "Winkel Tripel",
            projection: d3.geo.winkel3()
        }
    ];



    var menu = d3.select("#projection-menu")
        .on("change", change);

    menu.selectAll("option")
        .data(options)
        .enter().append("option")
        .text(function(d) {
            return d.name;
        });

    function change() {
        //clearInterval(interval);
        update(options[this.selectedIndex]);
    }



    var initial = [-71, 0, 0],
        rotate = initial.slice(),
        pause = 0,
        velocity = [0.005, 0.00],
        t0 = Date.now();

    var i = 2,
        n = options.length - 1;

    var projection = options[i].projection;

    options.forEach(function(option) {
        option.projection
            .translate([width / 2, height / 2]).scale(option.projection.scale() * ratio)
            .clipExtent([
                [2 * ratio, 2 * ratio],
                [width - 2 * ratio, height - 2 * ratio]
            ]);
    });




    var graticule = d3.geo.graticule()(),
        land,
        boundaries;

    var canevas2006 = d3.select("#drawing2006").append("canvas")
        .attr("width", width)
        .attr("height", height)
        .style("width", width / ratio + "px")
        .style("height", height / ratio + "px")
        .call(d3.behavior.drag()
            .origin(function() {
                return {
                    x: rotate[0],
                    y: -rotate[1]
                };
            })
            .on("dragstart", function() {
                pause |= 1;
            })
            .on("drag", function(d) {
                rotate[0] = d3.event.x;
                rotate[1] = -d3.event.y;
                projection.rotate(rotate);
                redraw();
            })
            .on("dragend", function() {
                pause &= ~1;
                t0 = Date.now();
                initial = rotate.slice();
            }));

    var canevas1996 = d3.select("#drawing1996").append("canvas")
        .attr("width", width)
        .attr("height", height)
        .style("width", width / ratio + "px")
        .style("height", height / ratio + "px")
        .call(d3.behavior.drag()
            .origin(function() {
                return {
                    x: rotate[0],
                    y: -rotate[1]
                };
            })
            .on("dragstart", function() {
                pause |= 1;
            })
            .on("drag", function(d) {
                rotate[0] = d3.event.x;
                rotate[1] = -d3.event.y;
                projection.rotate(rotate);
                redraw();
            })
            .on("dragend", function() {
                pause &= ~1;
                t0 = Date.now();
                initial = rotate.slice();
            }));


    var context2006 = canevas2006.node().getContext("2d");
    context2006.fillStyle = "#f9f9f9";
    context2006.strokeStyle = "#000";

    var context1996 = canevas1996.node().getContext("2d");
    context1996.fillStyle = "#f9f9f9";
    context1996.strokeStyle = "#000";



    var path2006 = d3.geo.path()
        .projection(projection)
        .context(context2006);

    var path1996 = d3.geo.path()
        .projection(projection)
        .context(context1996);



    function pathTween(projection0, projection1, rotate) {
        projection0.rotate([0, 0, 0]);
        projection1.rotate([0, 0, 0]);
        var t = 0,
            projection = d3.geo.projection(function(λ, φ) {λ *= 180 / Math.PI, φ *= 180 / Math.PI;
                var p0 = projection0([λ, φ]),
                    p1 = projection1([λ, φ]);
                return [(1 - t) * p0[0] + t * p1[0], (1 - t) * -p0[1] + t * -p1[1]];
            })
                .rotate(rotate)
                .scale(1)
                .translate([width / 2, height / 2])
                .clipExtent(projection0.clipExtent()),
            path2006 = d3.geo.path().projection(projection).context(context2006);
        path1996 = d3.geo.path().projection(projection).context(context1996);
        return function() {
            return function(u) {
                t = u;
                redraw();
            };
        };
    }

    function update(option) {
        pause |= 2;
        canevas2006.transition()
            .duration(750)
            .tween("path", pathTween(projection, projection = option.projection, initial = rotate.slice()))
            .each("end", function() {
                pause &= ~2;
                t0 = Date.now();
            });
        path2006.projection(projection);
        canevas1996.transition()
            .duration(750)
            .tween("path", pathTween(projection, projection = option.projection, initial = rotate.slice()))
            .each("end", function() {
                pause &= ~2;
                t0 = Date.now();
            });
        path1996.projection(projection);


        canevas1996.transition()
            .duration(750)
            .tween("path", pathTween(projection, projection = option.projection, initial = rotate.slice()))
            .each("end", function() {
                pause &= ~2;
                t0 = Date.now();
            });
        path1996.projection(projection);
        canevas1996.transition()
            .duration(750)
            .tween("path", pathTween(projection, projection = option.projection, initial = rotate.slice()))
            .each("end", function() {
                pause &= ~2;
                t0 = Date.now();
            });
        path1996.projection(projection);


    }

    d3.timer(function() {
        if (pause || actionPause) return;
        var t = Date.now() - t0;
        rotate[0] = initial[0] + velocity[0] * t;
        rotate[1] = initial[1] + velocity[1] * t;
        projection.rotate(rotate);
        redraw();
    });

    function redraw() {
        context2006.clearRect(0, 0, width, height);
        context1996.clearRect(0, 0, width, height);

        if (land) {
            context2006.fillStyle = "#FaFaFa";
            context2006.lineWidth = .5 * ratio;
            context2006.strokeStyle = "#222";
            context2006.beginPath(), path2006(land), context2006.fill(), context2006.stroke();
            context2006.beginPath(), path2006(boundaries), context2006.stroke();

            context1996.fillStyle = "#FaFaFa";
            context1996.lineWidth = .5 * ratio;
            context1996.strokeStyle = "#222";
            context1996.beginPath(), path1996(land), context1996.fill(), context1996.stroke();
            context1996.beginPath(), path1996(boundaries), context1996.stroke();

        }
        //if (env.portsCircles2006) {
            context2006.lineWidth = .5 * ratio;
            context2006.fillStyle = "rgba(220, 0, 0, .1)"

            context2006.strokeStyle = "#777";


            // context2006.beginPath();
            // path2006({
            //     type: "GeometryCollection",
            //     geometries: env.portsCircles2006
            // });;
            // context2006.fill(),
            // context2006.stroke();



            for (id in env.portsData2006) {
                var port = env.portsData2006[id]
                if (typeof port.circle !== 'undefined') {
                    context2006.fillStyle = "rgba(" + Math.min(255, Math.max(200, 35 * port.currentDepartures)) + ", " + Math.min(240, Math.max(0, 35 * port.currentDepartures)) + ", " + Math.min(240, Math.max(0, 35 * port.currentDepartures)) + ", .8)"
                    console.log(port.currentDepartures);
                    context2006.beginPath();
                    path2006({
                        type: "GeometryCollection",
                        geometries: [port.circle]
                    });
                    context2006.fill()
                    context2006.stroke();
                }
            }




        //}

        //if (env.portsCircles1996) {
            context1996.strokeStyle = "#777";
            for (id in env.portsData1996) {
                var port = env.portsData1996[id]
                if (typeof port.circle !== 'undefined') {
                    context1996.fillStyle = "rgba(" + Math.min(255, Math.max(199, 35 * port.currentDepartures)) + ", " + Math.min(240, Math.max(0, 35 * port.currentDepartures)) + ", " + Math.min(240, Math.max(0, 35 * port.currentDepartures)) + ", .8)"
                    console.log(port.currentDepartures);
                    context1996.beginPath();
                    path1996({
                        type: "GeometryCollection",
                        geometries: [port.circle]
                    });
                    context1996.fill()
                    context1996.stroke();
                }
            }
        //}
        context2006.fillStyle = "#EEE";
        context2006.strokeStyle = "#999";
        context2006.lineWidth = .5 * ratio;
        context2006.beginPath(), path2006(graticule), context2006.stroke();
        context2006.lineWidth = 2.5 * ratio, context2006.strokeStyle = "#000";
        context2006.beginPath(), path2006({
            type: "Sphere"
        }), context2006.stroke();

        context1996.fillStyle = "#EEE";
        context1996.strokeStyle = "#999";
        context1996.lineWidth = .5 * ratio;
        context1996.beginPath(), path1996(graticule), context1996.stroke();
        context1996.lineWidth = 2.5 * ratio, context1996.strokeStyle = "#000";
        context1996.beginPath(), path1996({
            type: "Sphere"
        }), context1996.stroke();
    }


    env.portsCircles2006 = [];
    env.portsData2006 = {};
    env.portsCircles1996 = [];
    env.portsData1996 = {};

    d3.json("data/world.json", function(error, world) {
        land = topojson.feature(world, world.objects.land);
        boundaries = topojson.mesh(world, world.objects.countries, function(a, b) {
            return a !== b;
        });
    });

    var ports_2006_OK = false;
    var ports_1996_OK = false;
    d3.json("data/ports_2006.json", function(error, data) {
        if (error) {
            console.log(error)
            throw error;
        }
        env.portsData2006 = data;
        ports_2006_OK = true;
        if (ports_1996_OK)
            updatePorts()
    });
    d3.json("data/ports_1996.json", function(error, data) {
        if (error) {
            console.log(error)
            throw error;
        }
        env.portsData1996 = data;
        ports_1996_OK = true;
        if (ports_2006_OK)
            updatePorts()
    });



    function updatePorts() {
        //env.portsCircles2006 = []
        for (id in env.portsData2006) {
            var port = env.portsData2006[id]
            delete port.circle
            if (typeof port.currentDepartures !== 'undefined' && port.currentDepartures >= 1) {
                var circle = d3.geo.circle().angle(3).origin([port.lon, port.lat]);
                //env.portsCircles2006.push(circle());
                port.circle = circle();
            }
        }
        //env.portsCircles1996 = []
        // for (id in env.portsData1996) {
        //     var port = env.portsData1996[id]
        //     if (typeof port.currentDepartures !== 'undefined' && port.currentDepartures >= 1) {
        //         var circle = d3.geo.circle().angle(3).origin([port.lon, port.lat]);
        //         env.portsCircles1996.push(circle());
        //     }
        // }
        for (id in env.portsData1996) {
            var port = env.portsData1996[id]
            delete port.circle
            if (typeof port.currentDepartures !== 'undefined' && port.currentDepartures >= 1) {
                var circle = d3.geo.circle().angle(3).origin([port.lon, port.lat]);
                //env.portsCircles1996.push(circle());
                port.circle = circle();
            }
        }

    }


    var portsDepartures_2006_OK = false;
    var portsDepartures_1996_OK = false;

    d3.json("data/eg-ports-7-2006.json", function(error, data) {
        env.allEvents2006 = data;


        portsDepartures_2006_OK = true;
        if (portsDepartures_1996_OK)
            running = newDay();
    });

    d3.json("data/eg-ports-7-1996.json", function(error, data) {
        env.allEvents1996 = data





        portsDepartures_1996_OK = true;
        if (portsDepartures_2006_OK)
            running = newDay();
    });

    env.allEvents2006 = [];
    env.allEvents1996 = [];



    d3.select("#slider").on('change', function() {
        console.log(this.value)

        if (currentDay != this.value) {
            clearTimeout(running);
            running = newDay(parseInt(this.value, 10))

        }
    });


    var currentDay = 1;
    var running = false;
    var timePause = false;

    function newDay(forceDay) {
        if (timePause)
            return;

        if (typeof forceDay !== undefined && typeof forceDay === 'number') {
            currentDay = forceDay;
        } else {
            currentDay = (currentDay % 366) + 1;
            d3.select("#slider").value = currentDay;
        }

        console.log("current day :" + currentDay);
        var d2006 = new Date("2006/01/01")
        d2006.setDate(currentDay)
        var from = moment(d2006).format('MMMM Do');
        d2006.setDate(currentDay + 15)
        var to = moment(d2006).format('MMMM Do');
        d3.select('#y2006>h4').text(from + " to " + to);


        for (port in env.portsData2006) {
            env.portsData2006[port].present = false;
        }
        env.allEvents2006[currentDay - 1].forEach(function(port) {
            if (typeof env.portsData2006[port] === 'undefined') {
                //console.log('2006-> '+port);
            } else {
                env.portsData2006[port].present = true

            }
        });
        for (port in env.portsData2006) {
            if (env.portsData2006[port].present) {
                if (typeof env.portsData2006[port].currentDepartures != 'undefined') {
                    env.portsData2006[port].currentDepartures += 1;
                } else {
                    env.portsData2006[port].currentDepartures = 0;
                }
            } else {
                env.portsData2006[port].currentDepartures = 0;
            }
        }

        var d1996 = new Date("1996/01/01")
        d1996.setDate(currentDay)

        var from = moment(d1996).format('MMMM Do');
        d1996.setDate(currentDay + 15)
        var to = moment(d1996).format('MMMM Do');
        d3.select('#y1996>h4').text(from + " to " + to);



        for (port in env.portsData1996) {
            env.portsData1996[port].present = false;
        }
        env.allEvents1996[currentDay - 1].forEach(function(port) {
            if (typeof env.portsData1996[port] === 'undefined') {
                //console.log('1996-> '+port);
            } else {
                env.portsData1996[port].present = true

            }
        });
        for (port in env.portsData1996) {
            if (env.portsData1996[port].present) {
                if (typeof env.portsData1996[port].currentDepartures != 'undefined') {
                    if (currentDay === 1) {
                        env.portsData1996[port].currentDepartures = 1;
                    } else {
                        env.portsData1996[port].currentDepartures += 1;
                    }
                } else {
                    env.portsData1996[port].currentDepartures = 0;
                }
            }
        }
        //updateTable(1996);
        //updateTable(2006);

        updatePorts();

        if (pause || actionPause) {
            redraw()
        }
        return setTimeout(newDay, 1000);

    }

    function updateTable(year) {
        var e = env['allEvents' + year];
        if (typeof e === 'undefined') {
            console.log("e is undef");
        }
        var tbody = document.querySelector('#y' + year + ' tbody');
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }
        for (var i = 0; i < 5; i++) {
            var port = env['portsData' + year][e[currentDay - 1].portsDepartures[i].id];

            var tr = document.createElement('tr')
            var td = document.createElement('td')
            td.textContent = i + 1;
            tr.appendChild(td);
            td = document.createElement('td')
            td.textContent = port.name;
            tr.appendChild(td);
            td = document.createElement('td')
            td.textContent = port.currentDepartures;
            tr.appendChild(td);
            tbody.appendChild(tr);
        }
    }


    var actionPause = false;
    d3.select("#playButton").on('click', function() {
        //console.log("play");
        actionPause = false;
        d3.select("#playButton").classed({
            'hidden': true
        })
        d3.select("#pauseButton").classed({
            'hidden': false
        })
    })
    d3.select("#pauseButton").on('click', function() {
        //console.log("pause");
        d3.select("#pauseButton").classed({
            'hidden': true
        })
        d3.select("#playButton").classed({
            'hidden': false
        })
        actionPause = true;
    })
})();

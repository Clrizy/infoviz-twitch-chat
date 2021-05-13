let chat_dataset;
let curr_dataset = ""
let textYscale;
let sentimentRect1, sentimentRect2, sentimentText1, sentimentText2;
let svg;
let vis_svg;


d3.csv('https://gist.githubusercontent.com/gaoag/21f3b913ecb477e643182a52161b5311/raw/ddf16d0ae32d0decf8a0818b36c62ca68466fe47/pokichattext.csv').then(data => {
    chat_dataset = data
    curr_dataset = "poki"
    console.log(chat_dataset)
    createScales()
    setTimeout(drawInitial(), 100)
})

function changeDataset() {
    if (curr_dataset === "poki") {
        d3.csv('https://gist.githubusercontent.com/gaoag/64bb7163dc78205bcdc3436e2fd107da/raw/b102cac4d1ff85fcf44d683ec6af012e180d11a1/t1chattext.csv').then(data => {
            chat_dataset = data
            curr_dataset = "t1"
            setTimeout(drawInitial(), 100)
        })
    } else {
        d3.csv('https://gist.githubusercontent.com/gaoag/21f3b913ecb477e643182a52161b5311/raw/ddf16d0ae32d0decf8a0818b36c62ca68466fe47/pokichattext.csv').then(data => {
            chat_dataset = data
            curr_dataset = "poki"
            setTimeout(drawInitial(), 100)
        })
    }

    
}

function createScales(){
    textYscale = d3.scaleLinear(d3.extent(chat_dataset, d => d.index), [0, 100])
}

function reset() {
        console.log('redrawing')
        svg.selectAll("text").remove()
        vis_svg.selectAll("rect").remove()
        vis_svg.selectAll("text").remove()
        d3.select("#chat-messages").selectAll("svg").remove()
        d3.select("#chat-viz").selectAll("svg").remove()
}

function drawInitial() {

    
    svg = d3.select("#chat-messages")
                    .append('svg').attr('width', '100%').attr('height', '100%')
    // Create text elements 
    let chat_messages = svg
    .selectAll('text')
    .data(chat_dataset)
    .enter()
    chat_messages.append('text')
        .attr('fill', 'black')
        .attr('class', 'chat_text')
        .attr('x', 60)
        .attr('y', (d, i) => i*24)
        .attr('opacity', 0)
        .attr('font-size', 20)
        .attr('text-anchor', 'start')
        .text(function(d) {
            return d.message
        });

    
    chat_messages.append('text')
        .attr('fill', 'black')
        .attr('class', 'score_text')
        .attr('x', 50)
        .attr('y', (d, i) => i*24)
        .attr('opacity', 0)
        .attr('font-size', 20)
        .attr('text-anchor', 'end')
        .text(function(d) {
            let score = "";
            if (d.individual_sentiment > 0) {
                score = "+"
            }
            return (score + d.individual_sentiment).substring(0, 5)
        });

    vis_svg = d3.select("#chat-viz").append('svg').attr('width', '100%').attr('height', '100%')
    
    // // Create bar graph elements that show: what?
    
    let barArray = [0, 0, 0]
    let totalWidth = $('#chat-viz').width();
    let percentageRects = vis_svg.selectAll('rect').data(barArray).enter()
                .append('rect')
                .attr('class', 'percentage_rects')
                .attr('height', 30)
                .attr('width', totalWidth / 3 - 1)
                .attr('y', 30)
                .attr('x', function(d, i) {
                    return totalWidth/3 * i + 1 * i;
                }).attr('fill', function(d, i) {
                    if (barArray[0] == 0 && barArray[1] == 0 && barArray[2] == 0) {
                        console.log('did this')
                        return 'lightgrey';
                    } else {
                        let colors = ['steelblue','lightgrey', 'maroon'];
                        
                        return colors[i]
                    }
                })

    let percentages = vis_svg.selectAll('text').data(barArray).enter()
                .append('text')
                .attr('class', 'percentage_text')
                .attr('font-size', 15)
                .attr('y', 30 + 20)
                .attr('x', 0)
                .attr('fill', 'white')

    let explainer = vis_svg.append('text').attr('fill', 'black').attr('x', 0).attr('y', 23).attr('font-size', 15)
    .attr('class', 'big_text').text('Proportion of positive, neutral, negative messages')

    let explainer2 = vis_svg.append('text').attr('fill', 'black').attr('x', 0).attr('y', 85).attr('font-size', 15)
    .attr('class', 'big_text').text('Overall sentiment so far')

    // now append some extra rectangles for the overall sentiment
    sentimentRect1 = vis_svg.append('rect').attr('class', 'sentiment_rects').attr('height', 30).attr('y', 90).attr('fill', 'steelblue')
    sentimentRect2 = vis_svg.append('rect').attr('class', 'sentiment_rects').attr('height', 30).attr('y', 90).attr('fill', 'maroon')
    sentimentText1 = vis_svg.append('text').attr('text', 'sentiment_text').attr('font-size', 15).attr('y', 90 + 18).attr('fill', 'white')
    sentimentText2 = vis_svg.append('text').attr('text', 'sentiment_text').attr('font-size', 15).attr('y', 90 + 18).attr('fill', 'white')

}

function drawfunction(index){

    // if the index gets to a certain number, call changedataset (which redoes draw initial and clears everything) and set the index back down depending on the 
    if (index !== 30) {
        if (index > 30) {
            if (curr_dataset !== 't1') {
                reset()
                changeDataset('t1')
            }
            index -= 30
        } else {
            if (curr_dataset !== 'poki') {
                reset()
                changeDataset('poki')
            }
        }
    } else {
       // reset 
        reset()
        if (curr_dataset !== 't1') {
            changeDataset('t1')
        } else {
            drawInitial()
        }
        index = 0 
    }
    
    let svg = d3.select("#chat-messages")
                    .select('svg')
                    .attr('width', '100%')
                    .attr('height', '100%')
                    

    console.log(index)

    svg.selectAll('.chat_text')
        .attr('fill', function(d, i) {
            if (i === index) {
                return (d.individual_sentiment == 0) ? "darkgrey" : (d.individual_sentiment > 0 ? "steelblue" : "maroon")
            } else {
                return 'black';
            }
        })
        .attr('opacity', function(d, i) {
            return (i == index) ? 1.0 : ((i < index) && (i > (index - 15)) ? 1 - (index-i)*0.066 : 0)
        })
        .attr('y', function(d, i) {
            return (i - index)*24 + $('#chat-messages').height() - 20
        });

    svg.selectAll('.score_text')
        .attr('fill', function(d, i) {
            return (d.individual_sentiment == 0) ? "darkgrey" : (d.individual_sentiment > 0 ? "steelblue" : "maroon")
        })
        .attr('opacity', function(d, i) {
            return (i == index) ? 1.0 : ((i < index) && (i > (index - 15)) ? 1 - (index-i)*0.066 : 0)
        })
        .attr('y', function(d, i) {
            return (i - index)*24 + $('#chat-messages').height() - 20
        });

    // model: we initialize with a full grey rect crew, based on the barArray.
    // then, we modify the barArray and rebind the data. it should auto-modify the initial stuff defined above without need to redo your "attrs". 
    
    if (index > 0) {
        let avgSent = chat_dataset[index-1].cumulative_sentiment / index
        let totalWidth = $('#chat-viz').width();
        let vis_svg = d3.select("#chat-viz").select('svg')
        let barArray = [0, 0, 0]
        let xPoses = [0, 0, 0]
        
        for (let j = 0; j <= index; j++) {
            let sent = chat_dataset[j].individual_sentiment
            let barArrayIndex = (sent > 0) ? 0 : ((sent < 0) ? 2 : 1)
            barArray[barArrayIndex] += 1
        }
    
        barArray = barArray.map(function(elem) {return elem/(index+1)})
        
        for (let i = 0; i < 3; i++) {
            let totalWidthSoFar = 0;
            for (let j = 0; j < i; j++) {
                totalWidthSoFar += totalWidth*barArray[j]
            }
            xPoses[i] = totalWidthSoFar + 1*i
        }
        
        vis_svg.selectAll('.percentage_rects')
            .attr('width', function(d, i) {
                let rectWidth = totalWidth*barArray[i] - 1
                return rectWidth > 0 ? rectWidth : 0;
            }).attr('x', function(d, i) {
                return xPoses[i];
            }).attr('fill', function(d, i) {
                if (barArray[0] == 0 && barArray[1] == 0 && barArray[2] == 0) {
                    return 'lightgrey';
                } else {
                    let colors = ['steelblue','lightgrey', 'maroon'];
                    
                    return colors[i]
                }
            })


        vis_svg.selectAll(".percentage_text")
            .attr('fill', 'white')
            .attr('y', 30+20)
            .attr('x', function(d, i) {return xPoses[i]})
            .text(function(d, i) {return (barArray[i]*100).toFixed(1) + "%"})

        
        let posSent = chat_dataset[index].total_pos_sentiment;
        let negSent = chat_dataset[index].cumulative_sentiment - posSent;
        let rect1Width = totalWidth * (posSent / (posSent - negSent)) - 1;
        let rect2Width = totalWidth - rect1Width - 1;
        sentimentRect1.attr('width', rect1Width).attr('x', 0)
        sentimentRect2.attr('width', rect2Width).attr('x', rect1Width + 1);
        sentimentText1.attr('x', 2).text(("+" + posSent).substring(0,5))
        sentimentText2.attr('x', rect1Width + 2).text(("" + negSent).substring(0, 5))

    }
    

    // then, we update some text abt the avg sentiment. 
    
}

// let containerStart = document.getElementById('sections').getBoundingClientRect().top
let containerStart = $( "#sections" ).offset().top
let scroll = scroller().container(d3.select('#d3graphic'), containerStart)
scroll()
let lastIndex, activeIndex = 0
//This is where most of the magic happens. Every time the user scrolls, we receive a new index. First, we find all the irrelevant sections, and reduce their opacity. 
scroll.on('active', function(index){
  d3.selectAll('.step')
    .transition().duration(500)
    .style('opacity', function (d, i) {
        if (i === index) {
            console.log(d)
            return 1
        } else {
            return 0.15
        }
    
    });
//Next, we selection from a range of activationFunctions (which we create), based on the index of the current section. 
  activeIndex = index
  let sign = (activeIndex - lastIndex) < 0 ? -1 : 1;
  let scrolledSections = d3.range(lastIndex + sign, activeIndex + sign, sign);

  // if the current section is the last section:

  scrolledSections.forEach(i => {

    drawfunction(i);
  })
  lastIndex = activeIndex;
})







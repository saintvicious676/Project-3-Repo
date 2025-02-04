let data  // make data globally available

// plotly dark template from co-pilot ...
let template_dark= {
paper_bgcolor: 'black',
plot_bgcolor: 'black',
font: { color: 'white' },
xaxis: {
    gridcolor: 'gray',
    zerolinecolor: 'gray'
},
yaxis: {
    gridcolor: 'gray',
    zerolinecolor: 'gray'
},
title: {
    text: 'Bar Chart Example',
    font: {size: 24},
    xref: 'paper',
    x: 0.05,
}
};


d3.csv("cleaned_data.csv").then(d => {
    data = d;
    console.log(data);

    d3.json("analysis.json").then(d => init (d))
});

function init(analysis_data) {
    // populate the dropdown menu
    let rest_dropdown = d3.select("#selRestaurant");
    let item_dropdown = d3.select("#selItem");
    rest_dropdown.on("change", restChanged);
    item_dropdown.on("change", itemChanged);

    // get list of restaurants
    restaurants = Array.from(new Set(data.map(item => item.restaurant)));

    // build the restaurant dropdown list
    rest_dropdown.html('');
    restaurants.forEach(restaurant => {
        rest_dropdown.append("option").text(restaurant).property("value", restaurant);
    });

    // build the restaurant items dropdown list
    items = build_item_dropdown(restaurants[0]);

    // populate the analysis boxes
    Object.keys(analysis_data).forEach(id => {
        box = d3.select("#" + id);
        box.html('');
        box.append('h5').attr('class', 'card-title').text(analysis_data[id][0]);
        box.append('p').attr('class', 'card-text').text(analysis_data[id][1]);
    });

    build_charts(restaurants[0], items[0]);
}

function build_charts(restaurant, item) {
    console.log(restaurant, item);
    console.log(data.filter(d => d.restaurant == restaurant && d.item == item));

    // get the selected restaurant item
    item = data.filter(d => d.restaurant == restaurant && d.item == item)[0];

    // get labels and values for numeric entries
    delete(item.restaurant)
    delete(item.item)

    let trace = [
        {
          x: Object.keys(item),
          y: Object.values(item),
          type: 'bar'
        }
      ];
      
      Plotly.newPlot('plot', trace, template_dark);
}

function build_item_dropdown(restaurant) {

    items = data.filter(item => item.restaurant == restaurant).map(item => item.item)

    // build the restaurant items dropdown list
    let item_dropdown = d3.select("#selItem");
    item_dropdown.html('');
    items.forEach(item => {
        item_dropdown.append("option").text(item).property("value", item);
    });
    
    return items
}

function restChanged() {
    restaurant = d3.select(this).property("value");
    build_charts(restaurant, build_item_dropdown(restaurant)[0]);
}

function itemChanged() {
    restaurant = d3.select("#selRestaurant").property("value");
    item = d3.select(this).property("value");
    build_charts(restaurant, item);
}
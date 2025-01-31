//Trying to get FastFoodRestaurants.geojson into createFeatures function

function createFeatures(fastFoodFeatures) {
    function onOneFeature(feature, layer) {
         layer.bindPopup(feature.properties.name)

    }

    let mcdonalds = L.geoJSON(fastFoodFeatures, {
        onEachFeature: onOneFeature,
        filter: function(feature) {
            if (feature.properties.name == "McDonald's")
                return feature.properties.name == "McDonald's"
        }
    })
    
    let bk = L.geoJSON(fastFoodFeatures, {
        onEachFeature: onOneFeature,
        filter: function(feature) {
            if (feature.properties.name == "Burger King")
                return feature.properties.name == "Burger King"
        }
    })//This piece of code creates a layer with markers with the name of the restaurant

    let tacoBell = L.geoJSON(fastFoodFeatures, {
        onEachFeature: onOneFeature,
        filter: function(feature) {
            if (feature.properties.name == "Taco Bell")
                return feature.properties.name == "Taco Bell"
        }
    })

    let subway = L.geoJSON(fastFoodFeatures, {
        onEachFeature: onOneFeature,
        filter: function(feature) {
            if (feature.properties.name == "Subway")
                return feature.properties.name == "Subway"
        }
    })

    let cfa = L.geoJSON(fastFoodFeatures, {
        onEachFeature: onOneFeature,
        filter: function(feature) {
            if (feature.properties.name == "Chick-fil-A")
                return feature.properties.name == "Chick-fil-A"
        }
    })

    let wendys = L.geoJSON(fastFoodFeatures, {
        onEachFeature: onOneFeature,
        filter: function(feature) {
            if (feature.properties.name == "Wendy's")
                return feature.properties.name == "Wendy's"
        }
    })

    let dominos = L.geoJSON(fastFoodFeatures, {
        onEachFeature: onOneFeature,
        filter: function(feature) {
            if (feature.properties.name == "Domino's Pizza")
                return feature.properties.name == "Domino's Pizza"
        }
    })

    let pizzaHut = L.geoJSON(fastFoodFeatures, {
        onEachFeature: onOneFeature,
        filter: function(feature) {
            if (feature.properties.name == "Pizza Hut")
                return feature.properties.name == "Pizza Hut"
        }
    })

    let sonic = L.geoJSON(fastFoodFeatures, {
        onEachFeature: onOneFeature,
        filter: function(feature) {
            if (feature.properties.name == "Sonic Drive-In")
                return feature.properties.name == "Sonic Drive-In"
        }
    })

    let culver = L.geoJSON(fastFoodFeatures, {
        onEachFeature: onOneFeature,
        filter: function(feature) {
            if (feature.properties.name == "Culver's")
                return feature.properties.name == "Culver's"
        }
    })

    createMap(mcdonalds, bk, tacoBell, subway, cfa, wendys, dominos, pizzaHut, sonic, culver)
}
//how to pass in multiple geoJSONs into this function?
//maybe not even need a function


function createMap(mcdonalds, bk, tacoBell, subway, cfa, wendys, dominos, pizzaHut, sonic, culver) {
    let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })

    var allChains = new L.MarkerClusterGroup()
    allChains.addLayer(mcdonalds)
    allChains.addLayer(bk)
    allChains.addLayer(tacoBell)
    allChains.addLayer(subway)
    allChains.addLayer(cfa)
    allChains.addLayer(wendys)
    allChains.addLayer(dominos)
    allChains.addLayer(pizzaHut)
    allChains.addLayer(sonic)
    allChains.addLayer(culver)

    var mcdChain = new L.MarkerClusterGroup()
    mcdChain.addLayer(mcdonalds)

    var bkChain = new L.MarkerClusterGroup()
    bkChain.addLayer(bk)
    
    var tacoBellChain = new L.MarkerClusterGroup()
    tacoBellChain.addLayer(tacoBell)

    var subwayChain = new L.MarkerClusterGroup()
    subwayChain.addLayer(subway)

    var cfaChain = new L.MarkerClusterGroup()
    cfaChain.addLayer(cfa)

    var wendysChain = new L.MarkerClusterGroup()
    wendysChain.addLayer(wendys)

    var dominoChain = new L.MarkerClusterGroup()
    dominoChain.addLayer(dominos)

    var phChain = new L.MarkerClusterGroup()
    phChain.addLayer(pizzaHut)

    var sonicChain = new L.MarkerClusterGroup()
    sonicChain.addLayer(sonic)

    var culverChain = new L.MarkerClusterGroup()
    culverChain.addLayer(culver)

    let baseMaps = {
        "Street Map" : street
    }

    let overlayMap = {
        All: allChains,
        McDonalds: mcdChain,
        BK : bkChain,
        Wendys: wendysChain,
        Sonic: sonicChain,
        Culvers: culverChain,
        TacoBell: tacoBellChain,
        Subway: subwayChain,
        ChickFilA: cfaChain,
        Dominos: dominoChain,
        PizzaHut: phChain
    }

    let myMap = L.map("map", {
        center: [38.85, -97.65],
        zoom: 5,
        layers: [street, allChains]
      });

      L.control.layers(baseMaps, overlayMap).addTo(myMap)
}


d3.json("FastFoodRestaurants.geojson")
  .then(function(response) {
    data = response;  // Store the response in our variable
    console.log(data);
    createFeatures(data.features)
  })
  .catch(function(error) {
    console.log("Error loading the GeoJSON file:", error);
  });


//Original Centered Map Code
//let myMap = L.map("map", {
//    center: [38.85, -97.65],
//    zoom: 5
//  });
  
  // Added a tile layer
 // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 // }).addTo(myMap);

# Project-3-Repo
**Overview**<br>
Our group chose to take on the concept of informing potential franchise investors on which fast food chain fits them best. This information can also be used to inform the companies of findings that can be used to expand or inform internal changes. We approached it by creating a webpage that shows valuable metrics for deciding which franchise, if any, provides the best investment. These metrics include nutrtional values for the food of the franchise, revenue sales & distribution, locations of stores within the United States, and which franchises are the most popular in the US. <br>
<br>
**Setup:**<br>
**Data Cleaning:**
There were multiple outliers in the data expecially in the nutrition set(50 piece platter meals) which were dropped. Duplicates and nulls were removed as well.<br>
<br>
The CSV file for the location of fast food restaurants in the US was converted into a geoJSON file. <br>
<br>
The data from all group members was then uploaded to PGADMIN SQL due to it being an easy to use relational database. Each group member created a sql table for their portion of the project and a database was created using all 4 of the tables.<br>
<br>
**Fast Food Locations Map Creation:**<br>
The map was created by using Leaflet to plot out the locations of the different fast food restaurants from the converted geoJSON file. This map includes 10 of the top fast food franchises in the United States, each of which pop up individually. To do this I filtered each feature to only include the restaurants with the exact name. and create a pop-up with the name of the restaurant. To reduce the clutter and load time of the webpage, I created a cluster group containing clusters for each of the different franchises which grouped each franchise into its own bubble with a number based on the amount of restaurants that were in the are. To further filter and sort the different franchises, I created an overlay to be able to toggle which franchises were shown on the map at a time.<br>
<br>

**Application for Actionable Insights:**<br>
**Leaflet Map with Locations of Restaurants:**<br>
The purpose of the leaflet map containing the locations of popular fast food chains in the United States is to help business executives and future franchisees make informed decisions on where and how to expand their business. Being able to see the locations of some of the top fast food chains in America can help inform businesses of expansion to areas that are under-serviced and even areas that are over-saturated with categories of food they may offer. In addition to seeing the saturation of locations, the map can help with geographic diversity, and potentially branching out to different parts of the US to avoid being limited or dependent on a single type of region (rural or urban). The information can be used in conjunction with logistical analysis to create a plan of action that ensures supplies are delivered to current locations, or potential locations, in an efficient manner, which could lead to minimizing operational costs. From a research and data analysis perspective, this map could also help gather data from different areas of the United States and learn customer preferences and trends in distinct regions, which can allow management to fine-tune the offerings and even allow the marketing teams to come up with specific strategies for the different regions.<br> 
**Usage:** The map is able to be toggled among all the locations of the restaurants in the dropdown menu, as well as be specific as to which restaurants to be shown, with no limit amongst the choices. Users start the map from the middle of the United States with all locations being toggled on and can navigate to the dropdown menu on the top right of the map to select which franchises to view. The map uses clusters to group locations. To zoom in on a certain part of the map, users can scroll into the area of interest, or click on the cluster group and it will zoom in automatically. To see what restaurants are present in the area, users can click on the marker and a pop-up of the restaurants name will show up above the marker.<br>
<br>
**Data source for map:** https://www.kaggle.com/datasets/rishidamarla/fast-food-restaurants-in-america <br>
**Code source for map creation:** https://leafletjs.com/2012/08/20/guest-post-markerclusterer-0-1-released.html <br>
https://leafletjs.com/examples/geojson/<br>
**Code reference:** To utilize the data source, I used this website to convert the CSV file into a geoJSON file for Leaflet: https://www.convertcsv.com/csv-to-geojson.htm <br>
<br>
**Ethical Considerations to Project**: <br>
We minimized the data collection to only include relevant information and not include personal information or any identifying characteristics that would be deemed harmful. Specifically for the data regarding for fast food locations, only the location details were gathered and not any personal information about workers from that location. This retains the anonymity of the individuals while allowing us to use the other details of the restaurant.

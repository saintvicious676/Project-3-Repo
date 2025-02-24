# Project-3-Repo
**Overview**<br>
Our group chose to take on the concept of informing potential franchise investors on which fast food chain fits them best. We approached it by creating a webpage that shows valuable metrics for deciding which franchise, if any, provides the best investment. These metrics include nutrtional values for the food of the franchise, revenue sales & distribution, locations of stores within the United States, and which franchises are the most popular in the US. <br>
<br>
**Setup:**<br>
**Data Cleaning:**
There were multiple outliers in the data expecially in the nutrition set(50 piece platter meals) which were dropped.
Duplicates and nulls were removed as well.<br>
The Data was then uploaded to PGADMIN SQL due to it being an easy to use relational data base.

**Application for Actionable Insights:**<br>
<br>
**Leaflet Map with Locations of Restaurants:**<br>
The purpose of the leaflet map containing the locations of popular fast food chains in the United States is to help business executives and future franchisees make informed decisions on where and how to expand their business. Being able to see the locations of some of the top fast food chains in America can help inform businesses of expansion to areas that are under-serviced and even areas that are over-saturated with categories of food they may offer. In addition to seeing the saturation of locations, the map can help with geographic diversity, and potentially branching out to different parts of the US to avoid being limited or dependent on a single type of region (rural or urban). The information can be used in conjunction with logistical analysis to create a plan of action that ensures supplies are delivered to current locations, or potential locations, in an efficient manner, which could lead to minimizing operational costs. From a research and data analysis perspective, this map could also help gather data from different areas of the United States and learn customer preferences and trends in distinct regions, which can allow management to fine-tune the offerings and even allow the marketing teams to come up with specific strategies for the different regions.<br> 
**Usage:** The map is able to be toggled among all the locations of the restaurants in the dropdown menu, as well as be specific as to which restaurants to be shown, with no limit amongst the choices. Users start the map from the middle of the United States with all locations being toggled on and can navigate to the dropdown menu on the top right of the map to select which franchises to view. The map uses clusters to group locations. To zoom in on a certain part of the map, users can scroll into the area of interest, or click on the cluster group and it will zoom in automatically. To see what restaurants are present in the area, users can click on the marker and a pop-up of the restaurants name will show up above the marker.<br>
<br>
**Data source for map:** https://www.kaggle.com/datasets/rishidamarla/fast-food-restaurants-in-america <br>
**Code reference:** To utilize the data source, I used this website to convert the csv file into a geoJSON file for Leaflet: https://www.convertcsv.com/csv-to-geojson.htm <br>


The Data was then uploaded to PGADMIN SQL due to it being an easy to use relational data base.

Project Requirements
Data Visualization Track Requirements (75 points)
Data and Delivery (20 points)
The dataset contains at least 100 unique records. (5 points)

A database is used to house the data (SQL, MongoDB, SQLite, etc.). (5 points)

The GitHub repo has a README.md that includes the following: (10 points)

An overview of the project and its purpose

Instructions on how to use and interact with the project

At least one paragraph summarizing efforts for ethical considerations made in the project

References for the data source(s)

References for any code used that is not your own

Visualizations (25 points)
A minimum of three unique views present the data. (10 points)
The visualizations are presented in a clear, digestible manner. (5 points)
The data story is easy to interpret for users of all levels. (10 points)
Usability (30 points)
The script, notebook, or webpage created to showcase data visualizations runs without error. (10 points)

A Python or JavaScript library not shown in class is used in the project. (10 points)

The project includes some level of user-driven interaction, conforming to one of the following designs: (10 points)

HTML menus, dropdowns, and/or textboxes to display JavaScript-powered visualizations

Flask backend with interactive API routes that serve back Python or JavaScript created plots

Visualizations created from user-selected filtered data

Data Engineering Track Requirements (75 points)
Database Design (40 points)
The project uses ETL workflows to ingest data into the database. (10 points)

The original dataset(s) are transformed prior to storing it in the database. (5 points)

A database is used to house the data (SQL, MongoDB, SQLite, etc.). (5 points)

The database has at least two tables (SQL) or collections (NoSQL). (5 points)

The project documents the choice of the database used and why. (5 points)

The project includes documentation of the ETL workflow with diagrams or ERD. (10 points)

Data and Delivery (35 points)
The database contains at least 100 unique records. (5 points)

The project uses one additional library not covered in class related to data engineering. (10 points)

The project includes a method for reading data from the database and displaying it for future use, such as: (10 points)

Pandas DataFrame

Flask API with JSON output

The GitHub repo has a README.md that includes the following: (10 points)

An overview of the project and its purpose

Instructions on how to use and interact with the project

At least one paragraph summarizing efforts for ethical considerations made in the project

References for the data source(s)

References for any code used that is not your own

Both Track Requirements
Group Presentation (25 points)
All group members speak during the presentation. (5 points)
The content is relevant to the project. (5 points)
The presentation maintains audience interest. (5 points)
Content, transitions, and conclusions flow smoothly within any time restrictions. (10 points)


# DC Crime Analysis Dashboard

## GW Data Analytics Bootcamp - Final Project

By Reena Desai, Jimmy White, Mario Cosby, and Tim St. Onge
("The Justice League")

-----------------------

This web application allows for the visualization of spatial and temporal trends in five years of violent crime data (2014-2018) in Washington, DC. An interactive map, a line chart, and a series of time wheels allow for dynamic visualization of violent crime patterns across the city's geography, as well as over the course of 24-hour periods and a calendar year.

The application also includes a broad analysis of potential relationships between socioeconomic factors and crime incidents using linear regression models. Socioeconomic data is pulled from the Census Bureau's 2007-2012 American Community Survey, 5-year estimates. Five violent crime types (robbery, assault with a dangerous weapon, homicide, sex abuse, and all total violent crimes) are analyzed against percent below poverty line, percent unemployment, percent housing unit vacancy, and total population at the block group level.

Our objective in this project was to cut through a dense and lengthy dataset to allow for easy-to-use, customizable visualizations of trends.

The full web application resides here: https://justice-league-dashboard.herokuapp.com/

Application endpoints 
* https://justice-league-dashboard.herokuapp.com/map
    * This endpoint generates a line chart showing crime incidents aggregated by calendar month.
* https://justice-league-dashboard.herokuapp.com/time_wheel
    * This endpoint generates a time wheel visualization for observing all crime incidents in the context of 24 hours, charting crime incidents to the hourly time of day.
* https://justice-league-dashboard.herokuapp.com/line_chart
    * This endpoint generates a line chart visualizing violent crime data across a calendar year. THe chart is filterable by crime type as well as ward.
* https://justice-league-dashboard.herokuapp.com/machine_learning
    * This endpoint contains the machine learning analysis (linear regressions) conduced on our violent crimes dataset. In addition to providing context for the analysis, this page includes thumbnail images of each regression result (20 in all) and links to the Jupyter Notebooks providing full data pre-processing and analytical steps.
* https://justice-league-dashboard.herokuapp.com/bios
    * This page includes the team's biographical information and links to LinkedIn profiles.
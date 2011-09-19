# Fusion Tables Codelab

# Introduction

Fusion Tables is a modern data management web application making it easy to host, manage, collaborate on, visualize, and publish data tables online. Follow the steps below to upload your own data to Fusion Tables and create a map!

# Setting Up

* Download the [zip file](codelab.zip)
* Unzip. Zip file includes:  
  population.csv - Population data for zip codes around the bay area  
  map.html - Basic HTML page

# Fusion Tables

## Upload Data to Fusion Tables

1. Go to [Fusion Tables](http://www.google.com/fusiontables)

2. Select **New table > Import table**  
   ![import](import1.png)

3. Click **Choose File**  
   ![import](import.png)

4. Browse to find the population.csv file.

5. Click **Next**

6. Click **Next** again

7. Update the Table name to Bay Area Population. Add any attribution data and/or change the description.  
   ![import](import3.png)

8. Click **Finish**

9. The file will upload to Fusion Tables. Here's an example of what the table will look like in [Fusion Tables](http://www.google.com/fusiontables/DataSource?dsrcid=721636)


## Merge tables

Now that you have the Bay Area population data in Fusion Tables, we're going to merge with a table containing the zip code boundaries.

1.  Make sure you have the Population table open in your browser

2.  Click the **Merge** tab in the navigation

3.  Paste the following URL in the Text box under Merge with: [http://www.google.com/fusiontables/DataSource?dsrcid=702655](http://www.google.com/fusiontables/DataSource?dsrcid=702655)

4. Click the **Get** button

5. Select the columns you want to merge on. Make sure the radio button next to **Zip** is selected in the left column, and select the radio button next to **name** in the right column.

6. Enter a table name for your merged table in the text box next to **Save as a new table named**. Suggested name: Bay Area Population merged with KML.  
   ![merge](merge.png)

7. Click **Merge tables**.

8. Select **Visualize > Map**

9. Click on one of the polygons on the map to see what is displayed in the InfoWindow.

## Configure the InfoWindow

Now let's customize the content in the InfoWindow.

1. Click on **Configure info window**.

2. Deselect all checkboxes except for the 2 next to **Zip** and **Population**. Notice how the HTML in the right panel is updated as you do this.

3. Select the **Custom** tab.  
   ![infowindow](configureinfowindows.png)

4. Update the HTML to the following:	
        
        <div class='googft-info-window' style='font-family: sans-serif'>
		  <b>{Zip}</b><br>
	      <b>Population:<b> {Population}
		</div>

5. Click **Save**.

6. Click on one of the zip code boundaries. The InfoWindow content should be similar to the following:  
   **94403**  
   **Population:** 37919

## Styling

Now add some styling to the map to create an interesting visualization of the data.

1. Click **Configure styles**.

2. Select **Fill color** under **Polygons** in the left column.

3. Select the **Gradient** tab.

4. Select the radio button next to **Show a gradient**.

5. In the drop-down menu next to **Column**, select **Population**.

6. In the text box next to **Through**, enter the number **90900**.  
   ![style](style.png)

7. Select any colors you want in the drop-down menus or keep the default.

8. Click **Save** when done.

9. The map will be updated with the new style.

## Sharing and permissions

New tables are automatically set to Private. The visibility needs to be changed to Unlisted or Public to embed in a web page.

1. Click the **Share** button in the top right corner.

2. Select the radio button next to **Unlisted** or **Public**. The visibility will be updated immediately on selection.  
   ![visibility](visibility1.png)

3. Close the window.

## Using the FusionTablesLayer to Display the map

Now that you have a nice, styled map, it's time to display it into a webpage.

1. First, find the Table ID for your table. You can do this by either:
  * Copying the value of the dsrcid parameter at the end of the URL. It is a 6-digit number.
  * Selecting **File > About**. The Table ID is the value next to **ID**.

2. Open the map.html file using a Text Editor. This file is in the zip file you downloaded at the beginning of this tutorial.

3. Find the line that reads:
        
        var tableId = XXXXXX;

4. Replace the XXXXXX with your Table ID.

5. Review the code. The code creates a new Map and a FusionTablesLayer to display on the Map.

6. Save your updates.

7. Open the map.html file in a browser. You should see your Fusion Table data on the map.
  ![map](map.png)

8. Now, update the query sent to the Fusion Table Layer to include a filter. Tip: Use a [query](http://code.google.com/apis/maps/documentation/javascript/reference.html#FusionTablesLayer) to narrow down results (Advanced: allow the user to dynamically change the query)

9. View the HTML page in a browser again to see the map with the new filter.

## Advanced

This next section is for you to figure out :) A good place to get help will be in the [documentation](http://code.google.com/apis/maps/documentation/javascript/)

1. Add a [spatial clause](http://code.google.com/apis/fusiontables/docs/developers_reference.html#Select) to the query. For example, a distance query. (Advanced: allow the user to dynamically change the query - for example, dragging a Marker to change the center point)

2. Suppress info windows, and add your own click handler. Display information from the returned row in an info window or other info box on the page.

3. Set the style of the FusionTablesLayer to color the population polygons red.

4. Change the style so that areas with a population over 15000 are green (Advanced: allow the user to dynamically change the colors and opacity) 

# Useful tools

Here are a couple useful tools that will help you work with Fusion Tables:

1. [Shape Escape](http://shpescape.com).  
  Shape Escape allows you to upload shape files to Fusion Tables. Simply go to shpescape.com and select   
  the zipped shape file you want to upload. Shape Escape creates a Fusion Table with the shape file 
  data for you!

2. [FusionTablesLayer Builder](http://goo.gl/X0kG4)  
  Going a few steps beyond the built-in "Get embeddable code" feature, FusionTablesLayer Builder
  generates all the code necessary to include a Google Map with a Fusion Table Layer on your own
  website.

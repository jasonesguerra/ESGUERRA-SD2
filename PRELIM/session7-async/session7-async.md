# Bootstrap - Introduction and Simple Styles

# References
- [A Short Bootstrap Tutorial on the What, Why, and How](https://www.toptal.com/front-end/what-is-bootstrap-a-short-tutorial-on-the-what-why-and-how)
- [Bootstrap CSS Framework](https://getbootstrap.com/)
- [Introduction to Bootstrap 5.0](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [Bootstrap local vs. CDN](https://www.belugacdn.com/bootstrap-local-vs-cdn/)
- [Responsive Meta Tag](https://css-tricks.com/snippets/html/responsive-meta-tag/)
- [Sass](https://sass-lang.com/)
- [Bootstrap Tables](https://getbootstrap.com/docs/5.0/content/tables/)
- [Boostrap Color Utility Classes](https://getbootstrap.com/docs/5.0/customize/color/)
- [User Interface Design](https://www.interaction-design.org/literature/topics/ui-design)
- [User Experience Design](https://www.interaction-design.org/literature/topics/ux-design)
- [Color Theory For Designers](https://courseux.com/best-practices-for-buttons-the-user-experience-of-colors/)
- [Colors in UI Designers](https://usabilitygeek.com/colors-in-ui-design-a-guide-for-creating-the-perfect-ui/)
- [The Role of Color in UX](https://www.toptal.com/designers/ux/color-in-ux)
- [Bootstrap Containers](https://getbootstrap.com/docs/5.0/layout/containers/)
- [Color Picker](https://htmlcolorcodes.com/color-picker/)
- [Coolors](https://coolors.co/)
- [Bootstrap Text Utility Classes](https://getbootstrap.com/docs/5.0/utilities/text/)
- [What is Mobile First Design](https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00)
- [Bootstrap Border Utility Classes](https://getbootstrap.com/docs/5.0/utilities/borders/)
- [Bootstrap Sizing Utility Classes](https://getbootstrap.com/docs/5.0/utilities/sizing/)
- [HTML Blocks - tutorialspoint](https://www.tutorialspoint.com/html/html_blocks.htm)
- [HTML Blocks - w3schools](https://www.w3schools.com/html/html_blocks.asp)
- [HTML Elements](https://developer.mozilla.org/en-US/docs/Glossary/Element)
- [Bootstrap Position Utility Classes](https://getbootstrap.com/docs/5.0/utilities/position/)
- [Bootstrap Spacing Utility Classes](https://getbootstrap.com/docs/5.0/utilities/spacing/)
- [Bootstrap Display Utility Classes](https://getbootstrap.com/docs/5.0/utilities/display/)
- [Bootstrap Image Utility Classes](https://getbootstrap.com/docs/5.0/content/images/)

# Code Discussion

1. Folder and File Preparation

**batchfolder > individual > s14 > discussion > index.html**

Create a file named **index.html** inside the **discussion** folder.

2. Inside the index.html file, add the following:

**batchfolder > individual > s14 > discussion > index.html**

```html
<!DOCTYPE html>
<html>
<head>
	<title>Bootstrap Introduction and Simple Styles</title>
</head>
<body>

</body>
</html>
```

3. Apply Bootstrap to the project by adding all the dependencies.

**batchfolder > individual > s14 > discussion > index.html**

```html
<!DOCTYPE html>
<html>
<head>

	<!-- Mobile Responsive Meta Tag -->
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<!-- Bootstrap Link -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

	<title>Bootstrap Introduction and Simple Styles</title>

</head>
<body>

	<!-- Bootstrap Script -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
	<!-- End of Bootstrap Script -->

</body>
</html>
```

**IMPORTANT NOTE**
- Upon completion of this material, Bootstrap 5.0 was the latest version.
- To avoid any problems and errors encountered during the discussion, it is advised to implement the same version of Bootstrap.
- An alternative way of implementing Bootstrap is to download it and store a copy in the local project.
- Storing it locally within your files ensure that if any issues are encountered with the online resources of Bootstrap, the application will not break.
- Using this implementation does have it's pros and cons and one con of this method is it adds more files to our project that might create clutter.
- The Responsive Meta Tag is responsible for making Bootstrap work properly. It disables the browser zoom view and allows elements to be rendered to scale to the size of the screen.
- Sass is also another CSS Framework that we can implement in our project.
- Refer to "references" section of this file to find the documentations for A Short Bootstrap Tutorial on the What, Why, and How, Bootstrap CSS Framework, Sass, Bootstrap local vs. CDN and Responsive Meta Tag.
- Refer to "references" section of this file to find the documentation for Introduction to Bootstrap 4.6 on where to get the code snippets to apply Bootstrap into our project.

4. Create a header tag and center all the text elements.

**batchfolder > individual > s14 > discussion > index.html**

```html
<body class="text-center">
		
	<!-- Header -->
	<div>

	    <h1>Bootstrap Introduction and Simple Styles</h1>

	</div>
	<!-- End of Header -->

	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</body>
</html>
```

**IMPORTANT NOTE:**
- The discussion and the activity is done mainly using Bootstrap classes only to showcase the capabilities of Bootstrap and to give the students more experience in utilizing the different classes.
- Some approaches are made easier using other Bootstrap classes and Bootstrap components and are only done for the appreciation of the students.
- To apply Bootstrap to HTML elements, we give them the "class" attribute and provide them with classes that are pre-built with Bootstrap.
- The naming convention for bootstrap classes follows the kebab case where spaces are replaced with hyphens (-) and class names are written in all lowercase letters.
- The "text-center" class centers all text, images and button elements.
- A number of Bootstrap classes when applied cascade the styling changes to their child elements. By providing the body a class of "text-center" we apply a centered alignment for all applicable elements in our application.

5. Create a header tag and a table for Bootstrap Color Classes.

**batchfolder > individual > s14 > discussion > index.html**

```html  
<!-- ... -->
<body class="text-center">

	<!-- Bootstrap Color Classes Table -->
	<h2>Bootstrap Color Classes</h2>

	<table class="table table-dark table-bordered">
	    <thead>
	        <tr>
	            <th>Text</th>
	        </tr>
	    </thead>
	    <tbody>
	        <tr>
	            <td>
	                <a href="#" class="text-primary">
	                    Primary link
	                </a>
	            </td>
	        </tr>
	    </tbody>
	</table>
	<!-- End of Bootstrap Color Classes Table -->

	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</body>
<!-- ... -->
```

**IMPORTANT NOTE:**
- The "table" class changes the appearance of the default HTML table.
- The "table-dark" class changes the color of the table to a dark color.
- The "table-bordered" adds borders to our table for readability and styling.
- The "text-primary" class is one of the default colors for Bootstrap. Text color classes normally start with "text-" then combined with one of the default colors provided in Bootstrap to change the text color of an element.
- Refer to "references" section of this file to find the documentations for Bootstrap Tables and Boostrap Color Utility Classes.

6. Add more content to the table to display all the text colors available in bootstrap.

**batchfolder > individual > s14 > discussion > index.html**

```html  
<!-- ... -->
<body class="text-center">

	<!-- ... -->

	<table class="table table-dark table-bordered">
	    <!-- ... -->
	    <tbody>
	        <tr>
	            <!-- ... -->
	        </tr>
	        <tr>
	            <td>
	                <a href="#" class="text-secondary">
	                    Secondary link
	                </a>
	            </td>
	        </tr>
	        <tr>
	            <td>
	                <a href="#" class="text-success">
	                    Success link
	                </a>
	            </td>
	        </tr>
	        <tr>
	            <td>
	                <a href="#" class="text-danger">
	                    Danger link
	                </a>
	            </td>
	        </tr>
	        <tr>
	            <td>
	                <a href="#" class="text-warning">
	                    Warning link
	                </a>
	            </td>
	        </tr>
	        <tr>
	            <td>
	                <a href="#" class="text-info">
	                    Info link
	                </a>
	            </td>
	        </tr>
	        <tr>
	            <td>
	                <a href="#" class="text-light">
	                    Light link
	                </a>
	            </td>
	        </tr>
	        <tr>
	            <td>
	                <a href="#" class="text-dark">
	                    Dark link
	                </a>
	            </td>
	        </tr>
	        <tr>
	            <td>
	                <a href="#" class="text-muted">
	                    Muted link
	                </a>
	            </td>
	        </tr>
	        <tr>
	            <td>
	                <a href="#" class="text-white">
	                    White link
	                </a>
	            </td>
	        </tr>
	    </tbody>
	</table>

	<!-- ... -->

</body>
<!-- ... -->
```

**IMPORTANT NOTE:**
- You may have the students copy and paste the table data tag to speed up the discussion.
- Different colors have different meanings behind them.
- An example of this would be the green color being associated to success/successful processes within our application. The red is associated to danger or for processes where deleting records in an application is a feature. The orange color is associated for warnings where important pieces of information is to be relayed to our users. The light blue color is associated to providing users with additional information on a certain process.
- Color selection is an important skill that a developer must learn in order to provide a fluid user experience and create a meaningful user interface.
- Though Bootstrap is a means for creating a rapid prototype of an application, it is still recommended to add custom styling through CSS in our projects.
- An application created using Bootstrap can be easily distinguished by experienced developers and since bootstrap applies the same style across different projects, it makes our projects look similar to other apps where branding and personalization may not be expressed well.
- Refer to "references" section of this file to find the documentation for Boostrap Color Utility Classes, User Interface Design, User Experience Design, Color Theory For Designers, Best Practices For Buttons, Colors in UI Designers and The Role of Color in UX.

7. Create a div tag to act as a container for all the tables.

### Create a div tag and add a "container" class.

**batchfolder > individual > s14 > discussion > index.html**

```html  
<!-- ... -->
<body class="text-center">

	<!-- Bootstrap Utility Classes -->
	<div class="container">

		<h2>Bootstrap Color Classes</h2>

		<table class="table table-dark table-bordered">
		    <!-- ... -->
		</table>

	</div>
	<!-- End of Bootstrap Utility Classes -->

	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</body>
<!-- ... -->
```

**IMPORTANT NOTE**
- The "container" class adds padding between the border of it's parent element that makes the layout look better.
- Refer to "references" section of this file to find the documentation for Boostrap Containers.

### Change the "container" class into a  "container-fluid" class.

**batchfolder > individual > s14 > discussion > index.html**

```html
<!-- ... -->
<body class="text-center">

	<div class="container-fluid">
		<!-- ... -->
	</div>
	
	<!-- ... -->

</body>
<!-- ... -->
```

**IMPORTANT NOTE:**
- The "container-fluid" class is similar to the "container" class.
- The difference of these two classes is that the "container-fluid" class spans the full width of it's parent container.

8. Add more content to the table to display all the background colors available in bootstrap.

**batchfolder > individual > s14 > discussion > index.html**

```html
<!-- ... -->
<body class="text-center">

	<div class="container-fluid">

		<!-- ... -->

		<table class="table table-dark table-bordered">
		    <thead>
		        <tr>
		            <th>Text</th>
		            <th>Background</th>
		        </tr>
		    </thead>
		    <tbody>
		        <tr>
		            <td>
		                <!-- ... -->
		            </td>
		            <td class="bg-primary text-white">
		                Primary
		            </td>
		        </tr>
		        <tr>
		            <td>
		                <!-- ... -->
		            </td>
		            <td class="bg-secondary text-white">
		                Secondary
		            </td>
		        </tr>
		        <tr>
		            <td>
		                <!-- ... -->
		            </td>
		            <td class="bg-success text-white">
		                Success
		            </td>
		        </tr>
		        <tr>
		            <td>
		                <!-- ... -->
		            </td>
		            <td class="bg-danger text-white">
		                Danger
		            </td>
		        </tr>
		        <tr>
		            <td>
		                <!-- ... -->
		            </td>
		            <td class="bg-warning text-white">
		                Warning
		            </td>
		        </tr>
		        <tr>
		            <td>
		                <!-- ... -->
		            </td>
		            <td class="bg-info text-white">
		                Info
		            </td>
		        </tr>
		        <tr>
		            <td>
		                <!-- ... -->
		            </td>
		            <td class="bg-light text-dark">
		                Light
		            </td>
		        </tr>
		        <tr>
		            <td>
		                <!-- ... -->
		            </td>
		            <td class="bg-dark text-white">
		                Dark
		            </td>
		        </tr>
		        <tr>
		            <td>
		                <!-- ... -->
		            </td>
		            <td class="bg-transparent text-white">
		                Transparent
		            </td>
		        </tr>
		        <tr>
		            <td>
		                <!-- ... -->
		            </td>
		            <td class="bg-white text-dark">
		                White
		            </td>
		        </tr>
		    </tbody>
		</table>

	</div>

	<!-- ... -->

</body>
<!-- ... -->
```

**IMPORTANT NOTE:**
- Background color classes normally start with "bg-" then combined with one of the default colors provided in Bootstrap to change the background color of an element.
- Color contrasting is another important skill that a developer must have to create meaningful user interfaces.
- Applying dark colored backgrounds are best matched with light colored text and vice versa.
- A color palette is useful for designing applications which helps maintain consistency and helps with branding.
- Refer to "references" section of this file to find the links for a Color Picker and Coolors.

9. Add a background color to the body tag.

**batchfolder > individual > s14 > discussion > index.html**

```html
<!-- ... -->
<body class="text-center bg-secondary">
	<!-- ... -->
</body>
<!-- ... -->
```

10. Create a header tag and another table for Bootstrap Text Classes.

**batchfolder > individual > s14 > discussion > index.html**

```html
<!-- ... -->
<body class="text-center bg-secondary">

	<div class="container-fluid">

		<!-- ... -->

		<h2>Bootstrap Color Classes</h2>

		<table class="table table-dark table-bordered">
		    <!-- ... -->
		</table>

		<!-- Bootstrap Text Alignment Classes Table -->
		<h2>Bootstrap Text Classes</h2>

		<table class="table table-dark text-light table-bordered">
		    <thead>
		        <tr>
		            <th>Alignment</th>
		        </tr>
		    </thead>
		    <tbody>
		        <tr>
		            <td class="text-start">Left</td>
		        </tr>
		        <tr>
		            <td class="text-center">Center</td>
		        </tr>
		        <tr>
		            <td class="text-end">Right</td>
		        </tr>
		        <tr>
		            <!-- For extra small screens or small mobile phones, we can avoid using breakpoints -->
		            <!-- All mobile views in Google Chrome browser are considered small screen sizes -->
		            <!-- Screen size is greater than or equal to 576px -->
		            <!-- Larger mobile phones -->
		            <td class="text-sm-center">Small Center</td>
		        </tr>
		        <tr>
		            <!-- Screen size is greater than or equal to 786px -->
		            <!-- Tablets -->
		            <td class="text-right text-md-start">Medium Left</td>
		        </tr>
		        <tr>
		            <!-- Screen size is greater than or equal to 992px -->
		            <!-- Desktop -->
		            <td class="text-lg-end">Large Right</td>
		        </tr>
		        <tr>
		            <!-- Screen size is greater than or equal to 1200px -->
		            <!-- TV and other large screens -->
		            <td class="text-xl-center">Extra Large Center</td>
		        </tr>
		    </tbody>
		</table>
		<!-- End of Bootstrap Text Alignment Classes Table -->

	<div class="container-fluid">

	<!-- ... -->

</body>
<!-- ... -->
```

**IMPORTANT NOTE:**
- Text alignment classes normally start with "text-" then combined with the orientation in which to position the element to change it's alignment.
- The "text-left" class changes the orientation of the text to the left side of it's container. The same applies for "text-center" and "text-right".
- Text alignment classes can be applied to certain breakpoints to create a dynamic user interface.
- The default breakpoint for Bootstrap for all classes are applied to all breakpoints.
- The "text-sm-", "text-md-", "text-lg-" and "text-xl-" prefix in class names define the other breakpoints on when a class is applied.
- This may be demonstrated using the Google Chrome Browser's "Device Toolbar" feature in the "Inspect Tool"
- All mobile devices in the "Inspect Tool" are considered as extra small devices. To demonstrate "small" devices use the "responsive" view and manually change the width of the screen size between 576 and 785 pixels.
- Whenever a breakpoint is defined for Bootstrap classes, it overrides the default breakpoint for Bootstrap.
- Applying an alignment of "text-right" and "text-md-center" will make it so that on extra small and small screens the text is aligned to the right, but will apply an alignment of left on medium screen sizes and larger.
- This is useful for creating applications following the Mobile First Design where it allows us to control how elements will behave on different breakpoints.
- Defining different breakpoints is not always required. It is only best when we want to manipulate our elements on different screen sizes.
- Refer to "references" section of this file to find the documentations for Bootstrap Text Utility Classes and What is Mobile First Design.

11. Add an image to demonstrate the use of Bootstrap Display Utility Classes.

**batchfolder > individual > s14 > discussion > index.html**

```html
<!-- ... -->
<body class="text-center bg-secondary">

	<!-- ... -->

	<div class="text-center mt-5">

		<h1>Bootstrap Introduction and Simple Styles</h1>

		<div class="d-none d-lg-inline-block w-25 mt-4">
		    <img src="https://www.drupal.org/files/project-images/bootstrap-stack.png" class="rounded-circle bg-white img-fluid">
		</div>

	</div>

	<!-- ... -->

</body>
<!-- ... -->
```

**IMPORTANT NOTE:**
- The "d-none" class changes the display property of an element to "none".
- The "d-lg-inline-block" changes the display property of an element to an "inline-block" on a large breakpoint screen.
- The combination of these two classes allows us to hide and unhide elements on different break points.
- The image will not be visible in medium screens and lower but will be displayed when on a large screen or higher.
- This is useful for creating a dynamic user interfaces that changes with different breakpoints.
- By changing the "display" property of an image to "inline-block" it allows us to define the width of the div using the "w-25" class.
- The "img-fluid" class makes the image responsive by changing it's dimensions based on the width of it's parent "div" class which is set to "25%".
- Refer to "references" section of this file to find the documentation for Bootstrap Display Utility Classes.

# Activity:

Instructions that can be provided to the students for reference:

## Activity References:
- [Bootstrap Text Utility Classes](https://getbootstrap.com/docs/5.0/utilities/text/)
- [What is Mobile First Design](https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00)
- [Bootstrap Border Utility Classes](https://getbootstrap.com/docs/5.0/utilities/borders/)
- [Bootstrap Sizing Utility Classes](https://getbootstrap.com/docs/5.0/utilities/sizing/)
- [HTML Blocks - tutorialspoint](https://www.tutorialspoint.com/html/html_blocks.htm)
- [HTML Blocks - w3schools](https://www.w3schools.com/html/html_blocks.asp)
- [HTML Elements](https://developer.mozilla.org/en-US/docs/Glossary/Element)
- [Bootstrap Position Utility Classes](https://getbootstrap.com/docs/5.0/utilities/position/)
- [Bootstrap Spacing Utility Classes](https://getbootstrap.com/docs/5.0/utilities/spacing/)
- [Bootstrap Display Utility Classes](https://getbootstrap.com/docs/5.0/utilities/display/)
- [Bootstrap Image Utility Classes](https://getbootstrap.com/docs/5.0/content/images/)

## Activity:

**Member 1:**

1. In the S14 folder, create an activity folder.
- Copy the template provided by your Instructor and paste it in the in the index.html file.
- Update your local groupwork git repository and push to git with the commit message of Add template code s11
2. Apply Bootstrap to the project by adding all the dependencies.
3. Add bootstrap classes to the element with id “navbar” to:
	- Add a bootstrap class to fix the nav element at the top of the page
	- Add a bootstrap class to add a blue bg color to the navbar element
	- Add padding to the navbar element using bootstrap classes
	- Add a bootstrap class to element with id “navbar” to center the links and text inside the navbar

**Member 2:**

4. Add a bootstrap class to links in the navbar:
	- Add a bootstrap class to the links that will remove the text-decoration of each link.
5. Add bootstrap classes to the element with id “about-me”:
	- Add a bootstrap class to the about-me section which will center all the text/inline elements inside it.
	- Add a bootstrap class to the about-me section to add a margin at the top.
	- Add a margin bootstrap class to center the profile div that contains the picture and developer name.
6. Add a margin bootstrap class to center the profile div that contains the picture and developer name.

**Member 3:**

7. Add bootstrap classes to the profilePicture element:
	- Add a bootstrap class to the profilePicture element to round the picture.
	- Add a bootstrap class to the profilePicture to disallow it from overflowing.
8. Add bootstrap classes to the profileText element:
	- Add a margin at the top of the profileText div element
	- Add a blue border at the bottom of the h2 inside the profileText div using bootstrap classes.
9. Add bootstrap classes to the element with id “about-me”:
	- Add a margin at the top of the h4 inside the profileText div.
	- Add a bootstrap class to the h4 inside the profileText div to tranform the text to uppercase.
	- Add a bootstrap class to center the introduction paragraph element.
	- Add bootstrap class to add a margin at the top of the introduction paragraph element.

**Member 4:**

10. Add bootstrap classes to the element with id “projects” to:
	- Add a bootstrap class to the projects section which will center all the text/inline elements inside it.
	- Add a bootstrap class to the projects section which will add a gray background color.
	- Add a bootstrap class to the projects section which will add a padding inside the element.  
11. Add bootstrap classes to the element with id “footer” to:
	- Align text to center.
	- Add primary bootstrap color as background color.
	- Add a size 3 bootstrap padding to all sides.
	- Color the text as white

**Member 5:**

12. Add a bootstrap class to the divs inside the projects section:
	- Add a bootstrap class to the divs inside the projects section which will display each as inline-block.
	- Add a bootstrap class to the divs inside the projects section which will round the corners of the element.
	- Add a bootstrap class to the divs inside the projects section which will add a padding inside the element.
	- Add a bootstrap class to the divs inside the projects section which will make the text light or white inside the element.
	- Add a bootstrap class to the divs inside the projects section which will make the background dark inside the element.
	- Add a bootstrap class to the divs inside the projects section which will add margins on the left and right side of each divs.  

	- Add a bootstrap class to the img element inside each div to disallow it from overflowing. 
    - Add a bootstrap class to the h3 element inside each div add a margin at the top of the element. 
    - Add a bootstrap class to the p element inside each div add a margin at the top of the element. 

**All Members:**

13. Check out to your own git branch with git checkout -b <branchName>
14. Update your local groupwork git repository and push to git with the commit message of Add activity code s14.
15. Add the sessions repo link in Boodle for s14.

# Solution:

1. Add bootstrap css and Update the navbar based on the instructions.

**batchfolder > groupwork > s14 > activity > index.html**

```html
<!-- ... -->
<!DOCTYPE HTML>
<html>
	<head>
		<!-- Add mobile responsive meta tag. -->
		<!-- Mobile Responsive Meta Tag -->
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<!-- Add bootstrap css -->
		<!-- Bootstrap Link -->
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

		<title>Developer Portfolio</title>

	</head>
	<body>

		<!-- Navbar -->
		<!-- This div/nav element contains 3 links to home, aboutme and projects section -->
		<!-- Add a bootstrap class to fix the nav element at the top of the page. -->
		<!-- Add a bootstrap class to add a blue bg color to the navbar element-->
		<!-- Add padding to the navbar element using bootstrap classes-->
		<!-- Add a bootstrap class to center the links in the navbar -->
		<!-- Add a bootstrap class to the links that will remove the text-decoration of each link. -->
		<!-- Add margin on the left-side of the links -->
		<div class="fixed-top bg-primary text-center text-light p-1" id="navbar">

			<a href="" class="text-light text-decoration-none">
				Home
			</a>
			<a href="" class="text-light text-decoration-none ms-5">
				About Me
			</a>
			<a href="" class="text-light text-decoration-none ms-5">
				Projects
			</a>

		</div>
		<!-- End of Navbar -->
<!-- ... -->
```

**IMPORTANT NOTE:**
- The following documentation is the reference for this part of the activity:
	- Bootstrap Position Utility Classes
		- https://getbootstrap.com/docs/4.6/utilities/position/
		- fixed-top fixes an element at the top position.
	- Bootstrap Color Classes
		- https://getbootstrap.com/docs/4.6/utilities/colors/#background-color
		- bg-primary adds a blue bootstrap style background color.	
	- Bootstrap Text Utility Classes
		- https://getbootstrap.com/docs/4.6/utilities/text/
- The "text-decoration-none" class removes the underline from link texts.
	- Bootstrap Spacing Utility Classes
		https://getbootstrap.com/docs/4.6/utilities/spacing/
	- The "p-" class changes the padding of an element on all four directions.
	- The "m-" class changes the margin of an element on all four directions.
	- The margin and padding classes may also be assigned a direction to control the spacing between elements a specific side.
	- The following classes can be used to achieve creating spaces on specific directions:
		- margin
			- "mt-" - margin top
			- "mb-" - margin bottom
			- "ms-" - margin start/left
			- "me-" - margin end/right
		- padding
			- "pt-" - padding top
			- "pb-" - padding bottom
			- "ps-" - padding start/left
			- "pe-" - padding end/right
	- The following values may be assigned to create different measurements of spacing between elements:
		- 1-5 - 1 is the smallest measurement and 5 is the largest
		- auto - takes up the full space between the element and the specified spacing
	- There are instances that manipulating margin and padding properties of elements are difficult due to other Bootstrap classes that have predefined properties.
	- Refer to "references" section of this file to find the documentation for Bootstrap Spacing Utility Classes.

2. Add bootstrap classes to the element with id “about-me”

**batchfolder > groupwork > s14 > activity > index.html**

```html
<!-- ... -->

<!-- About Me -->
<!-- Add a bootstrap class to the aboutme section which will center all the text/inline elements inside it. -->
<div class="mt-5 text-center">
	<!-- Add a bootstrap class to center the div that contains the picture and developer name.-->
	<div class="mx-auto" style="width: 25%;">
		<!-- Add a bootstrap class to the profilePicture element to round the picture. -->
		<!-- Add a bootstrap class to the profilePicture to disallow it from overflowing. -->
		<img id="profilePicture" class="rounded-circle img-fluid border border-dark" src="https://i.guim.co.uk/img/media/3656ae6ea2209d4561caf04fa9f172a519908ca3/0_28_2318_1391/master/2318.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=afcc355f47876bc495cdc3c902639bae"/>
		<!-- Add a margin at the top of the profileText div element -->
		<div id="profileText" class="mt-3">
			<!-- Add a blue border at the bottom of the h2 inside the profileText div using bootstrap classes. -->           
			<h2 class="border-bottom border-primary">
				Ada Lovelace
			</h2>
			<!-- Add a margin at the top of the h4 inside the profileText div. -->
			<!-- Add a bootstrap class to the h4 inside the profileText div to tranform the text to uppercase. -->
			<h4 class="mt-2 text-uppercase">Full-Stack Web Developer</h4>
		</div>
		
	</div>
	<!-- Add a bootstrap class to center the introduction paragraph element.-->
	<!-- Add bootstrap class to add a margin at the top of the introduction paragraph element. -->
	<p id="introduction" class="mt-2 ms-auto me-auto p-2" style="width: 50%;">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
	</p>

</div>
<!-- End of About Me -->
<!-- ... -->
```

**IMPORTANT NOTE:**
- The following documentation/s are the reference for this part of the activity:
	- Bootstrap Image Utility Classes
		- https://getbootstrap.com/docs/4.6/content/images/
		- The "img-fluid" class makes the image responsive by changing it's dimensions based on the width of it's parent "div" class which is set to "25%".
	- Bootstrap Border Utility Classes
		- https://getbootstrap.com/docs/4.6/utilities/borders/
		- The "border" class adds a border for the element.
		- Border color classes normally start with "border-" then combined with one of the default colors provided in Bootstrap to change the border color of an element.
		- The "rounded", "rounded-circle" and "rounded-pill" classes define the border radius property of an element..
	- Bootstrap Text Utility Classes
		- https://getbootstrap.com/docs/4.6/utilities/text/#text-transform
		- "text-uppercase" class allows transformation of an element's text to uppercase.
	- "mx-auto" class allows automatic margins on left and right side of an element which may allow centering of a block element.

3. Add bootstrap classes to the element with id “projects”:

**batchfolder > groupwork > s14 > activity > index.html**

```html
<!-- ... -->
<!-- Projects -->
<!-- Add a bootstrap class to the projects section which will center all the text/inline elements inside it. -->
<!-- Add a bootstrap class to the projects section which will add a gray background color. -->
<!-- Add a bootstrap class to the projects section which will add a padding inside the element. -->
<div id="projects" class="bg-secondary p-5 text-center" style="padding: 3rem; margin-bottom: 3rem;">

	<!-- Add a bootstrap class to the divs inside the projects section which will display each as inline-block. -->
	<!-- Add a bootstrap class to the divs inside the projects section which will round the corners of the element. -->
	<!-- Add a bootstrap class to the divs inside the projects section which will add a padding inside the element. -->
	<!-- Add a bootstrap class to the divs inside the projects section which will make the text light or white inside the element. -->
	<!-- Add a bootstrap class to the divs inside the projects section which will make the background dark inside the element. --> 
	<!-- Add a bootstrap class to the divs inside the projects section which will add margins between each divs. -->                        
	<div class="d-lg-inline-block bg-dark text-light rounded p-4 ms-auto" style="width: 25%;">
		<!-- Add a bootstrap class to the img element inside each div to disallow it from overflowing. -->
		<!-- Add a bootstrap class to the h3 element inside each div add a margin at the top of the element. -->
		<!-- Add a bootstrap class to the p element inside each div add a margin at the top of the element. -->
		<img src="https://getbootstrap.com/docs/4.0/examples/screenshots/album.png" class="img-fluid">
		<h3 class="mt-3">My First Project</h3>
		<p class="mt-3">A simple project made from HTML</p>
	</div>
	<div class="d-lg-inline-block bg-dark text-light rounded p-4 ms-5 me-5" style="width: 25%;">
		<img src="https://getbootstrap.com/docs/4.0/examples/screenshots/jumbotron.png" class="img-fluid">
		<h3 class="mt-3">My Second Project</h3>
		<p class="mt-3">A simple project made from CSS</p>
	</div>
	<div class="d-lg-inline-block bg-dark text-light rounded p-4 me-auto" style="width: 25%;">
		<img src="https://getbootstrap.com/docs/4.0/examples/screenshots/carousel.png" class="img-fluid">
		<h3 class="mt-3">My Third Project</h3>
		<p class="mt-3">A simple Bootstrap project.</p>
	</div>
</div>
<!-- ... -->
```

**IMPORTANT NOTE:**
- The following documentation/s are the reference for this part of the activity:
		- Bootstrap Sizing Utility Classes
			- https://getbootstrap.com/docs/4.6/utilities/sizing/
	- The "w-100" class changes the width to 100% of it's parent element.
	- Other values that may be used are 25, 50 and 75 percent of the parent element.
	- The "d-lg-inline-block" changes the display property of an element to an "inline-block" on a large breakpoint screen.

4. Add bootstrap classes to the element with id “footer”

**batchfolder > groupwork > s14 > activity > index.html**

```html
<!-- ... -->
<!-- Footer -->
<!-- Add a bootstrap class to fix the footer element at the bottom of the page. -->
<!-- Add a bootstrap class to add a blue bg color to the footer element-->
<!-- Add padding to the footer element using bootstrap classes-->
<!-- Add a bootstrap class to center the text in the footer -->
<!-- Add a bootstrap class to color the text as light/white in the footer -->
<div class="bg-primary text-center text-light p-3 fixed-bottom ">
	<p class="m-0">All assets are used for educational purposes only.</p>
</div>
<!-- End of Footer -->

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</body>
<!-- ... -->
```

**IMPORTANT NOTE:**
- The following documentation/s are the reference for this part of the activity:
	- Bootstrap Position Utility Classes
		- https://getbootstrap.com/docs/4.6/utilities/position/
- The "fixed-top" and "fixed-bottom" classes changes the "position" property of an element to "position: fixed" with the corresponding orientation.
- Refer to "references" section of this file to find the documentation for Bootstrap Position Utility Classes.
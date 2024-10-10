# Full-Stack Developer Bootcamp Module 18 - Challenge: Social Network API

## Table of Contents

- [Description](#description)
- [Install](#install)
- [Usage](#usage)
- [Generator](#generator)
- [Badge](#badge)
- [Credit and Source Code](#credits-and-code-source)
- [Related Efforts](#related-efforts)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [GitHub Repository Location (HTTPS)](#github-repository-location-https)
- [Screencastify Walkthough Location](#screencastify-walkthrough-location)
- [Application Screenshots](#application-screenshots) 


## Description

The Social Network API is an Express-, Mongoose-, NoSQL-based application that permits Users to read, create, update and delete User Profiles, and Social Media-like entries ("Thoughts"), accessible to all Users of the application. As developed, the Social Media Profiles and Thoughts are accessible through a private deployment as a local instance specific to each accessing computer.

The Social Network API application does not include a web-hosted UI or web-accessible components, and its functionality can only be accessed as a local instance through an API Platform, such as Postman.

The Social Media-like Profiles and Thoughts are stored as flexible NoSQL data in a MongoDB database, accessible using the Mongoose Node.js library.

The Social Media-like Profiles and Thoughts may accessible through the Web, if publicly deployed, with an appropriate HTML frontend utilizing Express for server management, as well as through a local instance (using a local MongoDB database).

The Social Network API application source code is published on GitHub, and may be cloned to individual User computers to instantiate local versions.

Because the Social Network API application does not include a viable frontend through which to access stored data, all data management must be done through an API Platform, such as Postman. 

The Social Media-like Profiles and Thoughts are fully viewable, and editable within an API Platform.

Because the Social Media-like Profiles and Thoughts are stored within a local MongoDB database (either remote or local), the Profiles and Thoughts will persist across User sessions on individual, hosting computers and will be visible to all Users of the remote and local App instances.


## Installation

The Social Network API application source code may be downloaded from its GitHub repository, and run directly by a hosting computer, or, with the addition of an appropriate HTML frontend, notionally through a Web hosting service (e.g., Render, Heroku).

No Installation of the Social Network API application itself is required; the app is accessed through any modern API Platform.

However, local computers must hold an installation of Node.js, including Express, and MongoDB in order the run local instances of the Social Network API application application.


## Usage

The Social Network API application is intended for use by one or more Users to record Social Media-like Profiles and Thoughts that will be held locally, and persist across multiple sessions. 

All Users of the Social Network API application on a remote or local instance will have full visibility to all Profiles and Thoughts.


## Credits and Code Source

Database and Route-management Code was substantively outlined and contributed to by Program Tutors, who provided recommentations on the effectively associating Models, and managing MongoDB connections and to manage CRUD operations.

Additional Code, where referenced from a third-party Source, is noted in Comments accompanying the relevant Code lines and in the superseded code, found in the "archive" folder.


## License

Copyright <YEAR> <COPYRIGHT Chris Milazzo>


MIT License

Copyright (c) 2024 MeanderingBrook

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Badges

N / A


## Features

N / A


## How to Contribute

N / A


## Tests

Return value and generated content testing and data evaluation, see superseded.js ('archive' Folder)

`console.log` output of specification data specific to Model requirements; see server.js, routes/api/index.js, userController.js, thoughtController.js.


## GitHub Repository Location (HTTPS)

https://github.com/MeanderingBrook/18_Challenge_Social-Network-API.git


## Screencastify Walkthrough Location

https://drive.google.com/file/d/1BZs47j5MkJJlc8jbJjIpzpVoAVQGoyJa/view


## Application Screenshots

![Social Network API: User Profile Inventory - Screenshot 01](./assets/images/Social-Network-API_Screenshot-01_User-Profile-Inventory.png?raw=true "Social Network API: User Profile Inventory")

![Social Network API: User Profile Editing - Screenshot 02](./assets/images/Social-Network-API_Screenshot-02_User-Profile-Editing.png?raw=true "Social Network API: User Profile Editing")

![Social Network API: User Profile Deletion - Screenshot 03](./assets/images/Social-Network-API_Screenshot-03_User-Profile-Deletion.png?raw=true "Social Network API: User Profile Deletion")

![Social Network API: Thought Inventory - Screenshot 04](./assets/images/Social-Network-API_Screenshot-04_Thought-Inventory.png?raw=true "Social Network API: Thought Inventory")

![Social Network API: Thought Editing - Screenshot 05](./assets/images/Social-Network-API_Screenshot-05_Thought-Editing.png?raw-true "Social Network API: Thought Editing")

![Social Network API: Thought Deletion - Screenshot 06](./assets/images/Social-Network-API_Screenshot-06_Thought-Deletion.png?raw-true "Social Network API: Thought Deletion")
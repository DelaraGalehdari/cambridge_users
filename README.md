

Evaluation criteria
===================

1. General
    - Application builds
    - Application fulfills (or surpasses) the requirements
    - Application passes lint checks
    - There are unit (karma) and e2e (protractor) tests in place, which actually test things and are passing

2. Use of Angular/TypeScript
    - [Style guide](https://angular.io/guide/styleguide) was followed and the code passes linting
    - Services are used for all not explicitly view-related logic
    - Things are named in a way that makes sense
    - Code adheres to [single responsibility principle](https://en.wikipedia.org/wiki/SOLID).
    - Forms are validated client-side
    - Rxjs is used correctly and no unnecessary requests are made to the backend
    - User module is used to group user-related things and is lazily loaded in the app (for future extensibility)
    - Application stores state in the url (e.g. to allow bookmarking specific users, page in the list, etc.)
    - Application handles errors well - broken connectivity to the service, unexpected errors coming from the service, 
    wrong user-typed urls etc.
   - Application updates page metadata (title and description) when performing actions

3. Use of HTML5
    - Conforms to HTML5 spec w/o using deprecated tags/attributes 
    - There are no unnecessary tags and nesting is not too deep
    - Is semantic and does not contain presentation elements
    - Is accessible (e.g. screen reader friendly)
    
4. Use of SCSS
    - There are no unnecessary rules and selectors
    - Selector names are semantic or just make common sense
    - No vendor prefixes, no [BEM](http://getbem.com/)   
    - Variables and other SCSS features used where needed
    
5. Use of GIT
    - Commits are descriptive of actual changes made
    - Commits are sufficiently granulated
    - Commit history makes common sense
    - There are no unneeded files committed - IDE files, system files, generated artifacts from build process
    
If you have indicated on your application that you have less prior experience with Angular and Material then we will take this into account. There are also plenty of tutorials and example code online which could help with learning or catching up. 
In the end we are looking to evaluate your programming skills and your ability to deliver a working solution. 

Disclaimer
==========
The user database that comes with the service is randomly generated and doesn't contain any personally identifiable information.

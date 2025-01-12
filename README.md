# My solution

Note: I personally prefer working with next.js and react, however, given the requirement to be SPA, I will use vite.

Make sure to npm install all dependencies before running the application or running any tests. I have used npm for this project.

## Running the app

Assuming you've installed all the dependencies, please use the `npm run dev` command to run the application.

## Running tests

There are two ways of running the tests.

1. I've designed the project such that if you have any issues running the tests locally, you can use the github runners. On the repository, find the actions tab and click on the cypress tests option. You should see an option to run the workflow. Please do this on the main branch.

![img.png](img.png)

2. You can use the shell script to easily run the tests all at once. Note that I am using bash, so make sure the device you use can access the application dependencies and run bash scripts. Make sure to run this at the project root directory.
`bash run_all_tests.sh`. You may need to reply with a 'y' prompt if you need to install the `wait-on` package. Make sure you are not running the app yourself otherwise the tests will not run.

## What would I do if I had more time?

1. Add more comprehensive tests to cover the filtering. This includes design considerations on non-matching entries.
2. Change the autocomplete to allow multiple selection. This would require me adding a prop for multiple=true.
3. Fix component tests and separate out e2e/component tests. I was having issues with running component tests with cypress. Trying to fix them would result me overshooting the time limit.
4. I would also like to add a file management feature, where the user can add, edit and remove the uploaded files. Adding the files should be done via modal and the user can simply drag and drop the file onto the interface.
5. I assumed that there will be no empty folders added, but with more time, I would make the property optional. Also, a future feature should accommodate greater nesting of folders and allow many sub folders to be visible.
6. I would also replace the deprecated Grid with Grid v2.
7. Add aria labelling for screen reader users for accessibility and easier selection for cypress tests to avoid adding extra data tags
8. Style it more nicely using centring and icons
9. To implement sorting, I would have a button that you can click on. This opens a sidebar menu. It will have the filter functionality by name and date. Also, I would have the sort functions there as dropdown menus. There would also be a checkbox to allow users to reverse sort. I would have simple functions to apply sorting using the sort() function.
   10. More ideally, I would enforce a MUI datagrid so it looks more like a proper file explorer as it comes with built-in sorting and filtering. With some styling, it would really good and can be extended to have adding/editing/removing files. [MUI datagrid](https://mui.com/x/react-data-grid/)
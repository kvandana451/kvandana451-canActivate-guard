# App

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.0. But developed using Angular 16.<br>
Functional Requirements:<br>
Users should start on the Login Page.<br>
Clicking Login should authenticate the user and navigate to Dashboard.<br>
Clicking Logout should log the user out and redirect back to Login Page.<br>
If a user tries to access /dashboard without logging in, they should be redirected to Login Page.<br>
If a logged-in user tries to access /login again, they should be redirected to Dashboard.<br>

Enchancements :
Soon as user logs-in,<br>
If they have only one role, they are redirected automatically.<br>
If a user has multiple roles, they are redirected to a role selection page<br>
The role selection page shows buttons for each role assigned to the user<br>
Redirecting Users Based on Selection<br>
Once the user selects a role:<br>
Admins → Redirect to /admin-dashboard<br>
Users → Redirect to /user-dashboard<br>

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

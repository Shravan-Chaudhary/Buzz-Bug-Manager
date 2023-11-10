# Bug Manager

Bug Manager is a web application designed to help users track and manage bugs in their applications. It provides an intuitive interface for creating, updating, and managing issues, making it easier than ever to keep track of bugs and ensure they're resolved in a timely manner.

## Tech Stack

This application is built with the following technologies:

- [Next.js](https://nextjs.org/) for server-side rendering and routing
- [TypeScript](https://www.typescriptlang.org/) for adding static types to JavaScript
- [Yarn](https://yarnpkg.com/) for managing project dependencies
- [Prisma](https://www.prisma.io/) as the database access layer
- [NextAuth.js](https://next-auth.js.org/) for authentication
- [PostgreSQL](https://www.postgresql.org/) as the relational database system
- [Docker](https://www.docker.com/) to run postgre locally for development

## Setup

Follow these steps to set up the project on your local machine:

1. Clone the repository:

```shell
git clone https://github.com/Shravan-Chaudhary/bug-manager.git
```

2. Navigate into the project directory:

```shell
cd bug-manager
```

3. Install the project dependencies

```shell
yarn install
```

4. Running The App

```shell
yarn dev
```

5. Setting Up the Database (This command will run a container with postgre image)

```shell
docker-compose up -d
```

The application should now be running at http://localhost:3000.

Usage
To create a new issue, navigate to the "New Issue" page and fill out the form with the issue's details. Once the issue is created, it will appear in the list of issues on the "Issues" page.

You can update an issue's details or mark it as resolved by clicking on the issue in the list and making the desired changes on the issue's page.

Contributing
Contributions to Bug Manager are welcome! Please see the [CONTRIBUTING.md](CONTRIBUTING.md) file for details on how to contribute.

License
This project is licensed under the MIT License. See the LICENSE file for details.

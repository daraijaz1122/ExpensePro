# ExpensePro

- ExpensePro is a full stack expense tracker web app.

## Tech Stack:

- FE -> Reactjs, Nextjs, Tailwindcss, shadcn.
- BE -> Nextjs, drizzle-orm.
- DB -> Postgresql(serverless neon db).
- ORM -> Drizzle.
- Auth -> Clerk.

## Demo

[live Demo](https://expense-om0otngj8-aijazs-projects-ce29bd13.vercel.app/)

## Important Things to Keep Handy

1. A PostgreSQL database URL (e.g., from Neon, Aiven, ElephantSQL, etc.)
2. A Clerk account with API keys set up and available
3. A `.env` file with all the necessary environment variables configured

## Installation

1. Clone the repo:

```bash
git clone https://github.com/daraijaz1122/ExpensePro.git
```

2. Navigate to project folder:

```bash
cd your repo
```

3. Install dependencies:

```bash
npm install
```

4. Run db migration script:

```bash
npx drizzle-kit push
```

5. Run the Development Server:

```bash
npm run dev
```

## Features

- user login/logout.
- guest login.
- create,update and delete budgets.
- create and delete expenses.
- dashboard for visualization.

## Author

**Aijaz Dar**  
Email: aijazd.119@gmail.com
GitHub: [@daraijaz1122](https://github.com/daraijaz1122)

## License

This project is currently not licensed. All rights reserved.

## Acknowledgements

- [Clerk](https://clerk.dev/)
- [Next.js Docs](https://nextjs.org/docs)

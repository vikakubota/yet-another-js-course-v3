```sh
## Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js** (>=14.0.0)
- **npm** (>=6.0.0)

## Installation

Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/yet-another-js-course-v3
```

Install the necessary dependencies:

```bash
npm install
```

## Running Tests

```bash
npx playwright test
```

## Run tests in UI mode

```bash
npx playwright test --ui
```

##Run tests in headed mode

```bash
npx playwright test --headed
```

##Run tests on different browsers

To specify which browser you would like to run your tests on, use the --project flag followed by the name of the browser.
```bash
npx playwright test --project webkit
```
To specify multiple browsers to run your tests on, use the --project flag multiple times followed by the name of each browser.
```bash
npx playwright test --project webkit --project firefox
```



```

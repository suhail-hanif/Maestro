# Maestro Mobile Automation Framework

![Maestro](https://img.shields.io/badge/Mobile%20Automation-Maestro-blue)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-success)


## Project Structure

```
Project Structure
Maestro
│
├── .github
│   └── workflows
│       └── maestro.yml              # GitHub Actions CI pipeline
│
├── maestro
│   │
│   ├── flows                       # Main test scenarios
│   │   ├── perform-search.yaml
│   │   └── ...
│   │
│   ├── subflows                    # Reusable test components
│   │   ├── launch-app.yaml
│   │   ├── perform-onboardng.yaml
│   │   └── ...
│   │
│   └── scripts                     # Supporting automation scripts
│       ├── request.js
│       └── ...
│
└── apps
    └── Application under test

---

## Running Tests Locally

### Prerequisites

Install Maestro:

```bash
curl -Ls "https://get.maestro.mobile.dev" | bash
```

Verify installation:

```bash
maestro --version
```

---

### Execute Tests

Run all Maestro flows:

```bash
maestro test maestro/
```

Run an individual test:

```bash
maestro test maestro/<flow-name>.yaml
```

---

## CI/CD Integration

Tests are automatically executed through GitHub Actions.

The pipeline:

1. Checks out the repository
2. Sets up the required environment
3. Starts the Android emulator
4. Installs the application
5. Executes Maestro tests
6. Reports test results

This ensures automated regression coverage on every code change.
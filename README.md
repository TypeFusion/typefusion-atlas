# TypeFusion Atlas

A TypeScript-powered personal engineering atlas that connects my projects, skills, learning logs, resume materials, and Japan-focused developer tools.

## Why I built this

My GitHub contains practical tools, learning projects, frontend experiments, and long-term ideas. TypeFusion Atlas turns them into a structured engineering profile by organizing project metadata, validating it with TypeScript and Zod, and generating career-facing outputs.

## What it generates

* Portfolio website
* GitHub profile README
* English resume draft
* Japanese work history draft
* Project index
* Skill map
* Learning log

## Technical highlights

* TypeScript domain modeling
* Zod runtime validation
* Structured project metadata
* GitHub repository sync
* Markdown generation
* GitHub Actions automation
* Static portfolio deployment

## Project goals

This project is not just a portfolio. It is a personal engineering system for tracking what I build, what I learn, and how my technical profile evolves over time.

## v0.1 Status

TypeFusion Atlas currently stores and validates structured career data.

Current data:

- Profile metadata
- Project metadata
- Skill metadata with project evidence references

Current validation:

- TypeScript strict type checking
- Zod runtime validation for JSON data
- Cross-file validation from skills to project ids
- GitHub Actions validation on push and pull request

## Development

Install dependencies:

```bash
npm install
```

Run type checking:

```bash
npm run typecheck
```

Validate career data:

```bash
npm run validate
```

## Project Structure

```txt
data/
  profile.json
  projects.json
  skills.json

src/
  schemas/
    profile.ts
    project.ts
    skill.ts
  scripts/
    validate.ts

.github/
  workflows/
    validate.yml
```

## HelloEllo

#### Example:

This is a book app for kids who want to learn to read.

## Source Materials

Wireframes for this project can be found in the [wireframes](https://github.com/Ianodad/HelloEllo/tree/main/wireframes) folder
or directly from [Figma](https://www.figma.com/file/ONaPyZjTOfjk4LU4QzYsR7/HelloEllo?node-id=0%3A1)

## Project Status

## Key Feautures

- [x] Fetch data from GraphQL
- [x] Display word in book
- [x] Display each word on clicked event

## Installation and Setup Instructions

#### Example:

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

clone :

```bash
git clone https://github.com/Ianodad/HelloEllo.git
```

Installation:

`npm install`

To Run Test Suite:

`npm test`

To Start Server:

`npm start`

To Visit App:

`localhost:3000`

### Run with Docker

```bash
cd helloello
docker build -t helloello .

docker run --name helloello -d -p 3000:3000 helloello:latest
```

Open in browser
http://localhost:3000/

### Run with Docker-compose

```console
docker-compose up --build
```

or

```console
docker-compose up -d
```

Open in browser
http://localhost:3000/

---

## License

MIT (c) 2021 [Ian Adera](https://github.com/ianodad)

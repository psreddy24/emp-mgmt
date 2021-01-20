# Employee Management Service API

> **A REST-ful API to handle employee\people back-end operations**

![Platform](https://img.shields.io/static/v1?label=Platform&message=Java%208%20|%20JEE%208&color=lightgreen)
![Framework](https://img.shields.io/static/v1?label=Framework&message=Spring%205&color=lightgreen)
![Runtime](https://img.shields.io/static/v1?label=Runtime&message=Spring%20boot&color=lightgreen)


## Table of Contents

> Detailed information can be found below in the following sections 

- [Pre requisites](#pre-requisites)
- [How to run locally?](#how-to-run-locally)
    - [Using local installation](#running-locally)
    - [Running in container](#running-in-container)
- [About Project](#about)
    - [Description](#description)
    - [Objective](#objective)
    - [Consumers](#consumers)
    - [Tech & Specifications](#technologies--specifications)
    - [General Validations](#validation)
- [Resources](#resources)
    - [Documentation](#documentation)
- [Integration Tests](#integration-tests-postman)
    - [How to run integration tests](#how-to-run-integration-tests)

---
## Pre requisites
- JDK 1.8+
- Maven 3+
- Docker runtime

[Back to TOC](#table-of-contents)

---
## How to run locally?

- Clone the repository and change directory as below
    ```
    > git clone https://github.com/psreddy24/emp-mgmt.git
    > cd emp-mgmt
    ```

### Running locally
- Run the following command to run the back-end API
  ```
  > mvn clean package -f ./emp-mgmt-backend
  ```
- Run the following command to run the back-end API
  ```
  > TODO --->>> npm install
  ```
  
#### Running in container

- Run the following commands
    ```
    > docker-compose up
    ```
[Back to TOC](#table-of-contents)

---
## About
The details about the project and infrastructure can be found here

### Description

It's an REST-ful API, which provides the capability to CREATE, RETRIEVE, SEARCH, and UPDATE employee\people

[Back to TOC](#table-of-contents)

### Objective
The objective of the system is to provide an integration point for the front-end application 

[Back to TOC](#table-of-contents)

### Consumers
- emp-mgmt-frontend

[Back to TOC](#table-of-contents)

### Technologies & Specifications

- Language: Java 1.8
- Java EE: Jee 8
- Runtime: Tomcat
- Spring 5
- H2 in memory database

[Back to TOC](#table-of-contents)

---
## Resources

#### Documentation
- [API Contract(Swagger UI)](https://techtestapi.azurewebsites.net/swagger/index.html)
    
[Back to TOC](#table-of-contents)

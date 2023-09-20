import swaggerAutogen from "swagger-autogen";
const swagger = swaggerAutogen();

const doc = {
  info: {
    title: "Employees API",
    description: "Adding, Updating and Deleting employee details",
  },
  host: "localhost:3000",
  basePath: "/",
  schemas: ["http", "https"],
  definitions: {
    EmployeeDetails: {
      firstname: "Sidlingappa",
      lastname: "kurubatra",
      age: 0,
      salary: 0,
      gender: "Male",
      email: "siddu@abc.com",
      password: "Siddu@123",
      address:
        "#29 BHIVE MG Road, Mahalakshmi Chambers,MG Road Next to Trinity Metro Station",
    },
    SuccessMessage: {
      statusCode: 200,
      body: {
        status: "success",
        message: "Employee Data stored successfully.",
      },
    },
    FailMessage: {
      statusCode: 400,
      body: {
        status: "failed",
        message: "Error in data.",
      },
    },
  },
};

const outputFile = "./swagger_outout.json";
const endpointsFiles = ["./resources/routes/public.routes.js"];

await swagger(outputFile, endpointsFiles, doc);

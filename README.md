your file structure should look like this to run the code properly otherwise it may create issue.
```your-project/
  ├── files/
  │   ├── example.txt
  ├── node_modules/
  ├── server.js
  ├── package.json


Test Endpoints
Use an API client like Postman or your browser to test the endpoints.

List files:

URL: http://localhost:3000/files
Method: GET
Expected Response: A JSON array of file names in the files directory.
Get file content:

URL: http://localhost:3000/file/example.txt (make sure example.txt exists in the files directory)
Method: GET
Expected Response: The content of example.txt.

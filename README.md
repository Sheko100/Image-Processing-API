# Image-Processing-API
API for resizing images

# Install 
Run ```npm run install``` in your favorite editor terminal to install all the required dependicies for the project

# Getting started
- Run ```npm run build``` to compile the TypeScript files to JavaScript in dist directory
- Run ```node dist/.``` to start the server
- Open your favorite browser and enter ```http://localhost:3000/api``` in the address bar to make sure the api is working
- Make sure you have the image you want to resize in the directory: ```src/assets/full```
- Add to the actual url ```/images?file_name=<your image name>&width=<your desired width>&height=<your desired height>```
- Your resized image will be in the dierctory: ```src/assets/thumb```

# Testing
To test the endpoint and the functionality of the image processing, run ```npm run test```

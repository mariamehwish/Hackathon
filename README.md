Hackathon

Module 1 to Module 5

I created a resume builder using TypeScript. Here’s a quick rundown of how I put it all together:

Project Setup: I started by creating a project folder named resume-builder and initialized it with npm to get a package.json file.

Installing TypeScript: I installed TypeScript locally to manage the TypeScript compilation. For this, I ran npm install typescript --save-dev.

TypeScript Configuration: I created a tsconfig.json file to configure how TypeScript should compile the code. This file includes settings like where to find the TypeScript files (src folder) and where to output the compiled JavaScript (dist folder).

Writing Code: I wrote my TypeScript code in src/index.ts. This code handles the functionality of the resume builder. For instance, it might include functions to collect user input and generate the resume content.

Compiling Code: I used the TypeScript compiler (tsc) to convert my TypeScript files into JavaScript files, which are then placed in the dist folder.

Running the Code: Finally, I ran the compiled JavaScript using Node.js with the command node dist/index.js to see the results in action.

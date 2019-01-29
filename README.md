## Intelligent Collection Shopping

Intelligent Collection Shopping is a mobile application which enables residents in communities to buy and sell small quantities of products at bulk prices. This application is focussed on making the transaction quicker, portable and user-friendly. Often the bulk quantities of items like grocery, household-goods can be overwhelming for single families, and result in wastage of goods and money. At the same time, people who need smaller quantities of products are not able to buy them from wholesale stores at bulk pricing.
Intelligent Collection Shopping solves this problem by allowing users to sell their unused items to reduce the wastage. Other users can still enjoy the benefits of the paying bulk prices for those goods.

This Intelligent Shopping Collection application would increase the urban sustainability and could become the future economy initiative. Like Uber, this application would work on the “shared economy” approach where, if I need something and one has it, we can work together to fulfill the need and grow trust. The users can login to the application to search for products they need. Along with it, they can post products that they would like to sell and mention the neighborhood they would like to do the transaction in. 

The application is built with a rich mobile UI using the react-native framework. The middle tier is built using Node.js and the data storage is supported by MongoDB.

### Team Members
1. [Sowmya Gowrishankar](https://github.com/sowmyagowri)
2. [Harshada Bhide-Apte](https://github.com/HarshadaBhide)
3. [Rucha Apte](https://github.com/ruchaapte)
4. [Anup Kulkarni](https://github.com/anupkv1)

### Learn about the product at: https://www.youtube.com/watch?v=LxSKf8WRJOc

### Application Flow
![ics flowchart](https://user-images.githubusercontent.com/25673997/51929122-5346b280-23ac-11e9-8344-0ead926c3769.png)

### Architecture
![architecture](https://user-images.githubusercontent.com/25673997/51929248-9c970200-23ac-11e9-80f1-33166c663624.png)

# Steps for application

### Emulator:

cd C:\Users\<username>\AppData\Local\Android\Sdk\emulator
emulator -avd Nexus_5X_API_28

### Download the project folder.
cd into location of the project folder

In file android/local.properties ,Change the sdk.dir path according to your machine

In project directory: 
npm install

yarn

### To start the server :
cd into project folder\src\server
node server.js

### To build and start the app:
cd into project folder
react-native run-android

If there is error in building the app, try upgrading react-native

### Technology Stack
![picture1](https://user-images.githubusercontent.com/25673997/51930534-af5f0600-23af-11e9-967f-4e00ec796ebc.png)


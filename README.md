#COMMANDS TO RUN AT FIRST (after getting package)

####(in admin console in the root directory of the project
also open in **android studio**
reference: https://guide.meteor.com/cordova.html#introduction
meteor add-platform android
meteor npm install --save @babel/runtime react react-dom react-router-dom
meteor add fourseven:scss

# How to Run
## Plugged in Android Device
meteor run android-device --mobile-server=localhost:3000

## Android Emulator
meteor run android
"# Time-Tracker" 

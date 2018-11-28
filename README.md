# LUXARITY Pop-up DApp
The purpose of this application is to track the resale of donated luxury goods from the point of sale to grant disbursement. In addition, the project serves as a proof-of-concept looking to develop a tokenized market place of retail products to incentivize the creation of a prosumer economy, where consumers are rewarded for selling and buying second hand goods. 

As an overview, the PoC LUXARITY DApp has the following architectural specs: 
![Explore View](https://github.com/ConsenSys/LuxarityFrontEnd/blob/master/ReadMeImgs/views/LuxArch.png)

To better understand the architecture of the build, please review the following document: 
- LUXARITY Architecture: https://drive.google.com/a/consensys.net/file/d/1d0Rcb3DFzxKAiHnq154MQPTBoBKbu0W-/view?usp=sharing

## Application Folder Structure
The application has the following folder structure (for the purpose of consiceness, we will not be showing the individual files in this visualization, only the folders and their respective definitions): 

    .
    ├── config                  # Configuration folder packaged with the Truffle Drizzle Box
    │   ├── jest    
    │   └── ...           
    ├── contracts               # Holds smart contracts and ABI for the DAPP (folders provided by Drizzle Box)
    │   └── ...                
    ├── migrations              # Holds files that migrate on-Dapp smart contracts onto the blockchain network (deploy)
    │   └── ...                 
    ├── public                  # Holds favicon (search tab icon logo) and index.html (app page) for application
    │   └── ...                  
    ├── ReadMeImgs              # Hold all representative images of application views and components for repo ReadMe
    │   ├── Architecture          # Images for architecture 
    │   ├── Layouts               # Images for layouts
    │   └── Modal Components      # Images for modal components
    ├── scripts                 # Scripts folder packaged with the drizzle box provided by Truffle
    │   └── ...                
    ├── src                     # Holds all core application files for UI
    │   ├── layouts             # Holds all application views, components, and logic for the front end (UI)
    │   │   ├── views             # Application UI web pages
    │   │   ├── fonts             # Fonts for application
    │   │   ├── componets         # Application components that make up UI web pages
    │   │   └── img               # Application images (logos, etc) that are pertinent to app 
    │   ├── css                 # Application css folder 
    │   ├── fonts               # Application fonts folder
    │   ├── util                # Application utilites folder provided by Drizzle box 
    │   └── ...                
    └── ...

## Application Views
....

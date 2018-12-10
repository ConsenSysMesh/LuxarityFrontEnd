# LUXARITY Pop-up DApp
The purpose of this application is to track the resale of donated luxury goods from the point of sale to grant disbursement. In addition, the project serves as a proof-of-concept looking to develop a tokenized market place of retail products to incentivize the creation of a prosumer economy, where consumers are rewarded for selling and buying second hand goods. You can see the live demo here (note, the demo will be up until January 10, 2018, becuase of this, screenshots have been provided to show how each view and component looks): https://luxarity-popup.org/ 

A full report on the performance, shortfalls, and overall next steps for the proof-of-concept can be found here: 
https://docs.google.com/document/d/1sdZvbkZ835qVS34oggHoaaXXHPtfy9l7uJPxKCBVp7w/edit#

As an overview, the PoC LUXARITY DApp has the following architectural specs: 

![Architecture View](https://github.com/ConsenSys/LuxarityFrontEnd/blob/master/ReadMeImgs/Architecture/LuxArch.png)

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


## Application Views & Components
The entirety of the application's front end views and components can be found within the 'src' folder. Within this folder, we have the following: 

- CSS: The folder that carries project elements that pertain to styling
- Fonts: The folder that carries project elements that pertain to font usage and type styles
- Layouts: The folder that holds both the front end components folder (re-usable part of the front end), and the views
- Redux: The folder that holds all of the applications API calls and redux states
- Util: The folder that holds specialized application scripts for testing and access to Web3 calls 

The two most important folders within the 'layouts' folder are the 'components' folder and the 'views' folder. The Components folder holds all of the application's re-usable front-end components (buttons, modals, etc.), and the Views folder holds all of the application's pages (home page, about page, etc.). 

The Components folder can be broken down into the following resources

### Project Card 
The project card folder holds components that are either modals or cards on the front end. There are four components within the project card folder, and each have their own parameters and use. Let's review each: 

*Donation Complete Modal*
The donation complete modal is a modal that should show once the user has successfully allocated their order proceeds to a cause of their choice. The modal should only show if the smart contract transaction that allocated order proceeds to a cuase has not failed. The component has the following parameters: 

    .
    ├── transaction        # Transaction hash of the transaction (of choosing which cause to allocated funds toward) (string)
    ├── open               # Open, which determines whether the modal is open to view or not (boolean)
    ├── handleClose        # Function that toggles the boolean value provided to the 'open' parameter (function)               
    └── ...

*Project Card Complex*
Project Card Complex is a 'card,' which is a rectangular component that typically shows an image, paired with information about that image. Cards typically have background shadowing to differentiate its flat style from the background of the view. The Project Card Complex component shows only on the Support view, where users choose which causes to allocate their order proceeds. The component has the following parameters: 

    .
    ├── order             # Order is an object. the parameters of this object are beneath the component parameter outline
    ├── charityURL        # A string that indicates the url link to the cause or charity shown in the component 
    ├── noAllocationleft  # Boolean that indicates whether or not the order's proceeds have already been allocated or not
    ├── backgroundSizeImg # String (number percentage) indicating the backgroundSize of the image for the cause being used
    ├── cardCategory      # String, indicating which brand value the cause represents (responsibility, awareness, or wonder)
    ├── cardOrgName       # String, the organizational name of the cause being supported
    ├── cardSummary       # String, the summary of the cause being supported 
    ├── cardGoal          # Number, the fundraise goal for the cause being supported 
    ├── cardPledged       # Number, the amount pledged for the cause being supported
    ├── choosingDonationNow       # Boolean, whether or not the smart contract function call is still pending (redux call)
    ├── donationAmount    # Number, the amount pledged for the cause being supported
    ├── cardOrientation   # String, the side of the page the component is oriented ('left' or 'right'
    ├── charityImage      # brand image used by luxarity 
    └── ...

### Sections

### User Feedback  

### Wrapper 

## Application Testing
The majority of testing resources can be found in the Luxarity Smart Contract repository (see below in the Additional Repositories section). The main test can be found in the 'Tests' folder within the LuxOrders.js file. The tests ensure that the smart contract for the application is secure, well-functioning given edge use cases, and accounts for future functionality (or parameters) that may be needed. 

## Additional Repositories
Additional repositories that are critical to the proof of concept can be found below: 

- Front End Application: https://github.com/ConsenSys/LuxarityFrontEnd
- Smart Contract API: https://github.com/ConsenSys/Luxarity-SensuiMod 
- Shopify Event Watcher: https://github.com/ConsenSys/luxarity-shopify 
- Off-Chain API: https://github.com/ConsenSys/luxarity-offchain 
- Luxarity Smart Contracts & Tests: https://github.com/ConsenSys/LuxToken

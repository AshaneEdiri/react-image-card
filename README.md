# react-image-card
This is a test npm package to ease out image card creation.

### To Publish a new version
```bash
1. npm login
2. npm run publish:npm
3. npm publish
```

### Installation
Run the following command to install this package.

```bash
npm install react-image-card-test
```

To import the library.
```bash
 import ImageCard from "./components/ImageCard";
```

The library could be used as follows inside a react component
```bash
 function ImageCardTest() {
   
   return (
     <div className="Scattermain">
       <ImageCard
         imageSrc="testImage.jpg"
         title="This is a test title"
         text="This is a text discription"
         nextpath="/nextpage"
       />
     </div>
   );
 }
 ```

 #### Make sure to download the latest release version to experience the advanced features
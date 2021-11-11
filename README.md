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
 import ImageCard from "react-image-card-test";
```

The library could be used as follows inside a react component
```bash
function ImageCardTest() {

  const optionalCardBody = (
    <div>
      <hr />
      <h3>This is a separate body with customizations !</h3>
      <p>You can use general html tags here</p>
    </div>
  );

  return (
    <div className="image-card-test-page-main">
      <ImageCard 
        imageSrc="testImage.jpg" 
        cardtitle="This is a test title" 
        carddescription="This is a text discription" 
        nextpath="/nextpage"
        cardbody={optionalCardBody} 
        />
    </div>
  );
}
 ```

 #### Make sure to download the latest release version to experience the advanced features
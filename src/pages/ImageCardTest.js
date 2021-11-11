/**
 * The image card test component
 *
 * @version 1.0.0
 * @author ashane2e
 */
import ImageCard from "../components/ImageCard";

function ImageCardTest() {
  const optionalCardBody = (
    <div>
      <hr />
      <h3>This is a separate body if you need customizations !</h3>
      <p>You can use general html tags here</p>
    </div>
  );

  return (
    <div className="image-card-test-page-main">
      <ImageCard imageSrc="testImage.jpg" cardtitle="This is a test title" carddescription="This is a text discription" nextpath="/nextpage" cardbody={optionalCardBody} />
    </div>
  );
}

export default ImageCardTest;

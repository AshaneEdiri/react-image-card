/**
 * The image card test component
 *
 * @version 1.0.0
 * @author ashane2e
 */
 import ImageCard from "../components/ImageCard";

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
 
 export default ImageCardTest;
 

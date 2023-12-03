

interface ImageUploaderComponentProps {
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function ImageUploaderComponent({
  handleImageChange,
}: ImageUploaderComponentProps) {
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
    </div>
  );
}
export default ImageUploaderComponent;

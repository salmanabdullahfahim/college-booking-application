const PhotoGallery = () => {
  return (
    <div className="py-12">
      <h2 className="text-center text-2xl font-bold italic py-4">
        Photo Gallery
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 px-12">
        <img src="/webpc-passthru.webp" className="rounded-lg" alt="" />
        <img
          src="/106922887-1628206615260-gettyimages-887132600-as1700__08.jpeg"
          className="rounded-lg"
          alt=""
        />
        <img
          src="/GettyImages-493738798-5873c53e3df78c17b6ef7154.jpg"
          className="rounded-lg"
          alt=""
        />
        <img src="/images (1).jpeg" className="rounded-lg" alt="" />
        <img src="/images.jpeg" className="rounded-lg" alt="" />
        <img
          src="/university-student-graduation-photo-hats.jpg"
          className="rounded-lg"
          alt=""
        />
      </div>
    </div>
  );
};

export default PhotoGallery;

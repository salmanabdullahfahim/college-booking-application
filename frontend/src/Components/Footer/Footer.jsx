const Footer = () => {
  return (
    <footer className="w-full mb-3">
      <hr className="my-4" />
      <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0 py-4">
        <div className="inline-flex items-center">
          <span className="ml-4 text-xl italic font-bold">College Hunter</span>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm font-medium text-gray-500">
            © 2023 College Hunter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

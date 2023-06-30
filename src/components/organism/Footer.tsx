import { Dict, Locale } from "../../utils/i18n-config";

const Footer = ({ dict }: { dict: Dict }) => {
  return (
    <footer className="w-full flex justify-center px-4 mt-auto py-4 text-center">
      Made till the pixel-perfect ✨ by Atif Aiman 😍&nbsp; • &nbsp;&copy;{" "}
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;

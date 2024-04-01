import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="p-10 mt-10">
      <div className="container flex flex-col md:flex-row justify-between md:items-end gap-10">
        <div className="flex gap-10">
          <div>
            <p className="text-xl font-semibold underline">About</p>
            <ul className="mt-3">
              <li>About</li>
              <li>Meet Out Team</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <p className="text-xl font-semibold underline">Support</p>
            <ul className="mt-3">
              <li>Shipping</li>
              <li>Return</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>

        <div>
          <p className="text-xl font-semibold underline">Social Media</p>

          <div className="flex gap-3 md:justify-end mt-3">
            <FaFacebookF />
            <FaInstagram />
            <FaXTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

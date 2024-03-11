import { FcMindMap } from "react-icons/fc";

const Footer = () => {
    return (
      <div>
        <footer className="footer p-10 bg-[#02137A] text-white">
          <aside>
            <FcMindMap className="text-5xl" />
            <p>
              Taste Trail Restaurant
              <br />
              Serving culinary delights since 1992
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Menu</h6>
            <a className="link link-hover">Appetizers</a>
            <a className="link link-hover">Main Courses</a>
            <a className="link link-hover">Desserts</a>
            <a className="link link-hover">Beverages</a>
          </nav>
          <nav>
            <h6 className="footer-title">About Us</h6>
            <a className="link link-hover">Our Story</a>
            <a className="link link-hover">Chef's Corner</a>
            <a className="link link-hover">Locations</a>
          </nav>
          <nav>
            <h6 className="footer-title">Contact</h6>
            <a className="link link-hover">Reservations</a>
            <a className="link link-hover">Feedback</a>
            <a className="link link-hover">Customer Support</a>
          </nav>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  
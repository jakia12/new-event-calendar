import Link from "next/link";

export default function FooterGrid() {
  return (
    <div className="w-full  text-white px-6 py-10">
      <div className="lg:flex  justify-center">
        {/* First Column: spans 3 of 5 columns on medium+ screens */}
        <div className="lg:w-[50%] w-full  flex items-center justify-center ">
          {/* Logo */}
          <div className="">
            <img
              src="/images/flogo.png"
              alt="Logo"
              className="lg:w-[186px] w-full"
            />

            {/* Description Content */}
            <p className="text-[16px] text-gray-300 text-left font-poppins w-full lg:w-[480px] my-[30px]">
              Stay connected with the best food trucks in town! Explore unique
              flavors, check schedules for Cape Canaveral and Patrick SFB, and
              never miss out on your favorite bites
            </p>

            {/* Icons */}
            <div className="flex gap-4">
              <a href="">
                <img src="/images/fb.png" alt="Facebook" className="w-8 h-8" />
              </a>

              <a href="">
                <img src="/images/ins.png" alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="">
                <img src="/images/tt.png" alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="">
                <img src="/images/tg.png" alt="Facebook" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        {/* Second Column: Menu Links */}
        <div className="lg:w-[25%] w-full">
          <h3 className="font-[700] text-[20px] mb-2 text-[#F8DA55] font-libre">
            Useful Links
          </h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>
              <Link
                href="#"
                className="hover:text-white font-poppins text-[16px] font-[400] py-[13px] block"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white font-poppins text-[16px] font-[400] py-[13px] block"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white font-poppins text-[16px] font-[400] py-[13px] block"
              >
                Event Blocking
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white font-poppins text-[16px] font-[400] py-[13px] block"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Third Column: Menu Links 2 */}
        <div className="lg:w-[25%] w-full">
          <h3 className="font-[700] text-[20px] mb-2 text-[#F8DA55] font-libre">
            Trucks
          </h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>
              <Link
                href="#"
                className="hover:text-white font-poppins text-[16px] font-[400] py-[13px] block"
              >
                MOLO'S
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white font-poppins text-[16px] font-[400] py-[13px] block"
              >
                Reel BBQ
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white font-poppins text-[16px] font-[400] py-[13px] block"
              >
                Sour Mugz
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white font-poppins text-[16px] font-[400] py-[13px] block"
              >
                Fowl Mouth
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import { SVGProps } from "react";

export const FaChevronUp = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.6em"
      height="1.6em"
      color=""
      viewBox="0 0 24 24"
      {...props}>
      <path
        fill="orange"
        d="M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0"></path>
    </svg>
  );
};

const ScrollTop = () => {
  return (
    <button
      onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
      className="hover_me fixed bottom-4 shadow-white shadow-inner right-4 h-12 w-12 rounded-full text-center transition duration-500 ease-in-out hover:scale-125">
      {/* <i className="fa-solid fa-chevron-up mx-auto text-3xl font-extrabold text-orange-400" /> */}
      <FaChevronUp
        className="mx-auto text-3xl font-extrabold"
        color="#34bfff"
      />
    </button>
  );
};

export default ScrollTop;

import { JsxElement } from "typescript";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <div className="py-28 flex flex-col lg:flex-row items-center justify-between p-20">
        <h3 className="text-4xl lg:text-2xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
          Dinamically Generated with Wordpress Headless MS.
        </h3>
        {/* <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
          <a
            href="https://nextjs.org/docs/basic-features/pages"
            className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
          >
            Read Documentation
          </a>
          <a
            href="https://www.ramzikarkoub.com/"
            target="_blank"
            className="mx-3 font-bold hover:underline"
          >
            Personal Website
          </a>
        </div> */}
      </div>
    </footer>
  );
}

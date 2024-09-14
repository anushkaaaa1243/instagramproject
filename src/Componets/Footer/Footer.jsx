import { Link } from "react-router-dom"
const Footer = () => {
    return (
      <div>
        <div className="h-[5vh] lg:h-[20vh] flex flex-wrap justify-center gap-3 items-center text-[#737373] text-[17px] md:text-[13px] md:ml-11 lg:ml-44 mt-6 lg:mt-0">
          <div>
            <Link to=""
              className="hover:border-b-[1px] hover:border-b-[#00376B]  "
            >
              Meta
            </Link>
          </div>
          <div>
            <Link to=""
              className="hover:border-b-[1px] hover:border-b-[#00376B] "
            >
              About
            </Link>
          </div>
          <div>
            <Link to=""
              className="hover:border-b-[1px] hover:border-b-[#00376B]  "
            >
              Blog
            </Link>
          </div>
          <div>
            <Link to=""
              className="hover:border-b-[1px] hover:border-b-[#00376B] "
            >
              {" "}
              Jobs
            </Link>
          </div>
          <div>
            {" "}
            <Link to=""
              className="hover:border-b-[1px] hover:border-b-[#00376B]  "
            >
              Help
            </Link>
          </div>
          <div>
            <Link
              to=""
              className="hover:border-b-[1px] hover:border-b-[#00376B]  "
            >
              API
            </Link>
          </div>
          <div>
          
            <Link to=""
              className="hover:border-b-[1px] hover:border-b-[#00376B]  "
            >
              Privacy
            </Link>
          </div>
          <div>
            {" "}
            <Link to=""
              className="hover:border-b-[1px] hover:border-b-[#00376B] "
            >
              Terms
            </Link>
          </div>
          <div>
            {" "}
            <Link
              to="/"
              className="hover:border-b-[1px] hover:border-b-[#00376B]  "
            >
              Locations
            </Link>
          </div>
          <div>
            {" "}
            <Link
              href="/"
              className="hover:border-b-[1px] hover:border-b-[#00376B]  "
            >
              Instagram Lite
            </Link>
          </div>
          <div>
            {" "}
            <Link to=""
              className="hover:border-b-[1px] hover:border-b-[#00376B] "
            >
              Threads
            </Link>
          </div>
  
          <div>
            {" "}
            <Link to=""
              className="hover:border-b-[1px] hover:border-b-[#00376B]  "
            >
              Contact uploading and non-users
            </Link>
          </div>
  
          <div>
            <Link to=""
              className="hover:border-b-[1px] hover:border-b-[#00376B]  "
            >
              Meta Verified
            </Link>
          </div>
        </div>
      </div>
    )
  }
  
  export default Footer
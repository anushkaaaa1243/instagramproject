

const Button = ({  text, onClick, className ,icon}) => {
  return (
    <div>
       <button
                 onClick={onClick}
                className={`border border-[#0095F6] w-[270px] bg-[#0095F6] text-white font-semibold text-base mt-2 h-10 rounded-lg flex items-center justify-center ${className} `}
                
              >
               {icon} {text}
              </button>
             
    </div>
  )
}

export default Button

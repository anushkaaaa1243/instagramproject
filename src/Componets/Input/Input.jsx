

const Input = ({placeholder,type,className,value,onChange}) => {
  return (
    <div>
       <input
                type={type}
                placeholder={placeholder}
                className={`border border-[#DBDBDB] w-[270px] text-[12px] h-10 p-2 outline-none ${className}`  }
                value={value}
                onChange={onChange}
              />
    </div>
  )
}

export default Input

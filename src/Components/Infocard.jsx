
const Infocard = ({text1, text2, imgSrc, className}) => {
  return (
    <div className={`grid grid-col-3 w-2xl h-full 
                bg-blue-200 rounded-4xl p-8 gap-1 ${className}`}>
        <div className="text-6xl wrap-break-word">{text1}</div>
        <div className="text-2xl wrap-break-word">{text2}</div>
        <div><img src={imgSrc}/></div>
    </div>
  )
}

export default Infocard
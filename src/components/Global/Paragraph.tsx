interface ParagraphProps{
    content?:string
    center?:boolean
}
const Paragraph:React.FC<ParagraphProps> = ({content,center}) => {
  return (
    <div className={`${center?"text-center":"text-left"} text-[16px] md:text-[18px] lg:text-[20px]`}>{content}</div>
  )
}

export default Paragraph
interface HeaderProps{
    widthFull?:boolean
    center?:boolean
    content?:string
}
const Header:React.FC<HeaderProps> = ({widthFull,center,content}) => {
  return (
    <h1 className={`${widthFull?"w-full":""} ${center?"text-center":"text-left"} text-[32px] md:text-[36px] lg:text-[40px]`}>
        {content}
    </h1>
  )
}

export default Header
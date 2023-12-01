type ButtonProps = {
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className }: ButtonProps) => {
    return <button
        className={`
        bg-[#2D5BFF] rouded-[8px] px-[32px] py-[12px] text-white
        ${className}`}
    >
        { children } 
    </button>
}

export default Button;
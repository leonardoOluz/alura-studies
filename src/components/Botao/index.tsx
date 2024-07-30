import style from './Botao.module.scss';

interface Props {
    children?: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Botao(
    { children, type = 'button', onClick }
        : Props
) {
    return (
        <button
            onClick={onClick}
            className={style.botao}
            type={type}
        >
            {children}
        </button>
    )
}
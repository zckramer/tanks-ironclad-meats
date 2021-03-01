const Link = (props) => {
    return (
        <a 
            href={props.url} 
            rel="noreferrer" 
            target='_blank'
        >
            {props.text}
        </a>
    )
}
export default Link;
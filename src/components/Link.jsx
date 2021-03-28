const Link = (props) => {
    return (
        <div
            className='Link'
            onClick={()=>window.open(props.url)}
            style={{...props.style}}
        >
            {props.text}
        </div>
    )
}
export default Link;
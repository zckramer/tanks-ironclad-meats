const Link = (props) => {
    return (
        <div
            className='Link'
            onClick={()=>window.open(props.url)}
        >
            {props.text}
        </div>
    )
}
export default Link;
import Link from './Link';

const MenuBlock = () => {
    return (
        <div className='Menu-Block'>
            <Link 
                text='Click here to check out the Menu!' 
                url='/TanksMenu.pdf' 
                // style={{color: 'white', fontSize: '30'}}
            />
        </div>
    )
}
export default MenuBlock;
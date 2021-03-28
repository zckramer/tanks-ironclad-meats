import Link from './Link';
import TextPanel from './TextPanel';

const MenuBlock = () => {
    return (
        <div className='Menu-Block'>
            <Link 
                text='Click here to check out the Menu!' 
                url='/TanksMenu.pdf' 
                // style={{color: 'white', fontSize: '30'}}
            />
            {/* <TextPanel 
                title={<Link text='Click here to check out the Menu!' 
                url='/TanksMenu.pdf' />} 
            /> */}
        </div>
    )
}
export default MenuBlock;

import profile from '../../assets/image/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between p-4 mx-4 border-b-2 '>
             <h1 className='text-4xl p-8 font-semibold '>Knowledge Cafe</h1>
             <img src={profile} alt="" />
        </header>
    );
};

export default Header;
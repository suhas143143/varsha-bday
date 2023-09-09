import { Outlet } from 'react-router-dom'




type NavbarProps = {
    children: React.ReactNode
}

const Navbar = ({ children }: NavbarProps) => {


    return (
        <>
            <nav>
                {children}
            </nav>
            <Outlet />
        </>
    )
}


export default Navbar
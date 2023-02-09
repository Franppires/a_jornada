
export default function Navbar() {

  return (
    <nav className="nav">
        <a className="icon" href="/">Front Beginners</a>
        <ul>
            <CustomLink href="/about">Sobre</CustomLink>
            <CustomLink href="/profile">Perfil</CustomLink>
        </ul>
    </nav>
  )
}

function CustomLink({href, children, ...props}) { 
  const path = window.location.path

  return (            
    <li className= {path === href ? 'active' : ''}>
      <a href={href} {...props}>{children}</a>
    </li>
  ) 
}


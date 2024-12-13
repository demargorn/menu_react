import './Menu.css';

function Menu({ items, opened = false }) {
   if (opened) {
      return (
         <div className='menu menu-open'>
            <div className='menu-toggle'>
               <span></span>
            </div>
            <nav>
               <ul>
                  {items.map((i) => (
                     <li key={i.title}>
                        <a href={i.href}>{i.title}</a>
                     </li>
                  ))}
               </ul>
            </nav>
         </div>
      );
   }

   return (
      <div className='menu'>
         <div className='menu-toggle'>
            <span></span>
         </div>
      </div>
   );
}

export default Menu;

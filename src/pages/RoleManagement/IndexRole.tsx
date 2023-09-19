
import { useNavigate } from 'react-router-dom';

import Sidebar from '../../components/layout/Sidebar'
import Navbar from '../../components/layout/Navbar'
import Button from '../../components/element/Button';

const menuData = [
    {
        label: 'DASHBOARD',
        link: '/dashboard',
    },

    {
        label: 'User Management',
        link: '/user',
        submenu: [
            {
                label: 'Submenu 2.1',
                link: '/menu2/submenu1',
            },
            {
                label: 'Submenu 2.2',
                link: '/menu2/submenu2',
            },
        ],
    },
    {
        label: 'Role Management',
        link: '/role',
        active: true
    },
    // ...
];


const IndexRole = () => {
    const navigate = useNavigate();
    const handleAddRole = () => {
        navigate('/AddRole');
    }
    return (
        <div className="flex bg-DEE4EE">
            <Sidebar menuData={menuData} />
            <div className="flex-grow">
                <Navbar
                    id='Role Management'
                    titleNavbar='Role Management'
                    namePerson='John Doe'
                    avatar='https://i.pravatar.cc/300'
                    level='Level 1'
                />
                {/* Main content */}
                <main>
                    <div className="flex items-center justify-end m-5">
                        <Button
                        id='Add Role'
                        label='Add Role'
                        onClick={handleAddRole}
                        color='bg-sky-700'
                        hover='hover: bg-sky-500'
                         />
                    </div>
                    <div className="p-4 max-w-full bg-white  m-5">
                        <div className='w-42 h-34'>
                            <div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, dolorem quasi delectus aliquam facere iusto incidunt ex esse natus, officiis nam quam accusamus possimus fugit sapiente earum. Ad dolorem asperiores enim quidem, nemo, quasi maiores ea laboriosam laudantium error, suscipit sint saepe odio rerum vero quaerat! Animi voluptatem id vitae eligendi odio tempore saepe, nobis, natus nihil sapiente minus soluta libero similique! Similique id ipsum odio voluptatibus temporibus quae laborum maiores, fuga sapiente! Voluptatem veniam repudiandae accusamus quas? Quasi nam beatae amet dolorum, expedita, porro accusantium libero id nisi saepe, dolorem vel. Itaque, accusantium sapiente maiores error omnis laudantium distinctio, incidunt qui debitis inventore impedit aliquam quisquam sint hic laborum perferendis ut quam, labore cupiditate! Rerum pariatur non, at laudantium reprehenderit vitae mollitia impedit debitis laboriosam odit quasi magnam quod dolorum velit aspernatur odio deleniti tempore earum tenetur aliquam quibusdam. Vel molestiae consequuntur porro numquam provident nesciunt doloremque ducimus repellat veritatis. Voluptatum amet delectus suscipit itaque quisquam soluta. Sed fugiat distinctio placeat exercitationem vitae accusamus illo deserunt voluptate quod beatae autem earum cumque voluptatum, consectetur molestias. Velit natus maiores a commodi? A, aut. Vitae, quos ipsa voluptate aliquid tempore facere! Vel laudantium in dolorum beatae maxime? Tempora delectus consequatur numquam odio rerum illum, laborum voluptatibus iste facilis, illo saepe excepturi perferendis, aliquam autem. Explicabo perferendis tempora dignissimos aspernatur consequatur sit repellendus in veritatis, laudantium beatae? Quis sunt ab, eaque laudantium illo, alias obcaecati libero culpa mollitia magni, ipsum reprehenderit. Dignissimos fuga impedit aliquam, qui ducimus aspernatur quas! Iusto quod harum eius ea quae? Nam adipisci voluptates sit quidem nobis tenetur non at cum perspiciatis aperiam consequuntur eum, laboriosam dignissimos fugit, voluptas soluta optio iure exercitationem velit? Voluptates placeat eaque vero? Nemo itaque, quas cupiditate corrupti cum temporibus fugiat? Libero sunt deleniti quas nesciunt rerum reprehenderit maiores, dolor, cum illo, voluptatibus sequi ut minus amet accusantium quasi voluptatum vel mollitia delectus ipsum odio. Ducimus expedita tenetur iste, quis odit dolore quos nostrum est sunt nisi, distinctio iure ipsam? Accusamus aliquid porro eos unde nostrum quam molestias culpa dolor provident. Blanditiis aliquam voluptate, et itaque earum repellendus non dolor consequatur quae rerum. Iure, exercitationem! Totam voluptatibus, atque beatae nisi maiores laborum voluptas laboriosam nobis doloremque in animi unde ab consequatur eum pariatur. Obcaecati quia eum commodi excepturi, suscipit repudiandae ex eius quibusdam in reprehenderit maxime ratione cupiditate molestias tempora qui numquam saepe unde dicta iste rerum libero! Ratione, excepturi similique. Eaque impedit autem facere eligendi quisquam amet rem obcaecati eveniet, nobis, molestias consectetur, culpa asperiores? Temporibus impedit, ab velit expedita, ullam nisi voluptates veritatis esse dolore nesciunt ipsum saepe voluptatibus quidem repellendus dolorum in at delectus deserunt facere molestiae enim quisquam perspiciatis voluptatem suscipit? Itaque neque in temporibus quisquam, sint dolore! Neque, quia? Voluptatum odio porro, fugiat at qui quod deserunt beatae consequuntur aspernatur quaerat alias odit dolore. Fuga tenetur sit non totam ullam recusandae cum, voluptate eos vel sunt? Possimus, exercitationem quas sit aliquam vero, sed eligendi hic aliquid animi, repellendus voluptas a iusto corporis enim quibusdam voluptatum esse illo distinctio?</p>
                            </div>

                        </div>
                    </div>
                </main>

            </div>
        </div>
    )
}

export default IndexRole
import { faBoxesStacked, faCartPlus, faCartShopping, faPenToSquare, faTableList, faTruckFast, faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons";


export const Links=[
    {
        overlay:"users",
        name:"Users",
        path:"Users",
        icon:faUsers,
        role:["1995"],
    },
    {
        overlay:"add user",
        name:"Add User",
        path:"user/Add",
        icon:faUserPlus,
        role:["1995"],
    },
    {
        overlay:"Categories",
        name:"Categories",
        path:"Categories",
        icon:faTableList,
        role:["1995","1999"],
    },
    {
        overlay:"Add Categories",
        name:"Add Categories",
        path:"Categorie/Add",
        icon:faTableList,
        role:["1995","1999"],
    },
    {
        overlay:"Products",
        name:"Products",
        path:"Products",
        icon:faCartShopping,
        role:["1995","1999"],
    },
    {
        overlay:"Add Products",
        name:"Add Products",
        path:"Product/Add",
        icon:faCartPlus,
        role:["1995","1999"],
    },
    {
        overlay:"Writer",
        name:"Writer",
        path:"Writer",
        icon:faPenToSquare,
        role:["1996","1995"],
    }
]
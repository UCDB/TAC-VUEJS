
//Components
const pag1 = {template:`<div> Welcome to the page number 1</div>` }

const pag2 = {template:`<div> Welcome to the page number 2</div>` }

const pag3 = {template:`<div> Welcome to the page number 2 with Parameter
{{$route.params.name}} {{$route.params.id}}
</div>` }

//Mapping
const routes=[
    {path:"/pag1", component:pag1},
    {path:"/pag2", component:pag2},
    {path:"/pag3/:name/:id", component:pag3}
]

//Vuer Router, the object responsbible to 
//control the mapping between the componentes and the paths
const router = new VueRouter({
    routes
})

//adding router inside the Main Vue object
app = new Vue({router}).$mount('#app')


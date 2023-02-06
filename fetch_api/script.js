//função javascript => endereço da api de usuarios aleatorios 
// get, post, put, delete

// fetch('https://reqres.in/api/users/1')
// .then((res) => console.log(res)) //resposta api (status 200 está ok)
//     .then((res) => {
//         console.log(res)
//         if (res.ok) {
//             console.log('sucess')
//             res.json() //resposta api com a resposta json sendo data, por isso faz um outro then 
//         } else { 
//             console.log('erro')
//         }
//     })

// puxando o primeiro nome da lista    
//     .then((data) => console.log(data.data[0].first_name)) 

// status 200 é correto sem erro, mas se tiver algum erro podemos imprimir no console
//     .catch((err) => console.log(err))


// como fazer um post
fetch('https://reqres.in/api/users', { 
    method: 'POST',
    headers: { 
        'Content-Type': 'application/json',
    },
        body: JSON.stringify({  
            name: 'jorge',
        }),
})
.then((res) => res.json())
.then((data) => console.log(data))
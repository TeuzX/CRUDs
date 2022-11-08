console.log('Ola Pessoas!'); 
console.log('#construindoCRUDS');

// [CRUDS] JavaScript Basico
const minitwitter = {
    usuarios: [
        {
            username: 'mateusouto',
        }
    ],
    posts: [
        {
            id: 1,
            ower: 'mateusouto',
            content: 'Meu primeiro tweet'
        }
    ],
};
//CREATE
function criaPost({dados}) {
    minitwitter.posts.push({
        id: minitwitter.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    });
}
criaPost( {owner: 'mateusouto', content: 'Segundo tweet' });
//console.log(miniTwetter.posts)

//READ
function pegaPosts() {
    return minitwitter.posts;
}
console.log(pegaPosts()) 

//UPDATE

function atualizaContentDoPost(id, novoconteudo) {
    const postQueVaiSerAtualizado = pegaPosts().find((post) => {
        return post.id === id;
    });
    console.log(postQueVaiSerAtualizado)
    postQueVaiSerAtualizado.content = novoConteudo
}
atualizaContentDoPost(1, 'Novo conteudo do post')
console.log(pegaPosts())

//DELETE

function apagaPost(id) {
    const listaDePostsAtualizada = pegaPosts().filter((postAtual) => {
        return postAtual.id !== id;
    })
    minitwitter.posts = listaDePostsAtualizada;
}
apagaPost(1);
apagaPost(2);
apagaPost(3);
console.log(pegaPosts()); []
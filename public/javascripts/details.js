const getIdPost = document.getElementById("but_del").getAttribute("data-id")
function delete_Post(){
    fetch(`/index/${getIdPost}`,{
        method: 'DELETE'
    })
    .then((res)=>{
        console.log("success")
    })
    .catch((error)=>{

    })
    window.location.href ="/index"
}
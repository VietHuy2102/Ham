let productManager = new ProductManager();
productManager.showlistProduct();
function save(){
    //b1: lay gia tri tu 3 o input
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let author = document.getElementById('author').value;
productManager.add(name,price,author);

}
function deleteProduct (index){
productManager.destroy(index);
}

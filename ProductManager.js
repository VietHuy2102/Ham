class ProductManager {
    constructor() {
        this._product = [];
    }

    showlistProduct() {
        let html = '';
        if (this._product.length === 0) {
            html += '<tr>'
            html += '<td colspan="6">No data</td>'
            html += '<tr>'
        } else {
            for (let i = 0; i < this._product.length; i++) {
                html += '<tr>'
                html += `<td>${i+1}</td>`;
                html += `<td>${this._product[i].getname()}</td>`;
                html += `<td>${this._product[i].getPrice()}</td>`;
                html += `<td>${this._product[i].getname()}</td>`;
                html += `<td><button onclick="deleteProduct(${i})">Delete</button></td>`;
                html += '<tr>'

                document.getElementById('list-product').innerHTML = html;
            }
        }

        add(name, price, author){
            let product = new Product(name, price, author);
            this._product.push(product);
            //goi lai ham showList de hien thi lai ket qua
            this.showlistProduct();
        }
        clearinput(){
             document.getElementById('name').value = ''
            document.getElementById('price').value= ''
            document.getElementById('author').value= ''
        }
        destroy(index){
            this._product.splice(index, 1);
            this.showlistProduct();
        }
    }

}
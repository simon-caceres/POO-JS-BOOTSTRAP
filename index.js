class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }

    addProduct() {

    }
}

class UI {
    addProduct(product) {
        const product_list = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong> ${product.name}
                    <strong>Price</strong> ${product.price}
                    <strong>Year</strong> ${product.year}
                    <a href="#" class="btn btn-danger btn-sm" style="border-radius: 100%" name="delete" >x</a>
                </div>
            </div>
        `;
        product_list.appendChild(element);
        this.resetForm();
    }

    resetForm() {
        document.getElementById('product-form').reset()
    }

    deletePoduct(target) {
        if (target.name === "delete") {
            target.parentElement.parentElement.parentElement.remove();
            this.showMessage('Product Deleted Sucessfully', 'info')
        }
    }

    showMessage(message, className) {
        const element = document.createElement('div');
        element.className = `alert alert-${className} mt-3`
        element.appendChild(document.createTextNode(message));
        // show in dom
        const container = document.querySelector('.container');
        const app = document.querySelector('#app');
        container.insertBefore(element, app);
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000)
    }


}

//DOM EVENTS

document.getElementById('product-form')
    .addEventListener('submit', (e) => {
        e.preventDefault()
        const product = new Product(
            e.target[0].value,
            e.target[1].value,
            e.target[2].value,
        )

        const ui = new UI();
        ui.addProduct(product);
        ui.showMessage('Product Add Success', 'success')
    })

document.getElementById('product-list')
    .addEventListener('click', (e) => {
        const ui = new UI();
        ui.deletePoduct(e.target);
    })

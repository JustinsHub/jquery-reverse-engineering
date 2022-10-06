class ReverseJQuery {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector)
    }
    html(el){
        this.elements.forEach((element) => {
            element.innerHTML = el
        })
        return this
    }

    on(event, fn){
        this.elements.forEach(element => {
            element.addEventListener(event, fn)
        })
        return this
    }

    css(propertyName, value){
        if(value === undefined) return window.getComputedStyle(this.elements[propertyName])

        this.elements.forEach((element => {
            element.style[propertyName] = value
        }))
        return this
    }

    

    //parameter takes in id
    ajax(url, data) {
        fetch(url, data)
        .then(res=> {
            return res.json()
        })
        .catch((error) => console.log(error))
    }
}


const $$ = (element) => {
    return new ReverseJQuery(element)
}

// let handleSubmit = (e) => {
//     console.log('test')
// }

// $$("btn").html('test').on('click', handleSubmit)


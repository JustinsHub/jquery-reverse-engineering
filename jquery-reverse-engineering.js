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
    ajax(option) {
        const {url, data, success} = option
        let params = ""
        const res = Object.entries(data);

        for(let i = 0; i < res.length; i++){
            const [key, value] = res[i]
            if(i===res.length - 1){
                params += `${key}=${value}`
            }else {
                params += `${key}=${value}&`
            }
        }

        fetch(`${url}/${params}`)
        .then(res => res.json())
        .then(success)


        // fetch(url, data)
        // .then(res=> {
        //     return res.json()
        // })
        // .catch((error) => console.log(error))
    }
}

const $$ = (element) => {
    return new ReverseJQuery(element)
}

// let handleSubmit = (e) => {
    //     console.log('test')
    // }
    
    // $$("btn").html('test').on('click', handleSubmit)
    
// $$.ajax({
//     url: "url",
//     data: {
//         id: 1
//     },
//     success: (res) => {
//         console.log(res)
//     }
// })

const renderCountry = (data) => {
    // console.log(data);
    const html = `
    <div style="display: flex; align-items: center;justify-content: space-around; margin:10px 0;">
        <img width='200' style='border:1px solid black' src="${data?.flags?.png}"/>
        <h3 style='margin:0 20px'>capital 
        (${data?.capital && data?.capital[0]})</h3>
    </div>
    `
    document.getElementById('section').insertAdjacentHTML('beforeend', html)
}

const inputValue = document.getElementById('input')

// promises

const country = (name) => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then((res) => {
            // console.log(res);
            if (!res.ok) throw new Error('country not found')
            return res.json()
        })
        .then((data) => {
            // console.log(data[0])
            // if (!data)
            renderCountry(data[0])
            const border = data[0]?.borders[0]
            return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        })
        .then((res) => {
            if (!res.ok) throw new Error('country not found')
            return res.json()
        })
        .then((data) => {
            // console.log(data[0])
        })
        .catch((err) => alert(err.message))
    // .finally(() => {
    //     document.getElementById('input').value = ''
    // })
}

// async await

const country1 = async (name) => {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
        console.log(res);
        const data = await res.json()
        console.log(data[0]);
        if (!data[0]) throw new Error('country not found')
        renderCountry(data[0])
        return 'akshit'
    }
    catch (err) {
        alert(err.message)
        throw err
    }

}
// async functions return promises

// const returnedAns = country1('india')
// console.log(returnedAns);
// country1('india')
//     .then(data => console.log(data))
//     .catch(err => console.log(err.message))

(async function () {
    try {
        const data = await country1('india')
        console.log(data);
    }
    catch (err) {
        console.log(err.message);
    }

})()

document.getElementById('btn').addEventListener('click', (e) => {
    e.preventDefault()
    country1(inputValue.value)
    inputValue.value = ''
})
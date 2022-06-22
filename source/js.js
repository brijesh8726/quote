const quotes = document.querySelector(".quotes")
    const author = document.querySelector(".author")
    const newq = document.querySelector("#newq")
    console.log(quotes);
    console.log(author);
    let realdata = ""
    const getNewQuotes = ()=>{
        let rnum = Math.floor(Math.random() * 1643);
        console.log(rnum);
        quotes.innerText = `${realdata[rnum].text}`;
        author.innerText = `${realdata[rnum].author}`;
    }
    const getQuotes = async()=>{
    const api = "https://type.fit/api/quotes";

    try {
        let data = await fetch(api);
     realdata = await data.json();
       getNewQuotes();
        
    } catch (error) {
        
    }
    };

    newq.addEventListener("click",getNewQuotes)

    getQuotes();
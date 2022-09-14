function getArticleGenerator(articles) {
    const output = document.getElementById("content")
    const ourCopy = articles.slice()

    return function showNext(arr = []) {
        if (ourCopy[0] !== undefined) {
            const article = document.createElement("article")
            article.innerHTML = ourCopy.shift()
            output.appendChild(article)
        }

        return showNext
    }
}

// Variant 2 

function getArticleGenerator(articles) {
    const ID_CONTENT_DIV = 'content';

    return () => {
        if (!articles.length) return;

        const articleElement = document.createElement('article');
        articleElement.textContent = articles.shift();
        document.getElementById(ID_CONTENT_DIV).appendChild(articleElement);
    };
}

const displayOnGrid = (item) => {
    const gridContainer = document.querySelector('.grid-container');
    const gridItem = document.createElement('div');
    gridItem.setAttribute('class', 'grid-item');
    const gridImage = document.createElement('img');
    gridImage.setAttribute('src', item.url);
    gridItem.appendChild(gridImage);
    const gridTitle = document.createElement('p');
    gridTitle.innerHTML = item.name;
    gridItem.appendChild(gridTitle);
    const gridComments = document.createElement('input');
    gridComments.setAttribute('id', item.id);
    gridComments.setAttribute('type', 'submit');
    gridComments.setAttribute('value', 'Comments');
    gridItem.appendChild(gridComments);
    gridContainer.appendChild(gridItem);
}


const callApi = async() => {
    const request = await fetch('https://api.imgflip.com/get_memes');
    const data = await request.json();
    return data;
}

export const addToGrid = async() => {
    const ans = await callApi();
    const memesArr = ans.data.memes;
    memesArr.splice(-6).forEach((item) => {
        displayOnGrid(item);
    });
}
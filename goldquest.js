(async () => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.alert = n.contentWindow.alert.bind(window);
    window.prompt = n.contentWindow.prompt.bind(window);
    window.confirm = n.contentWindow.confirm.bind(window);
    n.remove();
})();

function reactHandler() {
                return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
};

function changeGold() {
    let amount = Number(parseFloat(prompt('How much gold do you want?')));
    reactHandler().stateNode.setState({ gold2: amount, gold: amount });
        
    alert('Crypto added!');
}

function swap() {
    alert('Choose the first box')
    reactHandler().stateNode.setState({ choices : {0 : {'val' : 100, 'text' : 'Swap', 'type' : 'swap'}, 1 : {'val' : 100, 'text' : 'Swap', 'type' : 'swap'}, 2 : {'val' : 100, 'text' : 'Swap', 'type' : 'swap'}}});
}

function getAnswer() {
    alert(Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner.stateNode.state['question']['correctAnswers'])
    return 'boom'
}


function footer() {
    let element = document.createElement('div');
    
    element.style = `font-family: "Nunito", sans-serif; font-size: 14px; height: 65px; width: 175px; border: 4px solid rgb(15, 15, 15); background: rgb(240, 240, 240); position: absolute; top: 20x; left: 20px; border-radius: 10px; color: rgb(0, 0, 0); text-align: center;`;
    element.innerHTML = `<p>Made by jedithedev :)</p> <button onClick="changeGold()">Change Gold</button>  <button onClick="getAnswer()">Get Answer</button> <button onClick="swap()">Swap</button>`;
    document.body.appendChild(element);
    
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    element.onmousedown = ((e = window.event) => {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = (() => {
            document.onmouseup = null;
            document.onmousemove = null;
        });
        document.onmousemove = ((e) => {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            let top = (element.offsetTop - pos2) > 0 ? (element.offsetTop - pos2) : 0;
            let left = (element.offsetLeft - pos1) > 0 ? (element.offsetLeft - pos1) : 0;
            element.style.top = top + "px";
            element.style.left = left + "px";
        });
    });
};

footer();

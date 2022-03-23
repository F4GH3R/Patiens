//drag and drop functions
function allowDrop(ev) {
    ev.preventDefault();
  }

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log(ev);
}

function drop(ev, el) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    el.appendChild(document.getElementById(data));
}

//snark select function
window.onload = function() 
    {
        document.body.onselectstart = function() 
        {
            return false;
        }
    }

// empty array to contain cards
deck = new Array();
var card;
function  divfunc()
{
    //getdeck function
    for(let i = 0; i < suits.length; i++)
    {
        for(let x = 0; x < values.length; x++)
        {
            //create card and numbers
            card = {Value: values[x], Suit: suits[i]};
            number =  + values[x] + suits[i];
            deck.push(card);
        }
    }

    //shuffle
    for (let i = 0; i < 1000; i++)
    {
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let tmp = deck[location1];
        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
        // k = variable to limit deck from exceeding over the number 52
        let k = 1;
for (let i = 1; i < 8; i++)
    {
        let newi = i;
        //column creator
        var column = 'column' + i;
        var div = document.createElement('div');
        div.setAttribute('id', column);
        div.setAttribute('class', 'column');
        div.setAttribute('ondrop', "drop(event, this)");
        div.setAttribute('ondragover', "allowDrop(event)");
        document.getElementById("plan").appendChild(div);
            for (let j = 1; j < 20; j++)
            {
//row creator
                var div = document.createElement('div');
                div.setAttribute('id', 'c' + i + 'r' + j);
                div.setAttribute('ondrop', "drop(event, this)");
                div.setAttribute('ondragover', "allowDrop(event)");
                div.setAttribute('data-condition', 'false')
                document.getElementById(column).appendChild(div);
               // console.log(div.dataset)
                //Assign card images to rows
                if(k > 0 && k <= 52)
                {
                    if(newi > 0)
                    {
                        let childString = deck[k].Value + deck[k].Suit;
                        var imgDiv = document.createElement('img');
                        imgDiv.src = 'images/' + childString + '.png';
                        div.appendChild(imgDiv);
                        
                        imgDiv.setAttribute('draggable',"true");
                        imgDiv.setAttribute('ondragstart',"drag(event)")
                        imgDiv.setAttribute('data-condition', 'true')
                        imgDiv.setAttribute('data-card', childString)
                        imgDiv.setAttribute('id', imgDiv.dataset.card);
                        div.setAttribute('id', 'c' + i + 'r' + j);
                        newi--;
                        k ++;
                        console.log(imgDiv.dataset)
                    }
                    /*
                    console.log(div.getAttributeNode('id'));
                    var name = div.getAttributeNode('id');
                    console.log(name);
                    */
                }
            }
        }
    return deck
}

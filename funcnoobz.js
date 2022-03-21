//W3 schools drag and drop functions
function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
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
            console.log(card.Value[4])
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
                div.setAttribute('id', 'Fc' + i + 'r' + j);
                div.setAttribute('ondrop', "drop(event, this)");
                div.setAttribute('ondragover', "allowDrop(event)");
                document.getElementById(column).appendChild(div);

                //Assign card images to rows
                if(k > 0 && k <= 52)
                {
                    if(newi > 0)
                    {
                        let childString = deck[k].Value + deck[k].Suit;
                        var imgDiv = document.createElement('img');
                        imgDiv.src = 'images/' + childString + '.png';
                        div.appendChild(imgDiv);
                        imgDiv.setAttribute('id', childString);
                        imgDiv.setAttribute('draggable',"true");
                        imgDiv.setAttribute('ondragstart',"drag(event)")
                        div.setAttribute('id', 'Tc' + i + 'r' + j);
                        newi--;
                        k ++;

                    }
                    console.log(div.getAttributeNode('id'));
                }//W3 schools drag and drop functions
function allowDrop(ev) {
    ev.preventDefault();
  }
/*
function drag(ev) {
    bussFunc();
    for(let q = 0; q < bus.length; q++){
        ev = bus[q];
        console.log(ev);
        ev.dataTransfer.setData("text", ev.target.id);
    }

}
*/
function drag(ev) {
    bussFunc();
    ev.dataTransfer.setData("text", ev.target.id);
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
divfunc();
bussFunc();
function bussFunc() // enabled with a ---> element.addEventListener("click", myFunction);
{
    console.log(namevar);
    if(namevar != 'empty'){ //(imgDiv.dataset.condition = 'true')
        let rowVar = '';
        if(imgDiv.dataset.namevar[4] != null) {
            rowVar = namevar.slice(3, 5);
        } else {
            rowVar = namevar[3];
        }
        for(let j = rowVar; j < 20; j++){
            if(namevar[0] = 'c'){  j//row has a card, locate it and put it into the bus[]
                let okok = namevar.slice(0, 3);
                bus.push(okok + j);

            }
            else { //if j row does not have a card return the bus[]
              //  return bus[];
            }
           //document.getElementById('bus').appendChild(clone);
        }
        //document.getElementById(rowVar)
    } else {
        //stop the bus and let it descend
    }
}
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
    //drag conditions
        div.setAttribute('ondrop', "drop(event, this)");
        div.setAttribute('ondragover', "allowDrop(event)");
        document.getElementById("plan").appendChild(div);
            for (let j = 1; j < 20; j++)
            {
//row creator
                var div = document.createElement('div');
            //row name
                div.setAttribute('id', 'c' + i + 'r' + j);
            //drag conditions
                div.setAttribute('ondrop', "drop(event, this)");
                div.setAttribute('ondragover', "allowDrop(event)");
            //create data attributes containing name and condition
                div.setAttribute('data-namevar', 'empty')

                document.getElementById(column).appendChild(div);
               // console.log(div.dataset)
                //Assign card images to rows
                if(k > 0 && k <= 52)
                {
                    if(newi > 0)
                    {
                    //childstring = card values
                        let childString = deck[k].Value + deck[k].Suit;
                    //image <div></div>
                        var imgDiv = document.createElement('img');
                    //data configuring
                        console.log(imgDiv.dataset)
                        imgDiv.src = 'images/' + childString + '.png';
                        div.appendChild(imgDiv);
                        div.setAttribute('data-namevar', childString)
                    //drag conditions
                        imgDiv.setAttribute('draggable',"true");
                        imgDiv.setAttribute('ondragstart',"drag(event)")
//create data attributes containing name and condition
                        imgDiv.setAttribute('data-namevar', childString)
                        var namevar = imgDiv.dataset.namevar;
                        imgDiv.setAttribute('id', imgDiv.dataset.namevar);
                    //row name, update
                        div.setAttribute('id', 'c' + i + 'r' + j);
                    //token system to get 1,2,3,4,5,6,7 cards per row
                        newi--;
                    //k is used to cap cards from exceeding the number 52
                        k ++;
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

            }

        }
    return deck
}

/*
function bussFunc(name)
{
    let rowVar = name[3];
    console.log(rowVar);
    /*for(let j = rowVar; j < 20; j++)


    document.getElementById(rowVar)
}
bussFunc(c3r2);
*/


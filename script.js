const classesURL = "https://www.dnd5eapi.co/api/classes/";
const spellsURL = "https://www.dnd5eapi.co/api/spells/";
const racesURL = "https://www.dnd5eapi.co/api/races/";

const handleOnSelect = () => {
  let selectedOption = document.getElementById("spellLi");
  let optionVal = selectedOption.value;
  let test = document.getElementById("spellCho").value;
  console.log("test: ", test);
  console.log("myList: ", mylist);

  mylist.addEventListener("change", () => {
    optionVal = selectedOption.value;
  });
};

// MiddleWare to "GET Requests"
const fetcher = async (...args) =>
  await fetch(...args).then((res) => res.json()).then(data => data.results);

//a function for "GET" request, returns All The Classes from api
async function  getAllClasses(url) {
  const list = await fetcher(url)
  const ul = list.map((item) => `<option>${item.index}</option>`);
  document.getElementById('character-class').innerHTML = ul
}

async function getAllRaces(url) {
  const list = await fetcher(url);
  const ul = list.map((item) => `<option>${item.index}</option>`);
  document.getElementById('race').innerHTML = ul
}

async function getAllSpells(url) {
  const list = await fetcher(url);
  const ul = list.map((item) => `<option>${item.index}</option>`);
  document.getElementById('spells').innerHTML = ul
}

function selectClass(){

}

//want to get each item as a selecting option, using mapping? But Im not sure what id set the mapping to, considering I want everything, just as a seperate option
getAllClasses(classesURL);
getAllSpells(spellsURL);
getAllRaces(racesURL);
let klass = document.querySelector('#character-class')
let races = document.querySelector('#race')
let spells = document.querySelector('#spells')


  klass.addEventListener('change', (e) => {
    const target = e.target;
    document.querySelector('#td-class').innerHTML = target.value
  })
  
  races.addEventListener('change', (e) => {
    const target = e.target;
    document.querySelector('#td-race').innerHTML = target.value
  })

  spells.addEventListener('change', (e) => {
    const target = e.target;
    document.querySelector('#td-spell').innerHTML = target.value
  })
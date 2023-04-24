console.log('***** Music Collection *****')

let collection = [];

function addToCollection (titleInput, artistInput, yearPublishedInput, tracksInput) {
    collection.push({title: titleInput, artist: artistInput, yearPublished: yearPublishedInput, tracks:tracksInput});

}

addToCollection("Ys", "Joanna Newsom", "2006",[{name:"Emily", duration:'12:07'},{name:"Monkey & Bear", duration: "9:29"},{name:	"Sawdust & Diamonds", duration:"9:54"},{name:"Only Skin", duration:"16:53"},{name:"Cosmia", duration:"7:15"}]);
addToCollection("Helioself", "Papas Fritas", "1997",[{name:"Hey Hey You Say",duration:"3:14"},{name:"We've Got All Night",duration:"3:04"},{name:"Say Goodbye",duration:"4:04"},{name:"Small Rooms",duration:"2:23"},{name:"Rolling in the Sand",duration:"1:48"},{name:"Live by the Water",duration:"2:45"},{name:"Words to Sing",duration:"2:48"},{name:"Sing About Me",duration:"2:28"},{name:"Just to See You",duration:"3:54"},{name:"Captain of the City",duration:"3:50"},{name:"Weight",duration:"1:49"},{name:"Starting to Be It",duration:"2:54"}]);
addToCollection("Punisher", "Phoebe Bridgers", "2020",[{name:"DVD Menu",duration:"1:09"},{name:"Garden Song",duration:"3:39"},{name:"Kyoto",duration:"3:04"},{name:"Punisher",duration:"3:09"},{name:"Halloween",duration:"4:31"},{name:"Chinese Satellite",duration:"3:37"},{name:"Moon Song",duration:"4:37"},{name:"Savior Complex",duration:"4:01"},{name:"ICU",duration:"3:10"},{name:"Graceland Too",duration:"3:56"},{name:"I Know the End",duration:"5:44"}]);
addToCollection("Fest", "Fotefar", "2009",[{name:"Aslag-Slåtten - Etter Johan Arent Aronsen",duration:"4:16"},{name:"Lille Jon - Etter Folk Och Rackare",duration:"3:11"},{name:"Jag Haver Ingen Kärare",duration:"3:14"},{name:"Wachet Auf, ruft uns die Stimme - BWV 645",duration:"3:18"},{name:"Det Sägs Att I",duration:"0:25"},{name:"Under Bordet",duration:"2:43"},{name:"Det Sägs Att II",duration:"0:23"},{name:"Dronningen / Livet Är Liksom En Fest - Etter Hans Haugen",duration:"4:04"},{name:"Teppe Teppe Tuva",duration:"3:27"},{name:"Då Väntar Jag Vid Vägarna",duration:"6:21"},{name:"Herregud Ditt Dyre Navn Og Ære",duration:"2:45"},{name:"Brännvin Er Mitt Enda Gull",duration:"2:44"},{name:"Ad Undas",duration:"1:36"}]);
addToCollection("Ágætis byrjun", "Sigur Rós", "1999",[{name:"Intro",duration:"1:36"},{name:"Svefn-g-englar",duration:"10:03"},{name:"Starálfur",duration:"6:45"},{name:"Flugufrelsarinn",duration:"7:47"},{name:"Ný batterí",duration:"8:09"},{name:"Hjartað hamast (bamm bamm bamm)",duration:"7:09"},{name:	"Viðrar vel til loftárása",duration:"10:16"},{name:"Olsen Olsen",duration:"8:02"},{name:"Ágætis byrjun",duration:"7:55"},{name:"Avalon",duration:"4:01"}]);
addToCollection("Freshman Year", "Hop Along, Queen Ansleis", "2005",[{name:"-",duration:"0:24"},{name:"Sirens",duration:"3:44"},{name:"For Sebastian From a Friend",duration:"3:55"},{name:"Elizabeth & Elizabeth",duration:"2:10"},{name:"The Cactus",duration:"3:48"},{name:"Failure",duration:"2:33"},{name:"The Big House",duration:"3:45"},{name:"Of My Brothers and the Bear",duration:"3:47"},{name:"Organ Song",duration:"1:48"},{name:"Hi Too Loo Rye",duration:"2:48"},{name:"Laments of a Mattress",duration:"6:03"},{name:"Bruno is Orange",duration:"3:22"},{name:"Bride and Groom Hot Air Balloon",duration:"3:55"},{name:"The Goose & the Wren",duration:"7:33"},{name:"Workers",duration:"3:14"},{name:"A Drummer's Arm",duration:"2:22"}]);
addToCollection("When your Heartstrings Break", "Beulah", "1999",[{name:"Score from Augusta",duration:"2:54"},{name:"Sunday Under Glass",duration:"2:54"},{name:"Matter vs. Space",duration:"3:00"},{name:"Emma Blowgun's Last Stand",duration:"5:21"},{name:"Calm Go the Wild Seas",duration:"3:01"},{name:"Ballad of the Lonely Argonaut",duration:"2:29"},{name:"Comrade's Twenty Sixth",duration:"1:53"},{name:"The Aristocratic Swells",duration:"2:55"},{name:"Silverado Days",duration:"3:39"},{name:"Warmer",duration:"2:56"},{name:"If We Can Land a Man on the Moon, Surely I Can Win Your Heart",duration:"3:17"}]);
addToCollection("Stranger in the Alps", "Phoebe Bridgers", "2017",[{name:"Smoke Signals",duration:"5:24"},{name:"Motion Sickness",duration:"3:49"},{name:"Funeral",duration:"3:52"},{name:"Demi Moore",duration:"3:18"},{name:"Scott Street",duration:"5:05"},{name:"Killer",duration:"3:09"},{name:"Georgia",duration:"4:07"},{name:"Chelsea",duration:"4:42"},{name:"Would You Rather",duration:"3:19"},{name:"You Missed My Heart",duration:"6:57"},{name:"Smoke Signals (Reprise)",duration:"0:33"}])

console.log(collection);

function showCollection (showInput) {
    console.log(`The collection has ${showInput.length} items.`);
    console.log(`The album(s):`)
    for (let x=0; x<showInput.length; x++) {
        console.log(`${showInput[x].title} by ${showInput[x].artist}, released in ${showInput[x].yearPublished}`);
    }
}

showCollection(collection);

function findByArtist (stringInput) {
    let artistArray=[];
    let i=0
    for (let x=0; x<collection.length; x++) {
        if(stringInput===collection[x].artist) {
            artistArray.push(collection[x]);
            i++
        }
    }
    if (i>0) {
        console.log(artistArray)
        return artistArray;
    }  else {
        return [];

    }
}

console.log(`What Joanna Newsom albums are in the collection?`);
showCollection(findByArtist("Joanna Newsom"));
console.log(`What Julien Baker albums are in the collection?`)
showCollection(findByArtist("Julien Baker"));
console.log(`What Phoebe Bridgers albums are in the collection?`);
showCollection(findByArtist("Phoebe Bridgers"));

//    - Create a function called `search`. This function should:
//    - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//    ```
//    { artist: 'Ray Charles', year: 1957 }
//    ```    
//  - The returned output from `search` should meet these requirements:
//- Return a new array of all items in the `collection` matching *all* of the search criteria.
//- If no results are found, return an empty array.
//- If there is no search object or an empty search object provided as input, then return all albums in the `collection`.
function search (inputObject) {
    let newArray = []
    if (inputObject===undefined) {
        return collection;
    }
    if (Object.keys(inputObject).includes("track")) { //check if inputObject has a track property
        for (let x of collection) { //check each album
            for (let y of x.tracks) { //check each track of each album
                if (y.name===inputObject.track) { //check only the name, ignore duration
                    newArray.push(x);
                }
            }
        }
    } else {
        for (let x of collection) {
            let i=0;
            if (inputObject.artist!=undefined) {
                if (inputObject.artist===x.artist) {
                    i++
                }
            }

            if (inputObject.album!=undefined) {
                if (inputObject.album===x.album) {
                    i++
                }
            }

            if (inputObject.yearPublished!=undefined) {
                if (inputObject.yearPublished===x.yearPublished) {
                    i++
                }
            }
            if (i===Object.keys(inputObject).length) {
                newArray.push(x);
            }
            
        }
    }
    return newArray;
}
console.log("Search for '1999'")
console.log(search({yearPublished:"1999"}));
console.log("Search for 'Phoebe Bridgers'")
console.log(search({artist:"Phoebe Bridgers"}));
console.log("Search for 'Kyoto'")
console.log(search({track:"Kyoto"}));
console.log("Search for '2010' and 'Phoebe Bridgers'")
console.log(search({artist:"Phoebe Bridgers",yearPublished:"2010"}));
console.log("Search for '2017' and 'Phoebe Bridgers'")
console.log(search({artist:"Phoebe Bridgers",yearPublished:"2017"}));
console.log("Search for nothing and return full collection")
console.log(search());

//- Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//- Update the `addToCollection` function to also take an input parameter for the array of tracks.
//''- Update `search` to allow a `trackName` search criteria. 
//  - IF the search object has a `trackName` property, only search for that, ignoring any `artist` or `year` properties.
//- Update the `showCollection` function to display the list of tracks for each album with its name and duration.
//```
//  TITLE by ARTIST, published in YEAR:
//  2. NAME: DURATION
//  3. NAME: DURATION
//  TITLE by ARTIST, published in YEAR:
//  1. NAME: DURATION
//  2. NAME: DURATION
//```





